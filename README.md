# Owen Scaffolding

A Next.js marketing site for Owen Scaffolding, deployed on Netlify.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact Form (Netlify Forms)

The quote assistant and contact form use **Netlify Forms** instead of a backend API. This means:

- No SMTP credentials needed
- Form submissions are captured by Netlify automatically
- Spam protection via built-in honeypot field

### Implementation (Next.js Runtime v5)

This site uses the `@netlify/plugin-nextjs@5` runtime, which requires a specific migration for Netlify Forms:

- **Static form definition**: `public/__forms.html` contains the form schema with `data-netlify="true"` for Netlify to detect at build time
- **JavaScript submission**: The client-side `ContactBot` component submits to `/__forms.html` via FormData with `form-name=owen-contact`
- **No React forms**: No `data-netlify` attributes in React/Next.js components (they are ignored by the v5 plugin)

For more details, see the [Netlify Forms migration guide](https://ntl.fyi/next-runtime-forms-migration).

### Setting up notifications (after deployment)

After deploying to Netlify, you must configure email notifications:

1. Go to your Netlify dashboard → **Forms**
2. Select the **owen-contact** form
3. Click **Settings and usage** → **Form notifications**
4. Add an **Email notification** to `owenscaffolding@hotmail.com`
5. Submit a test quote to verify notifications are working

Without this step, form submissions will be stored in Netlify but no email will be sent.

## Deploy on Netlify

This site is configured for Netlify deployment. The contact form requires the static HTML form element (already present in `app/contact/page.tsx`) for Netlify to detect it at build time.
