// console.log(this); // prints window
// console.log(window); // prints window

// window === window
// this happen at the global execution context

// Lexical environment, where the line of code is written/defined, now where the function is called.

// Function Expression
const helloWorldFunc1 = () => {
  console.log(this);
  return 'Hello World';
};

// not hoisted
if (true) {
  helloWorldFunc1();
}

helloWorldFunc1();

function helloWorldFunc2() {
  console.log(this);
  return 'Hello world2';
}
// hoisted

helloWorldFunc2();

(function helloWorldFunc3() {
  console.log(this);
  return 'Hello world3';
})();
// not hoisted, because runtime sees ( at start and not function

helloWorldFunc3();
