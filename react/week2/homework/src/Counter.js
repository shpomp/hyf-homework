import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearTimeout(counter);
    };
  });

  return (
    <p>
      You have spent {count} {count != 1 ? "seconds" : "second"} here!
    </p>
  );
};

export default Counter;
