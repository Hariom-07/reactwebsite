import React,{ useEffect, useState }  from "react";



const App1 = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("i am clicked");
    // document.title = `You clicked me ${num} times`
  },[num])

  return (
    <>
    <button onClick={() => {
      setNum(num+1);
    }}> Click me {num} </button>
    <br />
    <button onClick={() => {
      setNums(nums+1);
    }}> Click me {nums} </button>
    </>
  );
};

export default App1;
