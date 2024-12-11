function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a < 0) { // Added base case for negative 'a'
    return b;
  }
  return foo(a - 1, a + b);
}