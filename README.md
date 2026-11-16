# Tia'z Financial Solutions — Updated Website

React + Vite + Tailwind CSS multi-page website with original Tia'z icon and dedicated pages:

- `/` Home
- `/about-us` About Us
- `/privacy-policy` Privacy Policy (draft)
- `/terms-condition` Terms & Conditions (draft)
- `/contact-us` Contact Us (form awaiting verified email/backend)

## Run locally

```bash
npm install
npm run dev
```

## Build and deploy

```bash
npm run build
```

Upload the **contents of `dist/`** to your hosting public_html. For Hostinger/cPanel Apache, copy `public/.htaccess` to public_html too (Vite should copy it to dist during build). This enables refresh/direct links to `/privacy-policy` and the other routes.

## IMPORTANT BEFORE GOING LIVE

Edit `src/pages.jsx` → `COMPANY`: provide verified legal entity name, registered address, official support email/phone, grievance officer contact, effective date, and app URL. Check real payment, KYC, data retention, storage location, metal provider/custody, cancellation, and delivery practices. The text is a product-aligned review draft, **not a copy of thevavi.com legal pages**. Their page contents could not be read reliably during this work. Have qualified legal counsel review and approve. The Contact form deliberately **does not submit** until an email/backend is configured, preventing false success claims.

The homepage mockup is illustrative; it does not show live prices. Prices and transaction processing require backend integrations. Existing PDF documents under `public/legal/` are review drafts.
