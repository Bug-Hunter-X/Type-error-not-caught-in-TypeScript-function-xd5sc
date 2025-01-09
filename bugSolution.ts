function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both parameters must be numbers');
  }
  return a + b;
}

function subtract(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both parameters must be numbers');
  }
  return a - b;
}

const result1 = add(5, 3); // Correct usage
console.log(result1); // Output: 8

const result2 = subtract(10, 5); // Correct usage
console.log(result2); // Output: 5

try {
  const result3 = add(5, '3'); // Throws an error now
  console.log(result3);
} catch (error) {
  console.error(error.message); // Output: Invalid input: Both parameters must be numbers
}

try {
  const result4 = subtract(10, '5'); // Throws an error now
  console.log(result4);
} catch (error) {
  console.error(error.message); // Output: Invalid input: Both parameters must be numbers
}
