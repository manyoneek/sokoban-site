'use strict';
// Native browser animations keep this static site small; no runtime framework.
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const toggle = document.querySelector('#motion-toggle');
const videos = [...document.querySelectorAll('.game-loop')];
let manualPause = null;
function paused() { return manualPause ?? reduced.matches; }
function updateMotion() {
  const stop = paused();
  document.body.classList.toggle('motion-paused', stop);
  toggle.textContent = stop ? 'Play motion' : 'Pause motion';
  toggle.setAttribute('aria-pressed', String(stop));
  for (const video of videos) {
    if (stop || document.hidden || video.dataset.inView !== 'yes') video.pause();
    else video.play().catch(() => {}); // Poster remains visible if autoplay is unavailable.
  }
}
const reveal = new IntersectionObserver(entries => {
  for (const entry of entries) if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    reveal.unobserve(entry.target);
  }
}, {threshold: .12});
for (const element of document.querySelectorAll('.reveal')) reveal.observe(element);
const playback = new IntersectionObserver(entries => {
  for (const entry of entries) entry.target.dataset.inView = entry.isIntersecting ? 'yes' : 'no';
  updateMotion();
}, {threshold: .1});
for (const video of videos) playback.observe(video);
toggle.addEventListener('click', () => { manualPause = !paused(); updateMotion(); });
reduced.addEventListener('change', () => { manualPause = null; updateMotion(); });
document.addEventListener('visibilitychange', updateMotion);
updateMotion();
document.documentElement.classList.add('js');
