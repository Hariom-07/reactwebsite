import React, { useState } from "react";

const App1 = () => {

    const [count, setCount] = useState(0);

    const IncNum = () => {
      setCount(count + 1);
    }
    
  return (
      <>
      <h1> {count} </h1>
      <button onClick={IncNum} > Click Me </button>

      </>
  );
}

export default App1;

// ************

import React, {useState} from "react";

const App1 = () => {
    let newTime = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(newTime);

    const UpdateTime = () => {
      newTime = new Date().toLocaleTimeString();
      setCtime(newTime);
    }
    
  return (
      <>
      <h1> {ctime} </h1>
      <button onClick={UpdateTime} > Get Time </button>

      </>
  );
}

export default App1;

// *****Digital clock
import React, {useState} from "react";

const App1 = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
      time = new Date().toLocaleTimeString();
      setCtime(time);
    }

    setInterval(UpdateTime,1000);
    
  return (
      <>
      <h1> {ctime} </h1>

      </>
  );
}

export default App1;