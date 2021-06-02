import React, { useState } from "react";

const ControlledInput = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const onChangeName = (e) => {
    //const value = e.target.value;
    setName(e.target.value);
    console.log("name", name);
  };

  //   const onChangeAge = (e) => {
  //     setAge(e.target.value);
  //     console.log("age", age);
  //   };

  return (
    <div className="youtube">
      Name:
      <input type="text" value={name} onChange={onChangeName}></input>
      Age:
      <input
        type="text"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default ControlledInput;
