# Stack Overflow Bug in JavaScript

This repository demonstrates a common stack overflow error in JavaScript caused by an improperly designed recursive function. The `foo` function recursively calls itself without a proper base case for certain inputs, resulting in a stack overflow.

## Bug Description
The `bug.js` file contains a recursive function that, under specific conditions, leads to a stack overflow.  The condition that triggers the overflow is when the initial value of 'a' is a positive integer. The recursive calls never terminate. This causes the call stack to grow uncontrollably until it exceeds its limit, resulting in a stack overflow error.

## Solution
The `bugSolution.js` file provides a corrected version of the function with a proper base case to avoid the stack overflow.