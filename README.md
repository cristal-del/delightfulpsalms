# Delightful Psalms — Bakery Website

A simple, fast, no-build website for Delightful Psalms. Plain HTML/CSS/JS —
no frameworks, no build step, works anywhere. Customers browse the menu
(Tres Leches cakes, banana bread, cookies) and submit an order request; you
follow up to confirm details and collect payment.

## What's here

- `index.html` — homepage: hero, menu preview, how ordering works, about, testimonials
- `menu.html` — full menu with flavors, sizes, and prices for all three product lines
- `order.html` — the order request form
- `thank-you.html` — the page customers land on after submitting an order
- `styles.css` — the design (cream / blush pink / gold, bakery-warm)
- `script.js` — mobile menu toggle + pre-checks an item on the order form when
  arriving from a menu page's "Order This" link
- `robots.txt` / `sitemap.xml` — basic SEO plumbing

## Before you launch: fill in the PLACEHOLDERs

Search for `PLACEHOLDER` across the files — every spot that needs your real
information is marked that way:

- **Prices and sizes** for every cake flavor, banana bread loaf, and cookie
  dozen (`menu.html`)
- **Your story** in the About section (`index.html`)
- **Real customer testimonials** once you have them (`index.html`)
- **Contact info** — phone, email, service area/pickup location (footer on
  every page)
- **Social links** — Instagram/Facebook URLs (footer on every page)
- **Domain name** — in the `<link rel="canonical">`, Open Graph tags, and
  structured data on each page, plus `robots.txt` and `sitemap.xml`
- **Response time** — how fast you'll confirm an order (`order.html`,
  `thank-you.html`)

## How ordering works right now

This is an **order-request form**, not a checkout — nothing is charged
online. A customer fills out what they want (items, flavors, quantities,
pickup or delivery, date needed), and you follow up by phone/text/email to
confirm availability and pricing, then collect payment however you
currently do (cash, Venmo, Zelle, Square in person, etc). This gets you
taking orders online today with no payment setup required.

**If you later want customers to pay online at checkout**, the site can be
upgraded to a real cart + Square (or Stripe) checkout — that's a bigger
change (product catalog, cart logic, payment integration) and worth doing
once you know which flavors/sizes actually sell.

## Running it locally

No build tools needed. From this folder:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploying it

**Deploy to Netlify** — the order form relies on **Netlify Forms**, so this
site needs to live on Netlify for it to work (GitHub Pages and other static
hosts can't process form submissions).

1. Create a free account at [netlify.com](https://www.netlify.com/).
2. Drag-and-drop this folder onto the Netlify dashboard, or connect this
   GitHub repo (Netlify auto-detects it as a static site — no build command
   needed).
3. That's it — Netlify automatically detects the `data-netlify="true"` form
   in `order.html` on deploy.
4. Point your domain at Netlify (Netlify has simple custom-domain
   instructions in Site Settings → Domain Management).

## The order form (Netlify Forms)

`order.html` is a real, working form — no mailto links. It submits to
**Netlify Forms** (free, included with Netlify hosting) using a plain HTML
POST — no JavaScript involved, so there's nothing that can silently fail.
It redirects to `thank-you.html` after a successful submission.

- Submissions show up in your Netlify dashboard under **Forms** in the left
  sidebar. If the form doesn't appear there, check **Site configuration →
  Build & deploy → Post processing → Form detection** is enabled, then
  redeploy — Netlify only detects forms present in the raw HTML at deploy
  time.
- Turn on email notifications: **Forms → order-request → Settings → Form
  notifications → Add notification → Email notification**, so you get an
  email the moment someone submits an order request.
- The form has a spam honeypot field built in (`bot-field`), so you
  shouldn't need a CAPTCHA for reasonably low volume.
- Want submissions tracked somewhere more structured (e.g. a spreadsheet or
  Airtable board)? Netlify's **Forms → Settings → Outgoing webhook**, or a
  Zapier/Make automation triggered by new form submissions, can push each
  order into Airtable, Google Sheets, or similar — the same pattern used to
  track applications on other sites, if that's useful here too.
- If you ever move off Netlify, this form will stop submitting anywhere —
  swap to a service like [Formspree](https://formspree.io) instead (create
  a free account, get a form endpoint, change the form's `action` attribute
  to point at it, and remove the `data-netlify`/`netlify-honeypot`
  attributes, which are Netlify-specific).

## Editing the menu

Each product line lives in its own `<div class="menu-section">` in
`menu.html` (`#tres-leches`, `#banana-bread`, `#cookies`). To add or remove
a flavor, copy/edit a `.menu-item` block. To add a whole new product line,
copy a `.menu-section` block and give it a new `id`; then add a matching
card to the menu preview on `index.html` if you want it featured there too.
