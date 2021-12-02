// index.js

import React from 'react';
import ReactDom from 'react-dom';
import App1 from './App1';
import './index.css';
import TodoList from './TodoList';


ReactDom.render( 
  <App1 />,
  document.getElementById("root")
);




// ************App1.jsx 

import React, {useState} from "react";
import TodoList from "./TodoList";

const App1 = () => {  
  
  const [inputList, setInputList] = useState();
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  }

  const deleteItems = (id) => {
    setItems ((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index != id;
      })
    })
  }

  return (
    <>
     <div className="main_div"> 
     <div className="center_div">
     <br />
     <h1> ToDo List </h1>
     <br />
     <input type="text" placeholder="Add a items"
      value={inputList}
      onChange={itemEvent}
      />

     <button onClick={listOfItems} > + </button>

      <ol>
        {/* <li> {inputList} </li> */}

        {Items.map((itemval, index) => {
         return <TodoList 
         key={index} 
         id={index} 
         text={itemval} 
          onSelect = {deleteItems}
         />;

        })}

      </ol>
     </div>
     </div> 
    </>
  );
};

export default App1;

// **********TodoList.jsx

import React from "react";


const TodoList = (props) => {


    return (
        <>
        <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true" 
          onClick={() => {
              props.onSelect(props.id);
          }}
          />
            <li> {props.text} </li>

        </div>
        </>
    );
};

export default TodoList;

// *************CSS


// * {

//     box-sizing: border-box;
  
//     padding: 0;
  
//     margin: 0;
  
//     font-family: "Josefin Sans", "Arial Narrow", Arial, sans-serif;
  
//   }
  
  
  
//   .main_div {
  
//     width: 100%;
  
//     height: 100vh;
  
//     background: #7bed9f;
  
//     display: flex;
  
//     flex-direction: row;
  
//     justify-content: center;
  
//     align-items: center;
  
//     text-align: center;
  
//   }
  
  
  
//   .center_div {
  
//     width: 25%;
  
//     height: 70vh;
  
//     background-color: #f4f4f4;
  
//     box-shadow: 5px 5px 25px -5px rgba(0, 0, 0, 0.5);
  
//     border-radius: 15px;
  
//   }
  
  
  
//   h1 {
  
//     color: rgba(0, 0, 0, 0.87);
  
//     font-size: 50px;
  
//     margin-bottom: 30px;
  
//     min-width: 64px;
  
//     box-sizing: border-box;
  
//     font-family: "Comfortaa", cursive;
  
//     /* plz subscibe to thapatechnical channel */
  
//     font-weight: 500;
  
//     border-radius: 4px;
  
//     letter-spacing: 0.02857em;
  
//     text-transform: uppercase;
  
//     text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  
//   }
  
  
  
  
  
  
  
  
  
  
  
//   input {
  
//     text-align: center;
  
//     height: 30px;
  
//     border: none;
  
//     background: transparent;
  
//     font-size: 20px;
  
//     font-weight: 500;
  
//     width: 60%;
  
//     border-bottom: 2px solid #8566aa;
  
//     outline: none;
  
//     margin-right: 20px;
  
//   }
  
  
  
//   .newBtn {
  
//     width: 50px;
  
//     height: 55px;
  
//     background-color: #16a085 !important;
  
//     color: white !important;
  
//     box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
  
//     /* plz subscibe to thapatechnical channel */
  
//     border-radius: 50% !important;
  
//   }
  
  
  
  
  
  
  
//   .newBtn:hover {
  
  
  
//     color: #16a085 !important;
  
  
  
//     background: white !important;
  
  
  
//   }
  
  
  
  
  
//   /* //the add symbol inside the button in app comp */
  
  
  
//   .MuiSvgIcon-root {
  
  
  
//     width: 2rem !important;
  
  
  
//     height: 2rem !important;
  
  
  
//   }
  
  
  
  
  
//   ol {
  
  
  
//     margin-top: 30px;
  
  
  
//     /* margin-right: 50px; */
  
  
  
//   }
  
  
  
  
  
//   ol li {
  
  
  
//     padding-left: 0px;
  
  
  
//     text-align: left;
  
  
  
//     font-size: 20px;
  
  
  
//     font-weight: 500;
  
  
  
//     min-height: 40px;
  
  
  
//     display: flex;
  
  
  
//     align-items: center;
  
  
  
//     color: #8566aa;
  
  
  
//     text-transform: capitalize;
  
  
  
//     /* plz subscibe to thapatechnical channel */
  
  
  
//     list-style: none;
  
  
  
//   }
  
  
  
  
  
//   .todo_style {
  
  
  
//     display: flex;
  
  
  
//     flex-direction: row;
  
  
  
//     justify-content: left;
  
  
  
//     align-items: center;
  
  
  
//   }
  
  
  
  
  
//   .todo_style .fa-times  {
  
  
  
//     width: 25px;
  
  
  
//     height: 25px;
  
  
  
//     display: flex;
  
  
  
//     justify-content: center;
  
  
  
//     align-items: center;
  
  
  
//     background-color: #8566aa;
  
  
  
//     border-radius: 50%;
  
  
  
//     margin: 0 15px 0 35px;
  
  
  
//     padding: 5px;
  
  
  
//     color: aliceblue;
  
  
  
//     box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
  
  
  
//   }
  
  
  
  
  
//   .todo_style .fa-times:hover {
  
  
  
//     background-color: red;
  
  
  
//     color: rgb(163, 10, 40);
  
  
  
//     box-shadow: 5px 5px 15px -5px rgba(255, 0, 0, 0.5);
  
  
  
//   }
  
  
  
  
  
//   .todo_style .fa-times  .list_style {
  
  
  
//     color: crimson;
  
  
  
//   }
  
  
  
  
  
//   @media (max-width: 768px) {
  
  
  
//     .center_div {
  
  
  
//       width: 55%;
  
  
  
//     }
  
  
  
  
  
//     .todo_style .fa-times   {
  
  
  
//       margin: 0 15px 0 15px;
  
  
  
//       display: flex;
  
  
  
//       justify-content: center;
  
  
  
//       align-items: center;
  
  
  
//       /* plz subscibe to thapatechnical channel */
  
  
  
//     }
  
  
  
  
  
//     button {
  
  
  
//       margin-left: 5px;
  
  
  
//       min-height: 40px;
  
  
  
//       width: 40px;
  
  
  
//       color: #fff;
  
  
  
//       font-size: 30px;
  
  
  
//     }
  
  
  
//   }
  