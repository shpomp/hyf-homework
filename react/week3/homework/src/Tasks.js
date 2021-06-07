import Task from "./Task";

const Tasks = ({ tasksprop, deleteTask }) => {
  return (
    <>
      {tasksprop.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </>
  );
};

export default Tasks;
