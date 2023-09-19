// import React from 'react'
import { useState } from "react";
import { Paragraph } from "./Pargraph";

const Display = () => {
  //   let counter = 130;

  const [counter, setCounter] = useState(130);

  const increment = () => {
    setCounter(counter + 1);
  };
  console.log("1. rendering .......");
  return (
    <div>
      <Paragraph counter={counter} name="prem" phone="098765" />
      <button onClick={increment}>+</button>
      <button>-</button>
    </div>
  );
};

export default Display;
