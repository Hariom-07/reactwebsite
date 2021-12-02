import React, {useState} from "react";

const App1 = () => {   
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState('ClickMe');

  const bgChange = () => {
    let newBg = "#34495e";
    setBg(newBg);
    setName("OhYeah!! 😎");
  }
  const bgBack = () => {
    setBg(purple);
    setName("ayyo!");
  }

  return (
      <>
        <div style={{ backgroundColor: bg }} >
          <button onClick = {bgChange} onDoubleClick={bgBack} > {name} </button>
         </div>
      </>
  );
}

export default App1;