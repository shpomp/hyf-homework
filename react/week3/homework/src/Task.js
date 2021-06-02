import { FaRegTrashAlt, FaRegEdit, FaRegSave } from "react-icons/fa";
import { useState } from "react";
import Border from "./Border";

const Task = ({ task, onDelete }) => {
  const [checkbox, setCheck] = useState(false);
  const [editing, setEditing] = useState(false);
  const [taskDescription, setTaskDescription] = useState(task.description);

  const taskChecked = () => {
    setCheck(!checkbox);
  };

  const saveTask = (id) => {
    task.description = taskDescription;
    setTaskDescription(task.description);
    setEditing(false);
  };

  return (
    <div className="task">
      <Border>
        <h3 className={checkbox ? "taskChecked" : ""}>
          <div>
            <input
              className="taskCheckBox"
              type="checkbox"
              onClick={taskChecked}
            />
            {editing ? (
              <input
                className="editingTask"
                type="text"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              ></input>
            ) : (
              task.description
            )}
          </div>
          <div>
            {editing ? (
              <FaRegSave className="icon" onClick={() => saveTask(task.id)} />
            ) : (
              <FaRegEdit className="icon" onClick={() => setEditing(true)} />
            )}
            <FaRegTrashAlt className="icon" onClick={() => onDelete(task.id)} />
          </div>
        </h3>
        <p>{task.deadline}</p>
      </Border>
    </div>
  );
};

export default Task;
