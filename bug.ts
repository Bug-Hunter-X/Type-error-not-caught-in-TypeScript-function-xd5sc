function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // Correct usage
console.log(result1); // Output: 8

const result2 = subtract(10, 5); // Correct usage
console.log(result2); // Output: 5

const result3 = add(5, '3'); // Type error, should be caught by the compiler
console.log(result3); // This line won't be reached because of the type error

const result4 = subtract(10, '5'); // Type error, should be caught by the compiler
console.log(result4); // This line won't be reached because of the type error