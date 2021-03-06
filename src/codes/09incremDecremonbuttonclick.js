import React from "react";
import { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const TodoList = () => {

    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    }
    const decNum = () => {
        if(num > 0){
            setNum(num - 1);
        }else{
            alert('sorry can"t decrement')
           setNum(0); 
        }
    }
 
    return (
        <>
        <div className="main_div">
            <div className="center_div" >
                <h1> {num} </h1>
                <div className="btn_div">
                    <Button onClick={incNum} className="btn_green"> 
                    <AddIcon />
                    </Button>
                    <Button onClick={decNum} className="btn_red">
                    <DeleteIcon />
                    </Button>
                </div>
            </div>
        </div>

        </>
    );
};

export default TodoList;

// ************* CSS

// * {

//     box-sizing: border-box;
  
//     padding: 0;
  
//     margin: 0;
  
//     font-family: "Josefin Sans", "Arial Narrow", Arial, sans-serif;
  
//   }
  
//   .main_div {
//     width: 100%;
//     height: 100vh;
//     background: #badc58;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//   }
  
//   .center_div {
//     width: 25%;
//     height: 60vh;
//     background-color: #f4f4f4;
//     box-shadow: 5px 5px 25px -5px rgba(0,0,0,0.5);
//     border-radius: 15px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }
  
//   h1 {
//     color: white;
//     background: transparent;
//     font-size: 50px;
//     background-color: #30336b;
//     padding: 6px 0 2px 0;
//     margin-bottom: 10px;
//     width: 100%;
//     box-shadow: 5px 5px 15px -5px rgba(0,0,0,0.3);
  
//   }
  
//   input {
//     text-align: center;
//     height: 30px;
//     top: 10px;
//     border: none;
//     background: transparent;
//     font-size: 20px;
//     font-weight: 500;
//     width: 60%;
//     border-bottom: 2px solid #8566aa;
//     outline: none;
//   }
  
//   button {
//     min-height: 40px;
//     border-radius: 5%;
//     border-color: transparent;
//     background-color: #30336b;
//     color: #fff;
//     font-size: 20px;
//     border: none;
//     outline: none;
//     padding: 0 15px;
//     margin-top: 30px;
//     box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
//   }
  
//   button:hover {
//     background-color: #22a6b3;
//   }
  
//   .btn_div {
//     width: 100%;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
  
//   }