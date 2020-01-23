import React from 'react';
import ReactDOM from 'react-dom';


// function HelloWorld() {
//   return 
//     Hello World</div>
  
// }

function HelloWorld() {
  return ["Hello", "World"]
}

// function HelloWorld() {
//   return (
//     <div>Hello World</div>
//   )
// }

// function HelloWorld() {
//   return React.createElement(
//     'p',
//     'test',
//     "Hello World!"
//   )
// }

// function HelloWorld() {
//   return React.createElement(
//     'p',
//     'test',
//     "Hello",
//     " World!"
//   )
// }

// function HelloWorld () {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('p', {}, 'Child 1'),
//     React.createElement('p', {}, React.createElement( 'span', {}, 'Child of child2'))
//   )
// }

ReactDOM.render(
  <HelloWorld />, document.querySelector('#root')
)