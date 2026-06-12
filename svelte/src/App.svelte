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
<Takt domain="example.com" endpoint="/api/event" excludeLocalhost={false} />

<main>
  <h1>Takt + Svelte 5</h1>
  <p>An initial pageview is sent automatically on mount.</p>
  <button onclick={buy}>Buy pro (track Purchase + revenue)</button>
  <button onclick={() => takt.pageview()}>Send pageview</button>
</main>
