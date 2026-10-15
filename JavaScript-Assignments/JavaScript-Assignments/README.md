# JavaScript Assignments & Capstone Mini Project

Practical exercises covering the core JavaScript modules, plus a capstone console app that combines them.

## Structure

```
JavaScript-Assignments/
├── assignments/
│   ├── assignment1-variables-datatypes.js
│   ├── assignment2-operators-input.js
│   ├── assignment3-conditionals.js
│   ├── assignment4-loops.js
│   ├── assignment5-functions-scope.js
│   └── assignment6-arrays-objects.js
└── mini-project/
    └── inventory-dashboard.js
```

## Assignments

| # | Topic | Concepts |
|---|-------|----------|
| 1 | Variables, Data Types, Console | `var`, `let`, `const`, `typeof` |
| 2 | Operators & Input Handling | `prompt()`, `Number()`, arithmetic & assignment operators |
| 3 | Conditional Logic | `if...else`, `switch`, ternary |
| 4 | Loop Control | `for`, `while` + `break`, `do...while` + `continue` |
| 5 | Functions & Scope | standard & arrow functions, default params, block/function scope |
| 6 | Arrays & Objects | `forEach()`, `filter()`, `map()` |

## Capstone: Interactive Product Inventory & Analytics Dashboard

Console app that adds a user-entered product to an inventory, validates input, assigns a category badge (Budget / Standard / Premium), calculates totals, and prints a formatted report.

## How to Run

**Node.js**
```bash
node assignments/assignment1-variables-datatypes.js
node mini-project/inventory-dashboard.js
```
`prompt()` does not exist in Node.js, so the scripts that ask for input use default values there
(bill `100`, tip `15`, product `Monitor` at `150`).

**Browser (with real prompts)**
Open DevTools (F12) → Console, paste the file contents, and press Enter. `prompt()` will ask for input.

## Sample Output (Mini Project)

```
--- Initializing Inventory System ---
[Prompt executed: User adds "Monitor" at "$150"]
--- Processing Inventory Roster (forEach) ---
* Item: Laptop ($800) -> Category: Premium
* Item: Mouse ($25) -> Category: Budget
* Item: Monitor ($150) -> Category: Standard
--- Financial Analytics ---
Total Inventory Value: $975
Filtered Affordable Items (Under $200): ["Mouse", "Monitor"]
Formatted Report List: ["LAPTOP: $800", "MOUSE: $25", "MONITOR: $150"]
```

## Author

Harsh Prajapati
