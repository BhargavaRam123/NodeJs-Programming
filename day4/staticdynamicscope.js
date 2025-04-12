var x = 10;

function foo() {
  var y = x + 5;
  return y;
}

function bar() {
  var x = 2;
  return foo();
}

function main() {
  foo(); // Static scope: 15; Dynamic scope: 15
  bar(); // Static scope: 15; Dynamic scope: 7
  return 0;
}