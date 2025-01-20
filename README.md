# Express.js Route Handler: Missing Input Validation

This repository demonstrates a common error in Express.js route handlers: the lack of input validation.  The example shows a route that fetches user data based on a user ID. However, it fails to validate whether the provided ID is numeric, potentially leading to unexpected behavior or errors if a non-numeric ID is supplied.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version that incorporates input validation to handle non-numeric IDs gracefully.

## Bug:
The original code lacks input validation.  If a non-numeric ID is used, the database query (not shown here but implied) may fail or lead to unexpected results.  This might cause an internal server error or return incorrect data.  The user experience is not optimal.

## Solution:
The solution adds input validation to check if the `userId` is numeric using `isNaN()`. If it's not numeric, a 400 Bad Request response is returned. This makes the application more robust and less prone to errors.