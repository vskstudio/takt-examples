<script lang="ts">
  import { Takt, useTakt } from '@vskstudio/takt-svelte'

  const takt = useTakt()

  function buy() {
    takt.track('Purchase', {
      props: { plan: 'pro', source: 'example' },
      revenue: { amount: '29.00', currency: 'EUR' },
    })
  }
</script>

<!-- Boots core, fires the initial pageview, wires SPA nav. -->
<!-- Advanced option (Takt 0.5): scrubUrl rewrites the URL before it is sent (here: drop the #fragment). -->
<!-- scriptOrigin="https://stats.example.com" : sert le tracker depuis votre domaine (first-party / anti-adblock) -->
<Takt
  domain="example.com"
  endpoint="/api/event"
  track404
  scrubUrl={(url) => url.split('#')[0]}
  excludeLocalhost={false}
/>

<main>
  <h1>Takt + Svelte 5</h1>
  <p>An initial pageview is sent automatically on mount.</p>
  <button onclick={buy}>Buy pro (track Purchase + revenue)</button>
  <button onclick={() => takt.pageview()}>Send pageview</button>
</main>
