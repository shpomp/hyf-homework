import React from "react";
import { useState } from "react";

const AddTask = ({ addItem }) => {
  const [description, setDesc] = useState("");
  const [deadline, setDeadline] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!description) {
      alert("add description!");
      return;
    }
    if (!deadline) {
      alert("add deadline!");
      return;
    }
    addItem({ description, deadline });
    setDesc("");
    setDeadline("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <input type="submit" value="save task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
