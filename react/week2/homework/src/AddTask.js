import React from "react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [desc, setDesc] = useState();
  const [day, setDay] = useState();
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!desc) {
      alert("add description!");
      return;
    }
    onAdd({ desc, day, reminder });
    setDesc("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>task</label>
        <input
          type="text"
          placeholder="add task"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>date</label>
        <input
          type="text"
          placeholder="add date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="save task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
