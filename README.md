
## Develop by jamil-rayhan

## Google reviews

The home page loads the business rating and reviews from Google Places and links
to the place on Google Maps. Configure the Maps JavaScript API and Places API
(New) browser key and place ID in the project-root `.env.local`:

```text
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-restricted-browser-key
NEXT_PUBLIC_GOOGLE_PLACE_ID=your-google-place-id
```

Restrict the key to the site's domains and the Maps JavaScript API and Places
API (New). Add both variables to the deployment environment as well, then
restart/redeploy the app. Reviews are displayed with Google and author
attribution and link through to Google Maps.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
