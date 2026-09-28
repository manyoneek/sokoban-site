const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
const base=process.env.SITE_URL||'http://127.0.0.1:8768';
const browser=await chromium.launch({executablePath:process.env.CHROME||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const results=[];
for(const width of [320,390,768,1024,1440]){
 const page=await browser.newPage({viewport:{width,height:900}});const errors=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)errors.push(`${r.status()} ${r.url()}`)});
 await page.goto(base);await page.waitForTimeout(1000);
 for(const section of await page.locator('main section').all()){await section.evaluate(e=>e.scrollIntoView({behavior:'instant',block:'center'}));await page.waitForTimeout(350)}
 await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));await page.waitForTimeout(1000);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`${width}: horizontal overflow`);
 assert.deepEqual(await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src)),[]);
 assert.deepEqual(errors,[]);
 for(const href of await page.locator('a[href^="#"]').evaluateAll(as=>as.map(a=>a.getAttribute('href')))){if(href!=='#')assert.equal(await page.locator(href).count(),1,href)}
 await page.locator('#motion-toggle').click();assert.equal(await page.locator('#motion-toggle').getAttribute('aria-pressed'),'true');assert(await page.locator('video').evaluate(v=>v.paused));
 await page.locator('#motion-toggle').click();assert.equal(await page.locator('#motion-toggle').getAttribute('aria-pressed'),'false');
 await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));await page.waitForTimeout(1200);await page.screenshot({path:`/tmp/soko-site-${width}-verified.png`,fullPage:true});
 results.push({width,overflow:false,missingImages:0,errors,pauseToggle:'pass',anchors:'pass'});await page.close();
}
const reduced=await browser.newPage({reducedMotion:'reduce'});await reduced.goto(base);await reduced.waitForTimeout(500);assert(await reduced.locator('video').evaluate(v=>v.paused));assert.equal(await reduced.locator('#motion-toggle').getAttribute('aria-pressed'),'true');
const nojs=await browser.newPage({javaScriptEnabled:false});await nojs.goto(base);assert(await nojs.locator('#story-title').isVisible());
assert.equal((await nojs.request.get(base+'/privacy.html')).status(),200);
await browser.close();fs.writeFileSync('docs/site-checks.json',JSON.stringify({results,reducedMotion:'pass',noJavaScriptContent:'pass',privacy:'pass'},null,2)+'\n');console.log('PASS responsive, assets, motion controls, reduced motion, no-JS content, privacy');
})();
