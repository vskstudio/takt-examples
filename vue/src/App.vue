<script setup lang="ts">
import { ref } from 'vue'
import { useTakt } from '@vskstudio/takt-vue'

const takt = useTakt()
const clicks = ref(0)

function subscribe() {
  clicks.value++
  takt.track('Subscribe', {
    props: { plan: 'pro' },
    revenue: { amount: '29.00', currency: 'EUR' },
  })
}
</script>

<template>
  <main>
    <h1>Takt Vue example</h1>
    <p>An initial pageview was sent on mount by the Takt plugin.</p>

    <button @click="subscribe">Subscribe (track with props + revenue)</button>

    <!-- Declarative click tracking via the global directive -->
    <button v-takt-event="{ name: 'Purchase', revenue: { amount: '9.00', currency: 'EUR' } }">
      Buy (v-takt-event)
    </button>

    <p>Subscribe clicks tracked: {{ clicks }}</p>
  </main>
</template>
