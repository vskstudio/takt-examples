# takt-examples

Minimal, self-contained example apps for [Takt](https://www.npmjs.com/package/@vskstudio/takt-core) — a privacy-friendly, self-hosted analytics SDK — one per framework. Each app consumes the real published `@vskstudio/takt-*` package, type-checks, and builds in CI.

Copy any folder, run it, and adapt.

## Examples

| Folder | Package | Stack |
|--------|---------|-------|
| [`vanilla`](vanilla) | [`@vskstudio/takt-core`](https://www.npmjs.com/package/@vskstudio/takt-core) | Vite + TypeScript, no framework |
| [`react`](react) | [`@vskstudio/takt-react`](https://www.npmjs.com/package/@vskstudio/takt-react) | Vite + React |
| [`vue`](vue) | [`@vskstudio/takt-vue`](https://www.npmjs.com/package/@vskstudio/takt-vue) | Vite + Vue 3 |
| [`svelte`](svelte) | [`@vskstudio/takt-svelte`](https://www.npmjs.com/package/@vskstudio/takt-svelte) | Vite + Svelte 5 |
| [`solid`](solid) | [`@vskstudio/takt-solid`](https://www.npmjs.com/package/@vskstudio/takt-solid) | Vite + SolidJS |
| [`angular`](angular) | [`@vskstudio/takt-angular`](https://www.npmjs.com/package/@vskstudio/takt-angular) | Angular 20 standalone |
| [`astro`](astro) | [`@vskstudio/takt-astro`](https://www.npmjs.com/package/@vskstudio/takt-astro) | Astro 5 integration |

## Run one

```bash
cd react        # or any folder above
npm install
npm run dev      # local dev
npm run build    # type-check + production build
```

Each example sets `excludeLocalhost: false` so events fire during local development (Takt's privacy default is `true`). Point `endpoint` at your own Takt instance to collect them.

## License

MIT
