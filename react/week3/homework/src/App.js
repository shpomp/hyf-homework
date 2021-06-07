import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Counter from "./Counter";
import ClipLoader from "react-spinners/ClipLoader";

const TASKS_API =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [loading, setLoading] = useState(true);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(TASKS_API)
      .then((response) => response.json())
      .then((tasksList) => {
        setTasks(tasksList);
        setLoading(false);
      });
  }, []);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div className="container">
        {!loading && <p className="status">you have {tasks.length} tasks!</p>}
        <Header
          title="To do:"
          addItem={() => setShowAddTask(!showAddTask)}
          propShowAdd={showAddTask}
        />
        {loading && <ClipLoader color="gray" loading={loading} size={30} />}
        {showAddTask && <AddTask addItem={addTask} />}
        {tasks.length ? (
          <Tasks tasksprop={tasks} deleteTask={deleteTask} />
        ) : loading ? (
          ""
        ) : (
          "Nothing to do!"
        )}
      </div>
      <div className="status">
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;
