import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Tasks from "./Tasks";

function App() {
  const [tasks, setTasks] = useState([
    // tasks are now an app level state
    // we can pass tasks down to the task component as a prop
    {
      id: 1,
      desc: "Get out of bed!",
      day: "Wed Sep 13 2021",
      reminder: true,
    },
    {
      id: 2,
      desc: "Brush teeth",
      day: "Thu Sep 14 2021",
      reminder: false,
    },
    {
      id: 3,
      desc: "Eat breakfast",
      day: "Fri Sep 15 2021",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete task ", id);
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log("reminder for ", id);
  };

  return (
    <div className="container">
      <Header />
      {tasks.length ? (
        <Tasks
          tasksprop={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        "Nothing to do!"
      )}
    </div>
  );
}

export default App;

// state gets passed down, action gets passed up
