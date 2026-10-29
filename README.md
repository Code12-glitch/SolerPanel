
## Develop by jamil-rayhan

## Google reviews

The home pages load the business rating and reviews from Google Places and link
to the place on Google Maps. Configure the Maps JavaScript API and Places API
(New) browser key and place ID in the project-root `.env.local`:

```text
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-restricted-browser-key
NEXT_PUBLIC_GOOGLE_PLACE_ID=your-google-place-id
```

Restrict the key to the site's domains and the Maps JavaScript API and Places
API (New). This browser key is included in client-side requests, so do not treat
it as a secret; restrict it by HTTP referrer and enabled APIs.

For Vercel, add both variables under **Project Settings → Environment
Variables**. Enable them for the relevant environment (including **Preview**
for preview deployments), then create a new deployment. `.env.local` is only
used on your computer and does not configure Vercel. Reviews are displayed
with Google and author attribution and link through to Google Maps.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
