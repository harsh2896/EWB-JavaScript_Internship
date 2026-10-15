// Capstone Mini Project: Interactive Product Inventory & Analytics Dashboard
// Run in the browser console (prompt() works) or with: node inventory-dashboard.js
// In Node.js, prompt() is unavailable, so default values ("Monitor", "150") are used.

const ask = (message, fallback) =>
  typeof prompt === "function" ? prompt(message, fallback) : fallback;

// ---------- 1. Data & Input Initialization ----------
console.log("--- Initializing Inventory System ---");

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
];

// ---------- 3. Loops & Flow Control (input handling) ----------
const MAX_ATTEMPTS = 3;
let newProduct = null;

for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
  const rawName = ask("Enter product name:", "Monitor");
  const rawPrice = ask("Enter product price:", "150");

  // missing input -> skip to next attempt
  if (rawName === null || rawName.trim() === "" || rawPrice === null) {
    console.log(`Attempt ${attempt}: missing input, please try again.`);
    continue;
  }

  const price = Number(rawPrice); // explicit type conversion

  // ---------- 2. Control Flow (validation) ----------
  if (Number.isNaN(price) || price <= 0) {
    console.log(`Attempt ${attempt}: invalid price "${rawPrice}", please try again.`);
    continue;
  }

  newProduct = { name: rawName.trim(), price };
  break; // valid input received
}

if (newProduct) {
  inventory.push(newProduct);
  console.log(`[Prompt executed: User adds "${newProduct.name}" at "$${newProduct.price}"]`);
} else {
  console.log("No valid product added. Continuing with existing inventory.");
}

// ---------- 2. Control Flow (category badges via switch) ----------
function getCategory(price) {
  switch (true) {
    case price >= 500: return "Premium";
    case price < 50:   return "Budget";
    default:           return "Standard";
  }
}

// ---------- 4. Functions & Scope ----------
function calculateTotal(items) {
  let total = 0; // local scope
  for (const item of items) total += item.price;
  return total;
}

const applyTax = (amount, taxRate = 0) => amount + (amount * taxRate) / 100;
const applyDiscount = (amount, discountRate = 0) => amount - (amount * discountRate) / 100;

// ---------- 5. Array Methods ----------
console.log("--- Processing Inventory Roster (forEach) ---");
inventory.forEach((item) => {
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`);
});

console.log("--- Financial Analytics ---");
const totalValue = calculateTotal(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

const affordableItems = inventory.filter((item) => item.price < 200).map((item) => item.name);
console.log(`Filtered Affordable Items (Under $200): [${affordableItems.map((n) => `"${n}"`).join(", ")}]`);

const report = inventory.map((item) => `${item.name.toUpperCase()}: $${item.price}`);
console.log(`Formatted Report List: [${report.map((r) => `"${r}"`).join(", ")}]`);

// Optional: tax/discount helpers (not part of the required output)
// console.log(`With 18% tax: $${applyTax(totalValue, 18)}`);
// console.log(`With 10% discount: $${applyDiscount(totalValue, 10)}`);
