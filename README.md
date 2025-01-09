# Uncommon TypeScript Bug: Type Error Not Caught

This repository demonstrates a subtle issue where a TypeScript type error, related to incorrect parameter types in a function, is not caught during compilation.  The error only manifests during runtime.

The `bug.ts` file shows the code with the type error, and `bugSolution.ts` provides a solution using stricter type checking and input validation.

This issue highlights the importance of rigorous testing and potentially employing additional validation measures beyond the TypeScript compiler's static analysis to prevent runtime errors.