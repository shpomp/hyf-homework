import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";

const Task = ({ task, onDelete, onToggle, onCheck }) => {
  const [checkbox, setCheck] = useState(false);

  const taskChecked = () => {
    setCheck(!checkbox);
  };

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 className={checkbox ? "taskChecked" : ""}>
        <div>
          {task.desc}{" "}
          <input
            className="taskCheckBox"
            type="checkbox"
            onClick={taskChecked}
          ></input>
        </div>

        <FaRegTrashAlt onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
