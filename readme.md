# SEED Design — Karrot (당근) Design System

SEED is the design system of **Karrot / 당근** (Danggeun Market), the Korean hyperlocal marketplace and neighbourhood community app. SEED exists so makers can ship product quickly with a shared vocabulary: a two-layer token system, a documented component inventory with exact visual specs, and an icon library.

This project is a **recreation** of SEED assembled from the public source repositories below, so that design agents can produce Karrot-branded interfaces, mocks and prototypes that match the real product.

## Sources used

| Source | What was taken |
| --- | --- |
| https://github.com/daangn/seed-design | Everything: token values (`packages/stylesheet/global.css`), the component inventory and every published visual spec (`docs/content/component/*/style.mdx`, `usage.mdx`), the docs-site styling (`docs/src/**`), the SEED wordmark asset, `cover.png` |
| https://github.com/daangn/seed-icon | Icon library. 46 SVG glyphs copied into `assets/svg/` out of 603 published |
| https://github.com/daangn/kdt | Referenced by SEED as the token language (KDT). Not read — semantics were taken from SEED's own docs |
| Uploaded font files | Pretendard woff2, 9 weights, in `assets/fonts/` |

Read those repositories directly when you need something this project does not carry — particularly `docs/content/component/<name>/usage.mdx`, which holds Karrot's do/don't guidance in full, and `daangn/seed-icon/assets/svg` for the other ~557 icons.

Karrot's own product surfaces (the app, karrotmarket.com) are **not** open source, so no screen-level source of truth was available. The UI kit in this project composes only SEED components using the patterns SEED's own documentation describes; it is not a pixel recreation of a shipped Karrot screen. Treat it as a component-composition reference, not as ground truth for the app.

## Products represented

- **Karrot app (모바일)** — the primary consumer of SEED. Everything in the system is specified in `pt` at mobile scale, with iOS/Android letter-spacing variants and a documented dark scheme.
- **SEED Design docs site** — a Gatsby documentation site (`docs/`) that consumes the same tokens. Its own layout conventions (1400–1600px max width, 50/80px fixed header, 900px content column) are recorded in `ui_kits/seed-docs/`.

---

## CONTENT FUNDAMENTALS

Karrot writes in **Korean, in a warm but plain register**. The product's whole promise is neighbourliness, so copy sounds like a considerate neighbour, not a platform.

**Voice and person.** Sentences address the user as 유저/이웃 and end in the soft polite 해요체 — `거래해주세요`, `확인해보세요`, `삭제하면 되돌릴 수 없어요`. Never the stiff 합니다체 in UI, never blunt imperatives. First person plural (`우리 동네`) appears in marketing and empty states; the product rarely says "I".

**Buttons and labels are nouns or short verb stems, not sentences.** SEED's Box Button guidance is explicit: `Label을 명확하고 간결하게 작성합니다` and *don't* use 구어체나 서술형 (conversational or descriptive forms) in a button. So: `확인`, `삭제`, `동네 변경`, `선택 완료` — not `삭제할까요?` or `여기를 눌러주세요`.

**Questions belong in dialogs, statements in feedback.** Alert Dialog titles ask (`글을 삭제할까요?`) and the description explains the consequence (`삭제하면 되돌릴 수 없어요.`). Snackbars state what happened, past tense, one line (`글을 삭제했어요.`).

**Brevity is a rule, not a preference.** Button labels must not exceed one line. Snackbar messages must not exceed two lines — `불필요한 문장과 내용은 제거하며, 핵심 메세지만 전달합니다`. Chip Filter labels cannot wrap. When a message needs more room, it becomes a Callout or a Bottom Sheet, not a longer Snackbar.

**Emphasis is partial.** Bold inside a Snackbar or Callout is allowed for the one phrase that matters, never for the whole string.

**No emoji.** SEED's Box Button don't-list names emoji explicitly: `불필요한 이모지, 아이콘을 사용하지 않습니다`. Iconography carries tone instead. Unicode symbols are used only as separators (`·`) between metadata.

**English appears as product and system nouns** — SEED, Component, Primitive, Usage — mostly in developer-facing surfaces. Consumer UI stays Korean.

**Examples worth copying:**
- Callout: `직접 만나서 거래해주세요.`
- Warning callout: `송금 요청은 사기일 수 있어요.`
- Field description: `실명을 입력해주세요`
- Metadata line: `3분 전 · 강남구 역삼동 · 관심 12`
- Docs-site hero: `SEED는 메이커들이 효율적으로 제품을 만들 수 있도록 필요한 도구와 컴포넌트를 제공합니다.`

---

## VISUAL FOUNDATIONS

**Color architecture.** Three layers, and the layer you reach for matters:
1. `--seed-static-color-*` — theme-invariant. A label on a primary fill is always `static-white`, in light *and* dark.
2. `--seed-scale-color-*` — the ramps (gray 00–900; carrot, blue, red, green, yellow, pink, purple 50–950; alpha variants at 50/100/200/500). Re-mapped per color scheme.
3. `--seed-semantic-color-*` — intent (`primary`, `danger-low`, `paper-dialog`, `divider-2`). **Component specs cite semantic tokens wherever an intent exists and drop to scale tokens for one-off decisions** — mirror that habit.

**Primary is carrot.** `carrot-500` `#ff6f0f`. Used sparingly: one strong action per screen, plus selection states via `primary-low` (a 14% carrot alpha, not a solid tint). Hover and pressed both resolve to `carrot-400` in light mode — SEED does not distinguish them.

**Gray does the work.** Most of the interface is gray-00 paper, gray-100/200 fills, gray-300/400 outlines, gray-600 secondary text, gray-900 ink. Neutral-selected states (chip toggles, extended FAB) use gray-800/900 rather than carrot.

**Type.** Pretendard, at only two weights in product UI: normal (400) and bold (700). Sizes come from an 18-step rem scale (0.625rem → 4.5rem) and are consumed through named semantic styles — h1–h4, title1–3, subtitle1–2, body-l1/l2, body-m1/m2, label1–6, caption1–2, each in bold and regular. Line heights are percentages: 135% (small) for almost everything, 150% (medium) only for `body-l*` and `caption1` — the long-reading families. Letter-spacing is **platform-scaled**: iOS keeps 0em; Android tightens to −0.02em / −0.03em / −0.04em depending on the style. Set `data-seed-scale-letter-spacing="ios|android"` on `<html>`.

**Spacing.** SEED publishes **no spacing token scale** — spacing lives in each component's layout spec, and the values are deliberately unrounded: 14pt callout padding, 22pt xlarge button padding, 0.5pt dividers, −10pt avatar overlap, 3pt snackbar action padding. Copy the number from the spec; do not snap to a 4/8 grid. The one global rule that recurs: **16pt side margins** on mobile, and Snackbars keep 8pt on every edge at every resolution.

**Backgrounds.** Flat color, always. Seven `paper-*` tokens name the surface rather than a depth number: `default`, `contents`, `background`, `sheet`, `dialog`, `floating`, `accent`. **No gradients anywhere in the system** — the only alpha washes are the two overlay tokens for scrims. No repeating patterns, no textures, no noise. Photography is user-generated (listing photos, profile images) and never treated with a filter, so imagery reads as neutral-to-warm daylight snapshots, not styled art direction.

**Corner radii are per-component, not tokenised.** 4pt (xsmall/small buttons), 6pt (buttons, fields, help bubble), 10pt (callouts, inline alerts), 14pt (FAB menu cards), 16pt (alert dialog), 20pt (sheet tops), full (chips, capsules, FABs, switch, slider). Checkbox uses a 4px square or a 100% circle.

**Cards, in SEED terms, are outlined — not shadowed.** Content blocks use a 1px `divider-2`/`gray-300` outline or a `gray-100` fill. Shadow is reserved for things that genuinely float: FAB `0 2px 6px rgba(0,0,0,.16)` (small: `0 1px 3px rgba(0,0,0,.28)`), FAB menu cards `0 2px 6px rgba(0,0,0,.10)`, slider handle `0 4px 6px rgba(0,0,0,.15)` becoming a `0 0 0 5px rgba(0,0,0,.22)` ring while dragging. There are no inner shadows and no elevation scale.

**Hover vs press.** Hover is a web affordance and mostly equals press: both step the fill one notch (`gray-100 → gray-300`, `primary → primary-hover/pressed`, alpha-100 → alpha-200). The distinctly mobile signal is **scale**: buttons and toggles compress to `scale(0.95)` over 100ms and back. No ripples, no glows, no color inversion.

**Focus is a 2pt `blue-600` outline** on the root of every interactive component. This is the only place blue-600 appears.

**Disabled** is uniform: `gray-300` fill with a `gray-500` label for filled controls; `gray-400` text for text-only controls; Switch instead drops the whole control to 38% opacity.

**Motion is short and unshowy.** Press 100ms; color changes 50ms (often with a 20–50ms delay so color trails the transform); switch handle 150ms; menu FAB transform 200ms with a 45° icon rotation; snackbar enters `scale(0.7) → 1` in 300ms on a spring curve and exits by fading in 100ms; spinner rotates every 1200ms. Radio dots and checkmarks scale/draw in over 100ms. Nothing bounces past its target except the snackbar's spring entrance. **Caveat: SEED cites `$scale.timing-function.*` tokens whose values are not published anywhere in the repo** — `tokens/motion.css` ships approximations and says so.

**Transparency and blur.** Alpha is used for tints (`*-alpha-50/100/200` for pressed states and alert backgrounds), scrims (`overlay-dim` = black 50%, `overlay-low` = black 20%) and hairline dividers (`divider-1` = gray-alpha-50). **Backdrop blur is not part of the system** — dimming is a flat alpha layer.

**Layout rules.** Fixed elements: bottom-anchored primary Box Button, bottom sheets and action sheets (top radius 20, action sheet 14pt vertical padding, bottom sheet max height 375pt), FABs 16pt from the screen edge, snackbar region full-width with 8pt inset. Alert dialogs cap at 272pt wide. Tabs sit on a 1px gray-300 track with a 2px gray-900 indicator; `hug` insets the list 16pt, `fill` divides the width. Text fields have a 280pt minimum width.

**Light/dark.** One set of names, two scale maps. Dark inverts the gray ramp (gray-00 becomes `#17171a`, gray-900 becomes `#eaebee`) and *re-authors* the carrot ramp rather than flipping it — carrot-500 shifts to `#ff6e1d` and the high steps become pale tints. Semantic tokens re-point too: `danger` goes from red-600 to red-400, `warning` from yellow-400 to yellow-700, `paper-background` from gray-100 to gray-00.

---

## ICONOGRAPHY

**One icon set, `@seed-design/icon` / `daangn/seed-icon`** — 603 SVGs, plus PNG and Android XML exports of the same glyphs. Naming is strict: `icon_<name>_<weight>.svg` where weight is **`fill`, `regular` or `thin`**. Upstream, icons are generated into a project by a CLI (`seed-icon generate`) from an `icon.config.yml`; there is no icon *component* in the repo, and no icon font or sprite sheet.

- **Style.** Geometric, rounded terminals, single-color, drawn on a square box. `regular` is the default UI weight; `fill` marks selected/active states (bottom-nav selection, liked hearts, status glyphs in alerts and snackbars); `thin` is for large decorative use.
- **Monochrome, always.** Component specs assign icons the same color token as their sibling label ("Label, Icon → Color"), which is why this project renders glyphs as CSS masks tinted by `currentColor`. Never hand-color parts of an icon.
- **Sizes come from the component spec**, not from the icon: 12/14/16/18/20/22/24pt. Prefix icons are typically 16, chevron suffixes 14–18, FAB icons 20–24, snackbar status icons 20, close buttons 18 (24 in a bottom sheet).
- **Suffix icons are chevrons only.** SEED's Box Button and Chip guidance both say a suffix may only be a chevron; anything else goes in the prefix, and using both at once is discouraged.
- **Emoji are never used as icons.** Unicode is used only for the `·` separator.
- **Karrot-specific glyphs exist** and are worth knowing: `icon_market_*`, `icon_market_write_*`, `icon_check_flower_*` (the carrot-flower verification mark), `icon_money_won_*`, `icon_car_*` (a whole sub-family for the used-car vertical: ldws, blind spot, heated seat, smart key…).

Copied into `assets/svg/` (46 glyphs): home, search, chatting, chatting_send, profile, notification, heart, location, map, camera, photo, write, market, market_write, coupon, clock, setting, sort, list, bookmark, trash, add, thumb_up, money_won, payment, check, check_flower, close, chevron_left, chevron_right, expand, more_vert, more_horiz, menu, info, warning, arrow_drop_down (mix of regular and fill). Everything else: copy from `daangn/seed-icon/assets/svg` on demand.

**No Karrot corporate logo was provided and none was drawn.** The only mark in `assets/` is the **SEED** wordmark from the design-system docs site (`assets/seed-logo-black.svg`, `assets/seed-logo-white.svg`) plus the SEED docs cover image (`assets/seed-cover.png`). Where a Karrot brand mark would go, set the brand name in type. If you need the real logo, supply the file.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The one entry point consumers link. `@import`s only. |
| `tokens/fonts.css` | Pretendard `@font-face` (9 weights) + `--seed-font-family` |
| `tokens/colors.css` | Static, scale and semantic color tokens; dark scheme under `[data-seed-scale-color="dark"]` |
| `tokens/typography.css` | Font-size scale, weights, line heights, platform letter-spacing, 38 semantic type styles + `.seed-semantic-typography-*` utility classes |
| `tokens/motion.css` | Durations from the specs; easing curves approximated (flagged) |
| `tokens/base.css` | Root reset from the SEED docs site |
| `assets/fonts/` | Pretendard woff2 |
| `assets/svg/` | 46 SEED icons |
| `assets/seed-logo-black.svg`, `-white.svg`, `seed-cover.png` | SEED mark and cover |
| `guidelines/*.card.html` | 23 foundation specimen cards (Colors, Type, Brand) |
| `components/<group>/` | 35 components in 6 groups, each with `.jsx`, `.d.ts`, `.prompt.md`, plus one `@dsCard` HTML per group |
| `ui_kits/karrot-app/` | Mobile app kit — click-through screens composed from SEED components |
| `ui_kits/seed-docs/` | SEED documentation site kit |
| `SKILL.md` | Agent Skills entry point |
| `github.md` | Upstream repo association for one-click sync |

### Components

**core** — `Icon`

**buttons** — `BoxButton`, `BoxToggleButton`, `TextButton`, `ChipButton`, `ChipToggleButton`, `ChipFilter`, `CapsuleToggleButton`, `FloatingActionButton`, `ExtendedFloatingActionButton`, `MenuFloatingActionButton`

**forms** — `TextField`, `MultilineTextField`, `Checkbox`, `RadioGroup`, `ChipRadioGroup`, `Switch`, `Slider`, `RangeSlider`, `SelectBox`

**feedback** — `Callout`, `ActionableCallout`, `DismissableCallout`, `InlineAlert`, `ActionableInlineAlert`, `DismissableInlineAlert`, `Snackbar`, `Spinner`, `HelpBubble`

**overlay** — `AlertDialog`, `ActionSheet`, `BottomSheet`

**display** — `Avatar`, `AvatarGroup`, `Tabs`

That is SEED's full published component inventory (34 families in `docs/content/component/`), plus one intentional addition.

**Intentional additions**
- `Icon` — SEED ships icons as a codegen CLI, not a component. A thin wrapper was needed so every other component could reference glyphs by name.

## Known gaps and caveats

1. **Easing curves are approximations.** `$scale.timing-function.standard-easing / standard-entrance / standard-exit / spring-entrance` are referenced by the specs but defined nowhere public. Durations are exact; curves are not.
2. **Five components have no published style spec** — `InlineAlert`, `ActionableInlineAlert`, `DismissableInlineAlert`, `ChipFilter`, `SelectBox` (their `style.mdx` files are empty stubs). They are built from their usage docs and the nearest documented sibling, and each `.prompt.md` says so.
3. **Text Button's bold typography table is transposed upstream** (small → label1-bold, large → label3-bold). This build uses the descending order.
4. **Snackbar corner radius is unspecified** upstream; 10pt is used here.
5. **No Karrot logo, no product screenshots, no marketing imagery.** Karrot's product code is closed, so UI-kit screens are compositions, not recreations.
6. **No spacing/radius token scale exists** in SEED. Do not invent one.
