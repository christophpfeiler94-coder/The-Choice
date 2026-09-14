# Reference measurements

Source: supplied Photo 1.jpg, 1280 × 853 pixels. Coordinates are measured against the raster with origin at top left; soft borders introduce roughly ±2 px edge uncertainty. The image is a presentation of five screens, not an iPhone screenshot at native resolution.

| Screen | Left | Top | Right | Bottom | Width | Height |
|---|---:|---:|---:|---:|---:|---:|
| Today | 10 | 92 | 258 | 821 | 248 | 729 |
| Challenges | 266 | 92 | 508 | 821 | 242 | 729 |
| Rewards | 516 | 92 | 765 | 821 | 249 | 729 |
| Statistics | 773 | 92 | 1018 | 821 | 245 | 729 |
| Explore | 1026 | 92 | 1273 | 821 | 247 | 729 |

## Interior rectangles (source pixels)

| Element | x | y | Width | Height |
|---|---:|---:|---:|---:|
| Today week strip | 22 | 232 | 223 | 43 |
| Today period selector | 22 | 290 | 223 | 44 |
| Today habit 1 | 22 | 346 | 223 | 53 |
| Today habit 2 | 22 | 404 | 223 | 53 |
| Today habit 3 | 22 | 462 | 223 | 54 |
| Today habit 4 | 22 | 522 | 223 | 53 |
| Today habit 5 | 22 | 581 | 223 | 53 |
| Today habit 6 | 22 | 640 | 223 | 54 |
| Today add button | 111 | 719 | 47 | 47 |
| Challenge 1 | 278 | 196 | 220 | 188 |
| Challenge 2 | 278 | 394 | 220 | 183 |
| Challenge 3 | 278 | 585 | 220 | 154 |
| Reward 1 | 528 | 237 | 225 | 134 |
| Reward 2 | 528 | 379 | 225 | 133 |
| Reward 3 | 528 | 520 | 225 | 135 |
| Reward quote | 528 | 667 | 225 | 66 |
| Statistics productivity | 787 | 215 | 220 | 248 |
| Statistics trend chart | 787 | 471 | 106 | 151 |
| Statistics donut chart | 903 | 471 | 104 | 151 |
| Statistics CTA | 787 | 629 | 219 | 37 |
| Statistics streaks | 787 | 678 | 219 | 62 |
| Explore search | 1041 | 214 | 219 | 34 |
| Explore article 1 | 1040 | 318 | 221 | 118 |
| Explore article 2 | 1040 | 443 | 221 | 163 |
| Bottom navigation, Today | 10 | 747 | 248 | 74 |

Source panel gutters are 12–14 px, habit gaps 5–7 px, challenge gaps 10–11 px, reward gaps 8–9 px. Corner radii visually measure approximately 10–13 px for cards and 20 px for device frames. Photo compression and light glows prevent exact vector measurements.

## iPhone adaptation

A direct width scale from 248 px to 390 px is 1.573, making the source panel 1146 px high. Therefore the app uses a scrolling content region and fixed navigation rather than distorting everything into 844 px. Content gutters are 19 px; habit heights are 77 px (slightly more compact than the direct 83 px scale); navigation excludes the reference's simulated status bar and home indicator because iOS supplies those. Top and bottom safe areas use env(). Text uses the native Apple system family; the original typeface cannot be established from this raster alone. The app caps at 430 px on desktop.

Sampled background colors: (60,710) = #0d1723; (300,190) = #0e1a2a; (795,485) = #1b2838; (545,180) = #0a101c. Token palette: #0c1620 background, #1b2838 panels, #a7b2c3 secondary text, #249aff blue, #ffd16b challenge CTA, #38de98 completion.

Photographs are replacement Unsplash assets stored locally. They are not extracted originals. System time, date, greeting and statistics are live; challenge counts, countdown labels, and initial rewards are demo content. New habit records, selected-day check-ins, joins, bookmarks, custom rewards and name edits persist locally. No server accounts, live competition, push delivery, or cloud sync is implemented.
