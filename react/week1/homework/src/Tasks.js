import Task from "./Task";

const Tasks = ({ tasksprop, onDelete, onToggle }) => {
  return (
    <>
      {tasksprop.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
