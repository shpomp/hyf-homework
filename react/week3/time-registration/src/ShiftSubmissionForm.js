import React, { useState } from "react";

const ShiftSubmissionForm = () => {
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  console.log(name, startTime, endTime);

  return (
    <form>
      <label>name:</label>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>

      <label>start time:</label>
      <input
        type="time"
        value={startTime}
        onChange={(event) => {
          setStartTime(event.target.value);
        }}
      ></input>

      <label>end time</label>
      <input
        type="time"
        value={endTime}
        onChange={(event) => {
          setEndTime(event.target.value);
        }}
      ></input>
    </form>
  );
};

export default ShiftSubmissionForm;
