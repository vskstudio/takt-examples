import { Takt, TaktEvent, useTakt, useTaktEvent } from '@vskstudio/takt-react'

// <Takt> mounts the analytics instance, fires the initial pageview, and
// (with spa) tracks SPA navigations automatically. excludeLocalhost is
// disabled here so events are emitted during local development.
export default function App() {
  return (
    <Takt domain="example.com" endpoint="/api/event" outbound files spa excludeLocalhost={false}>
      <main>
        <h1>Takt React Example</h1>
        <BuyButton />
        <SignupButton />
      </main>
    </Takt>
  )
}

// Imperative tracking via the hook: a click with props + revenue.
function BuyButton() {
  const takt = useTakt()
  return (
    <button
      onClick={() =>
        takt.track('Buy', {
          props: { plan: 'pro', source: 'hero' },
          revenue: { amount: '29.00', currency: 'EUR' },
        })
      }
    >
      Buy pro
    </button>
  )
}

// Declarative tracking: useTaktEvent returns onClick to spread, and
// <TaktEvent> wraps a child element.
function SignupButton() {
  const onSignup = useTaktEvent({ name: 'Signup', props: { plan: 'free' } })
  return (
    <>
      <button {...onSignup}>Sign up</button>
      <TaktEvent name="Contact" props={{ channel: 'footer' }}>
        <button>Contact</button>
      </TaktEvent>
    </>
  )
}
