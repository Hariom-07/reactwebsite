import React from 'react';
import reactDom from 'react-dom';
import './index.css'

let currDate = new Date(2021,11,9,13);
currDate = currDate.getHours();
let greeting = "";
const cssStyle = { };

if(currDate >= 1 && currDate < 12){
  greeting = "Good Morning";
  cssStyle.color = "green";
}else if(currDate >= 12 && currDate <=19 ){
  greeting = "Good Afternoon"
  cssStyle.color = "Orange";
}else{
  greeting = "Good Night";
  cssStyle.color = "Black";
}

reactDom.render(
    <>
    <div>
    <h1>Hello Sir, <span style={cssStyle}> {greeting} </span> </h1>
    </div>
    </>,
    document.getElementById('root')
);




// css ***


// body{
//     background-color: #b4f2e1;
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0%;
    
//   }
  
//   div{
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
  
//   h1{
//     background-color: rgb(233, 227, 219);
//     padding: 20px 20px;
//     border-radius: 20px;
//     color: rgb(15, 14, 13);
//   }
  
//   span{
//     color: #eb6383;
//   }