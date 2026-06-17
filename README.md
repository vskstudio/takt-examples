# takt-examples

Minimal, self-contained example apps for [Takt](https://www.npmjs.com/package/@vskstudio/takt-core) — a privacy-friendly, self-hosted analytics SDK — one per framework, for both JavaScript and PHP. Each app consumes the real published `@vskstudio/takt-*` (npm) or `vskstudio/takt-*` (Packagist) package and builds in CI.

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
| [`php`](php) | [`vskstudio/takt-core-php`](https://packagist.org/packages/vskstudio/takt-core-php) | Plain PHP 8.1+, no framework |
| [`laravel`](laravel) | [`vskstudio/takt-laravel`](https://packagist.org/packages/vskstudio/takt-laravel) | Laravel 11/12 |
| [`symfony`](symfony) | [`vskstudio/takt-symfony`](https://packagist.org/packages/vskstudio/takt-symfony) | Symfony 6.4/7 bundle |

## Run one

JavaScript:

```bash
cd react        # or any JS folder above
npm install
npm run dev      # local dev
npm run build    # type-check + production build
```

PHP:

```bash
cd laravel      # or php / symfony
composer install
composer run build    # resolves the published package and renders the snippet
```

The PHP examples render the browser snippet server-side; see each folder's
`track.php`/controller for sending server-to-server events.

Each example sets `excludeLocalhost: false` so events fire during local development (Takt's privacy default is `true`). Point `endpoint` at your own Takt instance to collect them.

## First-party / anti-adblock

Each example also ships a commented-out `scriptOrigin` option (JS init/component), `script_origin` (Laravel/Symfony config) or the `data-script-origin` attribute (browser snippet). When set, the tracker and event collection are served from a domain you control (e.g. `https://stats.example.com`), so ad-blockers can no longer tell analytics traffic apart from your own site. Uncomment the line and point it at your custom first-party Takt domain to enable it.

See the Takt docs guide **`/docs/guides/domaine-personnalise`** for how to set up the first-party domain.

## License

MIT
