import React from "react";
import Greetings from "./Greetings";
import Greeting2 from "./Greeting2";

const App = () => {
  const hello = "Hello World";
  return (
    //JSX -> hanya boleh punya 1 element atau parent/ <div>
    <>
      {/* mengakses hello dalam html/JSX */}
      <h2>{hello}</h2> 
      <h3>Test</h3>
      <Greetings/>
      <Greeting2/>
    </>
  );
};

// komponen adalah fungsi yang mereturn JSX
export default App;

//Jika suatu fungsi dipanggil suatu komponen maka itu dalah child
//yang memanggil adalah parentnya