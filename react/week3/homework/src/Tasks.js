import Task from "./Task";

const Tasks = ({ tasksprop, onDelete }) => {
  return (
    <>
      {tasksprop.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
