// Assignment 6: Arrays, Objects, and Core Methods

const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 },
];

// forEach -> print every product
console.log("-- All Products (forEach) --");
products.forEach((p) => console.log(`Item: ${p.name} - Price: $${p.price}`));

// filter -> products under $50
console.log("-- Filtered Products (Price < $50) --");
const affordable = products.filter((p) => p.price < 50);
console.log(affordable);

// map -> formatted strings
console.log("-- Mapped Product Tags (map) --");
const tags = products.map((p) => `${p.name.toUpperCase()} costs $${p.price}`);
console.log(`[ ${tags.map((t) => JSON.stringify(t)).join(", ")} ]`);
