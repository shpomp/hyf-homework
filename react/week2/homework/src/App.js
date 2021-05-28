import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Counter from "./Counter";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const [tasks, setTasks] = useState([
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

  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete ", id);
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log("toggle ", id);
  };

  return (
    <div>
      <div className="container">
        <Header
          title="To do:"
          onAdd={() => setShowAddTask(!showAddTask)}
          propShowAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
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
      <div className="counter">
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;
