import React, { useState, useEffect } from "react";

export function WatchCount() {
  console.log("call watch count");
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const decrement = () => {
    console.log("decrement");
    setCount((prev) => prev - 1);
  };

  const resetCountTo0 = () => {
    console.log("reset to 0");
    setCount(0);
  };

  useEffect(() => {
    console.log("-----");
    console.log("calling use effect");
    // use effect runs after  the export function (in this case watch count) is called
    const timerID = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    console.log("Clean up function");
    return () => clearTimeout(timerID); // we are returning a function. Everytime I call a state change and the watchcount is called again
    // but before, cleartimeout will be caller
  }); // executes everytime the state change is observed, so can end up with multiple timers if you fx change state on button click!
  //adding [count] allows the count to continue if there is no change in {count}
  // but the above is not a good solution because it does not keep the single responsibility principle
  // so timer and input should be separated cause it is 2 different things <Timer/> <Input/>
  // everytime we type we call a state changing function - so it calls watch count again

  return (
    <div className="count">
      {count}
      <br /> <br />
      <button onClick={decrement}>decrement timer</button> <br /> <br />
      <button onClick={resetCountTo0}>reset to 0</button> <br /> <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(count);
          console.log(e.target.value);
        }}
      />
    </div>
  );
}
