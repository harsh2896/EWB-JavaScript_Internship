// Assignment 5: Function Architecture and Scope

// Standard function with default parameters
function areaStandard(length = 5, width = 4) {
  return length * width;
}

// Arrow function with default parameters
const areaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${areaStandard()}`);
console.log(`Arrow Function Area (Custom 10x3): ${areaArrow(10, 3)}`);

// Scope demonstration
function functionScopeDemo() {
  var functionVar = "I exist inside this function only";
  return functionVar;
}
functionScopeDemo();

try {
  {
    let blockVar = "I exist inside this block only";
  }
  console.log(blockVar); // blockVar is block-scoped -> not accessible here
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: ${error.message} (when accessed outside block)`);
}
