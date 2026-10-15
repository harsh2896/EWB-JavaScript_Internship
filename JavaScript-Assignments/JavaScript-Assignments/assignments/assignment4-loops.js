// Assignment 4: Loop Control Structures

// 1. for loop -> multiplication table of 5
console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 2. while loop + break -> first number > 10 divisible by 6
console.log("-- First number > 10 divisible by 6 --");
let n = 11;
while (true) {
  if (n % 6 === 0) {
    console.log(`Found: ${n}`);
    break;
  }
  n++;
}

// 3. do...while loop + continue -> skip number 3
console.log("-- do...while with continue (skips 3) --");
let count = 0;
do {
  count++;
  if (count === 3) continue; // skip 3
  console.log(`Count: ${count}`);
} while (count < 5);
