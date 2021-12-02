import React, {useState} from "react";

const App1 = () => {   
  const [name, setName] = useState();
  const [fullName, setFullName] = useState();

  const inputEvent = (event) => {
    setName(event.target.value)
  }

    const onSubmit = () => {
      setFullName(name);
    }

  return (
      <>
        <div>
          <h1> Hello {fullName} </h1>
          <input type="text" placeholder="Enter Your Name"
          onChange = {inputEvent} value={name}
          />
          <button onClick = {onSubmit} > Click Me 👍 </button>
         </div>
      </>
  );
}

export default App1;

// ********* Login form

import React, {useState} from "react";

const App1 = () => {   
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [lastNamenew, setLastNameNew] = useState("");

  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastName);
  };

  const inputEvent = (event) => {
    setName(event.target.value);
  };

  const inputEventTwo = (event) => {
    setLastName(event.target.value);
  };

   
  return (
      <>
        <form onSubmit={onSubmits} >
        <div>
          <h1> Hello {fullName} {lastNamenew} </h1>
          <input type="text" placeholder="Enter Your Name"
          onChange = {inputEvent} value={name}
          />
          <input type="text" placeholder="Enter Your LastName"
          onChange = {inputEventTwo} value={lastName}
          />
          <button type="submit" > Submit me 👍 </button>
         </div>
         </form>
      </>
  );
}

export default App1;

// ***** Multiple input

import React, {useState} from "react";

const App1 = () => {   
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      if(name == 'fname'){
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if(name == 'lname') {
        return {
          fname: preValue.fname,
          lname: value,
        };

    }
  });

  };
 
  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(fullName);
  };
  
   
  return (
      <>
        <form onSubmit={onSubmits} >
        <div>
          <h1> Hello {fullName.fname} {fullName.lName} </h1>
          <input type="text" placeholder="Enter Your Name"
          name="fname"
          onChange = {inputEvent} value={fullName.fname}
          />

          <input type="text" placeholder="Enter Your LastName"
          name="lname"
          onChange = {inputEvent} value={fullName.lName}
          />
          <button type="submit" > Submit me 👍 </button>
         </div>
         </form>
      </>
  );
}

export default App1;

// ****** 

import React, {useState} from "react";

const App1 = () => {   
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    // 100 lines of code In two line.
    const { name, value } = event.target;

    setFullName((preValue) => {
      
      return {
        ...preValue,
        [name]: value,
      }

    //   if(name == 'fname'){
    //     return {
    //       fname: value,
    //       lname: preValue.lname,
    //       email: preValue.email,
    //       phone: preValue.phone,
    //     };
    //   } else if(name == 'lname') {
    //     return {
    //       fname: preValue.fname,
    //       lname: value,
    //       email: preValue.email,
    //       phone: preValue.phone,
    //     };
    //   } else if(name == 'email') {
    //     return {
    //       fname: preValue.fname,
    //       lname: preValue.lname,
    //       email: value,
    //       phone: preValue.phone,
    //     };
    //   } else if(name == 'phone') {
    //     return {
    //       fname: preValue.fname,
    //       lname: preValue.lname,
    //       email: preValue.email,
    //       phone: value,
    //     };

    // }
  });

  };
 
  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(fullName);
  };
  
   
  return (
      <>
        <form onSubmit={onSubmits} >
        <div>
          <h1> Hello {fullName.fname} {fullName.lName} </h1>
          <p> {fullName.email} </p>
          <p> {fullName.phone} </p>
          <input type="text" placeholder="Enter Your Name"
          name="fname"
          onChange = {inputEvent} value={fullName.fname}
          />

          <input type="text" placeholder="Enter Your LastName"
          name="lname"
          onChange = {inputEvent} value={fullName.lName}
          />

          <input type="email" placeholder="Enter Your email"
          name="email"
          onChange = {inputEvent} value={fullName.email}
          />

          <input type="number" placeholder="Enter Your number"
          name="phone"
          onChange = {inputEvent} value={fullName.phone}
          />

          <button type="submit" > Submit me 👍 </button>
         </div>
         </form>
      </>
  );
}

export default App1;



// **** CSS

// *{
//   box-sizing: border-box;
//   padding: 0;
//   margin: 0;
//   font-family: 'Source Code Pro', monospace;
// }

// div {
//   width: 100%;
//   height: 100vh;
//   background: #1aad7f;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }

// h1 {
//   padding: 40px;
//   color: white;
//   background: transparent;
//   text-shadow: 0 2px 2px black;
// }
// input {
  
//   padding: 10px 20px;
//   border: none;
//   outline: 20px 0;
//   text-align: center;
// }

// button {
//   line-height: 24px;
//   padding: 10px 20px;
//   background: #7685da;
//   color: white;
//   outline: 2px solid #ecf0f1;
//   outline: none;
//   border-radius: 5px;
//   cursor: pointer;
//   text-transform: uppercase;
// }