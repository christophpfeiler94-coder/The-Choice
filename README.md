# The Choice

A local mobile PWA based on the supplied five-screen reference. No build step or runtime dependencies; requires Node.js 20+.

```sh
npm run dev
```

Open http://localhost:5173. The server listens on all interfaces so an iPhone on the same Wi-Fi can preview it at `http://YOUR-MAC-IP:5173`. Offline service workers require localhost or HTTPS: an ordinary LAN HTTP preview is not enough for full PWA offline testing on an iPhone. For installation on a physical device, serve this app over a trusted HTTPS connection and use Safari → Share → Add to Home Screen.

Features: five-tab navigation; create and complete habits by day; time-of-day filtering; local challenge participation and reminder flags; custom reward targets; statistics computed from saved habits; article reader, search, topic filtering and bookmarks; editable greeting; offline cached shell and photos. All user data stays in localStorage on that browser. Challenge figures are demo content, and reminder flags do not send push notifications. Rewards have editable covers, linked habits, targets and notes. Saved completed days automatically unlock rewards; claiming records them in History. Initial reward suggestions use actual check-ins, not demo progress. The article copy is sample content.

The app adapts to 320–430 px mobile widths and iPhone safe areas, with fixed bottom navigation. Desktop displays a centered mobile app. Measured source coordinates and adaptation decisions are in [docs/measurements.md](docs/measurements.md).

Validation: `npm run check` checks JavaScript syntax. `scripts/verify.cjs` is the local Playwright smoke test, using the Codex bundled Playwright path and installed Google Chrome; adjust the require path if running elsewhere. It verifies persistence, creation, joins, statistics, search, bookmarks, modal articles, responsive overflow and offline reload. Captures are in docs/*-iphone.png. Physical iPhone Safari installation has not been tested.

## Habit gestures and editing

Swipe a habit right by at least 70 px to mark it done, or left to mark it undone for the selected date. Short swipes snap back; vertical gestures scroll. You can also tap the card to toggle completion. Tap the card’s ellipsis to edit its name, icon, color, period, duration, and optional scheduled time. Save applies changes locally; Cancel discards them. Scheduled time is a card label, not a push notification.

`node scripts/verify-habits.cjs` checks gestures, editing, persistence, cancellation, and popup sizing. These interactions were also exercised in an iPhone 15 Pro simulator running iOS 26.5 Safari.

Phone layouts use the entire viewport without the desktop height cap. Navigation counts the bottom safe area once. Standalone iOS uses the large viewport height to avoid a status-bar-sized gap; this was checked after installing the local app on the simulator Home Screen.
