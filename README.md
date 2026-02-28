# Capgemini Training — Web & Automation Learning Path

A structured 10-day training program covering HTML, CSS, JavaScript, TypeScript, and Playwright test automation.

---

## 📁 Repository Structure

```
capgemini/
├── general/          → HTML & CSS fundamentals (Days 1–2)
├── js/               → JavaScript basics & DOM (Days 3–4)
├── Ts/               → TypeScript basics & OOP (Days 5–6)
├── playwright/       → Playwright test automation (Days 7–10)
└── project/          → Mini projects built during training
```

---

## 📅 Day-wise Mapping

### Day 1 — HTML Fundamentals
**Folder:** `capgemini/general/`

| File | Description |
|------|-------------|
| `index.html` | Basic HTML boilerplate — entry point structure |
| `grid.html` | HTML structure for a CSS Grid layout practice page (17 grid cells) |
| `project.html` | Full HTML page — "PraRoz" web design course landing page with navbar, hero section, and login card |

---

### Day 2 — CSS Fundamentals
**Folder:** `capgemini/general/`

| File | Description |
|------|-------------|
| `grid.css` | CSS Grid layout — `grid-template-columns`, `grid-template-rows`, `grid-row/column-start/end` spanning across a 4×7 grid |
| `project.css` | Full CSS styling for the PraRoz landing page — flexbox navbar, hero layout, login card, responsive design |
| `bg.jpg` | Background image asset used by `project.css` |

---

### Day 3 — JavaScript Basics
**Folder:** `capgemini/js/`

| File | Description |
|------|-------------|
| `1.html` | HTML shell for JavaScript practice |
| `1.js` | Core JS concepts: `var` / `let` / `const` scoping, hoisting, arrays (homogeneous & heterogeneous), objects, named functions, anonymous functions, arrow functions, function expressions, first-class functions, IIFE |
| `index.js` | Compiled output of `index.ts` — covers TypeScript basics transpiled to JS (type inference, annotations, arrays, tuples, objects, functions, interfaces) |

> **Note:** `index.js` is a TypeScript-compiled file that lives in the `js/` folder. The source `.ts` file is in `Ts/`.

---

### Day 4 — DOM Manipulation
**Folder:** `capgemini/js/`

| File | Description |
|------|-------------|
| `dom.html` | HTML structure with headings, buttons, and paragraphs for DOM practice |
| `dom.js` | DOM traversal (`childNodes`, `children`, `parentElement`, `firstElementChild`, `nextElementSibling`), direct access methods (`getElementById`, `getElementsByClassName`, `getElementsByName`, `querySelector`, `querySelectorAll`), `createElement`, `setAttribute`, `removeAttribute`, `append`, inline event handling, `onclick`, `addEventListener` — including a live color-toggle feature |
| `counter.html` | UI for a counter app with +, −, Reset, and Light/Dark toggle buttons |
| `counter.js` | Counter logic using `addEventListener` — increment, decrement with lower-bound alert, reset, and dynamic light/dark theme switcher |
| `tableUsingDOM.html` | HTML container for a dynamically built 9×8 grid |
| `tableUsingDOM.js` | Creates a 9-row × 8-column grid entirely via DOM using nested `for` loops, `createElement`, `setAttribute`, and `appendChild` |

---

### Day 5 — TypeScript Basics
**Folder:** `capgemini/Ts/`

| File | Description |
|------|-------------|
| `index.ts` | TypeScript fundamentals: type inference, type annotation, primitive types (`string`, `number`, `boolean`, `null`, `undefined`, `any`), arrays, tuples, optional object properties (`?`), functions with typed parameters and return types, arrow functions, union types (`\|`), interfaces with `readonly` and optional members, interface inheritance with `extends` |
| `index.js` | Compiled JS output of `index.ts` |

---

### Day 6 — Access Modifiers, Methods & Properties, Inheritance, Modules, and Asynchronous Code
**Folder:** `capgemini/Ts/`

| File | Description |
|------|-------------|
| `oops.ts` | OOP in TypeScript: class definition with typed properties, methods (`start()`), arrow function property (`display`), constructor, object instantiation. **Asynchronous programming:** `setTimeout` (timer function), Promises (`new Promise`, `.then()`, `.catch()`), Promise chaining, `resolve`/`reject` patterns |
| `oops.js` | Compiled JS output of `oops.ts` |
| `oops.html` | HTML shell to run `oops.js` in the browser |

> **Note:** Modules, `import`/`export`, and `async`/`await` topics are referenced in comments within `oops.ts` — these are planned/partially covered within this file.

---

### Day 7 — Playwright Introduction, Installation & Fixtures
**Folder:** `capgemini/playwright/`

| File | Description |
|------|-------------|
| `package.json` | Project config — `@playwright/test ^1.58.2`, `@types/node` as dev dependencies |
| `package-lock.json` | Locked dependency tree for Playwright v1.58.2 |
| `playwright.config.js` | Playwright config — `testDir: ./tests`, `fullyParallel`, `reporter: html`, multi-browser projects (Chromium, Firefox, WebKit) |
| `tests/test1.spec.ts` | First Playwright tests — basic `test()` blocks with console output, verifying test runner setup |
| `tests/test2.spec.ts` | **Fixtures deep-dive:** `page`, `context`, `browser`, `browserName` fixtures demonstrated with commented examples for each; hierarchy `browser → context → page`; multi-tab navigation; `page.pause()` for debugging; Amazon search interaction |

---

### Day 8 — Test Annotations, Test Execution Commands & Browser Controls
**Folder:** `capgemini/playwright/`

| File | Description |
|------|-------------|
| `tests/annotation.spec.ts` | All Playwright annotation types demonstrated: `test.skip`, `test.only`, `test.fixme`, `test.fail`, `test.slow`, `testInfo.setTimeout()`, `test.describe` for grouping |
| `tests/browserControls.spec.ts` | Browser control methods: `page.viewportSize()`, `page.setViewportSize()`, `page.goto()`, `page.title()`, `page.url()`, `context.cookies()`, **screenshot capture** (`page.screenshot({ path })`) — screenshots saved as `chromium_*.png`, `firefox_*.png`, `webkit_*.png` |
| `chromium_*.png` | Screenshot taken during Chromium browser test run (Amazon India) |
| `firefox_*.png` | Screenshot taken during Firefox browser test run (Amazon India) |
| `webkit_*.png` | Screenshot taken during WebKit browser test run (Amazon India) |

---

### Day 9 — Locating Web Elements (Locator Method & CSS Selectors)
**Folder:** `capgemini/playwright/`

| File | Description |
|------|-------------|
| `tests/cssSelector.spec.ts` | CSS selector locators using `page.locator()`: ID selectors (`input#username`, `button#submit`), class selectors (`.wp-block-button__link`), attribute selectors (`button[type=submit]`). Practiced on `practicetestautomation.com` and `techbeamers.com` login pages |

---

### Day 10 — XPath (Basic)
**Folder:** `capgemini/playwright/`

| File | Description |
|------|-------------|
| `tests/cssSelector.spec.ts` | **Also covers XPath** — absolute XPath (`xpath=/html/body/.../input[@id="username"]`) and relative XPath (`//input[@id="password"]`) demonstrated in `practiceTestLogin3` test on `techbeamers.com` |

> **Note:** Day 9 and Day 10 content coexist in the same file `cssSelector.spec.ts` — the first two tests (`test.skip`) use CSS selectors, and the third test uses XPath (both absolute and relative).

---

## 🛠️ Mini Projects
**Folder:** `capgemini/project/`

### Calculator
| File | Description |
|------|-------------|
| `calculator.html` | Calculator UI with a display screen and a 4×5 button grid |
| `calculator.css` | Minimal monospace-styled calculator layout using CSS Grid |
| `calculator.ts` | TypeScript source — number input, decimal, operators (`+`, `-`, `*`, `/`), equals, clear, sign toggle, percentage |
| `calculator.js` | Compiled JS of `calculator.ts` — wired to DOM via `addEventListener` on all buttons |

### Todo App
| File | Description |
|------|-------------|
| `todo.html` | Todo app UI — editable title, add input, search bar |
| `todo.css` | Dark-themed styling with hover transitions for task items |
| `todo.ts` | TypeScript source — create task with radio (complete toggle), edit, delete; search filtering; `keypress` Enter support; editable title via `prompt()` |
| `todo.js` | Compiled JS of `todo.ts` |

### E-Commerce App (E-World)
| File | Description |
|------|-------------|
| `e-commerce.html` | Home page with navigation to Mobiles, Laptops, Tablets, Cart |
| `mobile.html` | Product listing page — iPhone 15, Samsung Galaxy S24/S25/S26/S24 FE |
| `laptop.html` | Product listing page — MacBook Pro, Dell XPS 13/14/15, MacBook Air |
| `tablet.html` | Product listing page — iPad Pro, Samsung Galaxy Tab S5/S7/S9/A4, Lenovo Tab t1 |
| `cart.html` | Cart page — renders items from `localStorage`, supports checkout and clear cart |
| `e-commerce.css` | Shared stylesheet for all pages — navbar, product cards, cart list, buttons |
| `e-commerce.ts` | TypeScript source — `addToCart()` with `localStorage` persistence, `navigateTo()`, cart render logic with item count, checkout and clear cart handlers |
| `e-commerce.js` | Compiled JS of `e-commerce.ts` — shared across all HTML pages via `<script>` tag |

---

## ⚠️ What's Missing / Gaps Found

| Day | Topic | Status |
|-----|-------|--------|
| Day 6 | `import`/`export` modules example | ❌ No dedicated module file found — only referenced in comments in `oops.ts` |
| Day 6 | `async`/`await` | ❌ Referenced in comments in `oops.ts` but no `async`/`await` code is implemented |
| Day 6 | Basic inheritance (class `extends`) | ❌ Not implemented — only single-class example exists in `oops.ts` |
| Day 6 | Access modifiers (`public`, `private`, `protected`) | ❌ Not present in any `.ts` file |
| Day 10 | XPath advanced patterns | ⚠️ Only basic absolute and relative XPath — covered within Day 9 file |
| General | `tsconfig.json` | ⚠️ Not found in repo — TypeScript compiler config should be present in `Ts/` folder |

---

## 🚀 Getting Started

### Running Playwright Tests
```bash
cd capgemini/playwright
npm install
npx playwright install
npx playwright test                          # run all tests
npx playwright test tests/test1.spec.ts      # run specific file
npx playwright test --headed                 # run with browser visible
npx playwright test --project=chromium       # run on specific browser
npx playwright show-report                   # open HTML report
```

### Running TypeScript Files
```bash
cd capgemini/Ts
tsc index.ts          # compile to JS
node index.js         # run compiled output
```

### Viewing HTML Projects
Open any `.html` file directly in a browser. For projects in `capgemini/project/`, start with `e-commerce.html` as the entry point for the e-commerce app.

---

## 🔧 Tech Stack

| Technology | Version / Notes |
|------------|----------------|
| HTML5 | Semantic structure |
| CSS3 | Flexbox, Grid, animations |
| JavaScript (ES6+) | DOM, async, events |
| TypeScript | v5.x — OOP, interfaces, types |
| Playwright | v1.58.2 |
| Node.js | ≥ 18 required for Playwright |
