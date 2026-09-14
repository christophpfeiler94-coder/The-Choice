# The Choice

A local mobile PWA based on the supplied five-screen reference. No build step or runtime dependencies; requires Node.js 20+.

```sh
npm run dev
```

Open http://localhost:5173. The server listens on all interfaces so an iPhone on the same Wi-Fi can preview it at `http://YOUR-MAC-IP:5173`. Offline service workers require localhost or HTTPS: an ordinary LAN HTTP preview is not enough for full PWA offline testing on an iPhone. For installation on a physical device, serve this app over a trusted HTTPS connection and use Safari → Share → Add to Home Screen.

Features: five-tab navigation; create and complete habits by day; time-of-day filtering; local challenge participation and reminder flags; custom reward targets; statistics computed from saved habits; article reader, search, topic filtering and bookmarks; editable greeting; offline cached shell and photos. All user data stays in localStorage on that browser. Initial challenge and reward figures are demo content, and reminder flags do not send push notifications. Custom reward targets currently display saved goals without automatic streak redemption. The article copy is sample content.

The app adapts to 320–430 px mobile widths and iPhone safe areas, with fixed bottom navigation. Desktop displays a centered mobile app. Measured source coordinates and adaptation decisions are in [docs/measurements.md](docs/measurements.md).

Validation: `npm run check` checks JavaScript syntax. `scripts/verify.cjs` is the local Playwright smoke test, using the Codex bundled Playwright path and installed Google Chrome; adjust the require path if running elsewhere. It verifies persistence, creation, joins, statistics, search, bookmarks, modal articles, responsive overflow and offline reload. Captures are in docs/*-iphone.png. Physical iPhone Safari installation has not been tested.
