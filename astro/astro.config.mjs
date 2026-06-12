import { defineConfig } from 'astro/config'
import takt from '@vskstudio/takt-astro'

// Primary path: register the Takt integration (boots core's default instance,
// counts each Astro navigation once). endpoint defaults to /api/event.
// excludeLocalhost is false here so events fire during local dev.
// Alternative per-layout path (do NOT combine, it double-boots):
//   import Takt from '@vskstudio/takt-astro/Takt.astro'  ->  <Takt domain="example.com" /> in <head>
export default defineConfig({
  integrations: [
    takt({ domain: 'example.com', endpoint: '/api/event', excludeLocalhost: false }),
  ],
})
