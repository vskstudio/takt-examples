import { createApp } from 'vue'
import { TaktPlugin } from '@vskstudio/takt-vue'
import App from './App.vue'

const app = createApp(App)

// Installing with options bootstraps a single instance: fires the initial
// pageview, wires SPA navigation, and registers the v-takt-event directive.
// excludeLocalhost is disabled so events fire during local development.
app.use(TaktPlugin, {
  domain: 'example.com',
  endpoint: 'https://example.com/api/event',
  excludeLocalhost: false,
})

app.mount('#app')
