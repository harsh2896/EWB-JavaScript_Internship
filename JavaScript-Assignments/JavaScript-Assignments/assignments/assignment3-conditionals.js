// Assignment 3: Conditional Logic Implementation

const score = 85;

// if...else -> validate the score
if (score < 0 || score > 100) {
  console.log("Invalid score. Enter a value between 0 and 100.");
} else {
  // switch -> letter grade
  let grade;
  switch (true) {
    case score >= 90: grade = "A"; break;
    case score >= 80: grade = "B"; break;
    case score >= 70: grade = "C"; break;
    case score >= 60: grade = "D"; break;
    default:          grade = "F";
  }

  // ternary -> pass / fail
  const status = score >= 40 ? "Passed" : "Failed";

  console.log(`Score: ${score}`);
  console.log(`Grade: ${grade}`);
  console.log(`Status: ${status}`);
}
