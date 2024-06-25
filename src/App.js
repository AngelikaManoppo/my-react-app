import React from "react";
import Greetings from "./Greetings";
import Greeting2 from "./Greeting2";

const App = () => {
  const hello = "Hello World";
  const handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    //JSX -> hanya boleh punya 1 element atau parent/ <div>
    <>
      {/* mengakses hello dalam html/JSX */}
      <h2>{hello}</h2> 
      <h3>Test</h3>
      <Greetings text="Text ini dari props" number={100}/>
      <Greeting2/>
      <button onClick = {handleClick}>Click Me</button>
    </>
  );
};

// komponen adalah fungsi yang mereturn JSX
export default App;

//Jika suatu fungsi dipanggil suatu komponen maka itu dalah child
//yang memanggil adalah parentnya