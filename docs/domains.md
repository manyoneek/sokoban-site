# Domain shortlist — checked 2026-09-28

Andy’s preferred name: **sokomoving.co** (2026-09-28). Earlier shortlist favored sokomovingco.com on renewal cost; brand preference now takes precedence.
No domain has been purchased or reserved. Earlier RDAP checks returned 404, but the .co response actually says no RDAP service is available, so that result is inconclusive, NOT evidence of availability. Squarespace’s fully loaded exact-name search now offers sokomoving.co for $40; final availability remains subject to checkout. `playsoko.com` returned a registered record.

Standard non-premium Porkbun rates, USD per year (registration / renewal):
- sokomovingco.com: $11.08 / $11.08.
- sokomoving.com: $11.08 / $11.08.
- sokomoving.app: $8.75 / $14.93.
- sokomoving.co: $15.76 / $31.20.

Source: https://porkbun.com/products/domains (registration and renewal columns, live readback). The page says prices include ICANN and other fees. Verify final availability, premium designation, taxes if any, and checkout total before purchase. These domain costs are separate from Railway usage.

RDAP: https://rdap.verisign.com/com/v1/domain/sokomovingco.com (same endpoint for other .com names); https://rdap.org/domain/sokomoving.app and https://rdap.org/domain/sokomoving.co.

## .co registrar comparison — 2026-09-28, updated for agent access

USD standard/non-premium prices, not binding checkout quotes. No purchases, accounts, keys or integrations created. API capabilities below were checked in current official documentation, not authenticated production calls.

| Provider | Registration | Renewal | Automation and qualifications |
|---|---:|---:|---|
| Dynadot | $4.99 | $31.20 | Broad API: availability, registration, renewal, transfers, DNS/DNSSEC, contacts, nameservers, privacy, renewal option. Available to regular accounts; key and IP setup. Sandbox. |
| Porkbun | $15.76 | $31.20 | Full documented registrar/DNS API plus official local/hosted MCP; scoped keys, per-domain opt-in, spending controls, dry runs, sandbox, idempotency, webhooks. |
| Cloudflare | ~$30 | ~$30 | Price is third-party indicative, NOT official quote. Official no-markup pricing; DNS API/MCP; registrar API beta supports search/check/register but only some TLDs, no renew/transfer/contact-update endpoints yet. .co API registration eligibility must be checked authenticated. |
| GoDaddy | $0.01 first year with required 3-year purchase; two more years at $59.99 each = $119.99 upfront before applicable extras/tax | Confirm final renewal quote; public page lists additional years $59.99 | July 2026 platform beta has open access, scoped tokens, v3 quote/register/DNS, alpha CLI; renewal/transfer/contact operations remain v1/v2. Earlier account-count restrictions are obsolete for the new platform. |
| Squarespace (successor to Google Domains) | $40 for exact sokomoving.co search | Listed-price renewal policy; verify $40 checkout renewal | No public registrar/DNS API found in reviewed documentation. Browser management possible but less robust; external DNS provider is an option. |
| Namecheap | $19.98 | $45.48 | Registration/renewal/DNS API, but activation requires 20 domains OR $50 balance OR $50 spent in last 2 years; IPv4 allowlist. Billing via prepaid balance; DNS API not for FreeDNS/PremiumDNS. |

### Recommendation

For Andy’s new priority of agent-managing nearly everything: **Porkbun** is the best documented turnkey fit (official MCP, full lifecycle, fine-grained controls). Dynadot is the lower-cost, broad-API alternative; a native MCP is not necessary because REST calls can be made from the terminal. Difference in first-year price: $10.77, published renewal equal. GoDaddy is technically viable, not disqualified by old API restrictions, but its advertised .co multi-year offer costs more.

Account ownership, contact verification, payment setup and initial authorization may still require Andy. After setup, an agent can handle routine domain/DNS work through authorized API credentials stored securely. No claim that a live connection exists yet. Hosting remains Railway.

### Sources and evidence

- Dynadot live browser .co page: https://www.dynadot.com/domain/co — **$4.99**, correcting stale search excerpt $4.80.
- Dynadot API: https://www.dynadot.com/domain/api and https://www.dynadot.com/domain/api-commands
- Porkbun live HTML prices: https://porkbun.com/products/domains
- Porkbun API/MCP: https://porkbun.com/api/json/v3/documentation and https://porkbun.com/llms/guides/getting-started
- GoDaddy USD browser .co promotion: https://www.godaddy.com/tlds/co-domain?currencyType=USD
- GoDaddy current platform/open access: https://www.godaddy.com/resources/news/introducing-the-godaddy-developer-platform-domain-apis-for-developers-and-their-agents
- GoDaddy endpoint coverage: https://developer.godaddy.com/en/docs/references/rest/domains/v3
- Cloudflare API limitations: https://developers.cloudflare.com/registrar/registrar-api/
- Cloudflare indicative third-party prices: https://cfdomainpricing.com/ (.co $30 registration/$30 renewal, dated today)
- Squarespace fully loaded browser search: https://domains.squarespace.com/domain-search?query=sokomoving.co — initial loading text misleadingly said unavailable, later resolved to exact match $40.
- Squarespace renewal policy official search excerpt: https://support.squarespace.com/hc/en-us/articles/218193418-Squarespace-domain-renewals
- Namecheap live browser pricing: https://www.namecheap.com/domains/registration/cctld/co/
- Namecheap API requirements: https://www.namecheap.com/support/knowledgebase/article.aspx/9739/63/api-faq/
