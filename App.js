//Hello World Using REACT
//REACT Philosophy - Manipulate the DOM using JS (React)
/* React.createElement() - 3 arguments(tag name, object-attributes, children),
props = attributes + children ,
root.render() */
/* const heading = React.createElement(
  'h1',
  { id: 'heading', xyz: 'abc' },
  'Hello World from React'
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading); */

//NESTED ELEMENTS
/* <div id="parent">
  <div id="child">
    <h1>I'm h1 tag</h1>
  </div>
</div> */
/* const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement(
    'div',
    { id: 'child' },
    React.createElement('h1', {}, "I'm h1 tag")
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent); */

//Morethan 1 children - ARRAY of Children
/*<div id="parent">
  <div id="child">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
</div> */
/* const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, "I'm h1 tag"),
    React.createElement('h2', {}, "I'm h2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent); */

/* <div id="parent">
  <div id="child">
    <h1>I'm h1 tag</h1>
    <h2>I'm h1 tag</h2>
  </div>
  <div id="child2">
    <h1>I'm h1 tag</h1>
    <h2>I'm h1 tag</h2>
  </div>
</div> */
const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, "I'm h1 tag"),
    React.createElement('h2', {}, "I'm h2 tag"),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, "I'm h1 tag"),
    React.createElement('h2', {}, "I'm h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
/* const root = ReactDOM.createRoot(document.getElementById('header')); */
root.render(parent);
