// App1.js

import React, { createContext } from "react";
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();

const App1 = () => {
  return (
    <>
    <FirstName.Provider value={"Hariom"}>
      <LastName.Provider value={"Singh"}>
        <ComA />
      </LastName.Provider>
    </FirstName.Provider>
    </>
  );
};

export default App1;
export { FirstName, LastName};

// ComA.js

import React from "react";
import ComB from "./ComB";

const ComA = () => {
   return (
       <ComB />
   );

}

export default ComA;

// ComB.js

import React, { useContext } from "react";
import {FirstName, LastName} from "./App1";

const ComB = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (
    <h1> 
    My name is {fname} {lname}
     </h1>
    );
}

export default ComB;