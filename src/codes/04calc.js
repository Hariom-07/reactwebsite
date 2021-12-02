// App1.jsx

import React from "react";
import {Add, Mul, Div, Sub} from './Calc';

function App1() {
  return (
      <>
       <ul>
            <li>Sum of two no is {Add(40,4)} </li>
            <li>Mulof two no is {Mul(40,4)} </li>
            <li>Div of two no is {Div(53,4)} </li>
            <li>Sub of two no is {Sub(8,4)} </li>
        </ul>
      </>
  );
}

export default App1;

// Calc.jsx

import React from 'react';

function Add(a,b){
    let add = a+b;
    return add;
}
function Mul(a,b){
    let mul = a*b;
    return mul;
}
function Div(a,b){
    let div = a/b;
    div = div.toFixed(2);
    return div;
}
function Sub(a,b){
    let div = a-b;
    return div;
}

export {Add, Mul, Div, Sub};

// index.js

import React from 'react';
import ReactDom from 'react-dom';
import App1 from './App1';


ReactDom.render( 
  <App1 />,
  document.getElementById("root")
);