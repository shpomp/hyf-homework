import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { MyComponent } from "./MyComponent";
import { WatchCount } from "./WatchCount";

const todos = [
  { id: 0, description: "fix bike" },
  { id: 1, description: "go to beach" },
];

function App(prop) {
  const [count, setCount] = useState(0);
  // setCount((prev) => prev + 1); // this becomes infinite, why?
  // because we are calling use state, returning a state, and rerendering the component
  // if you put it into button, it executes on click.
  const [arrayState, setarrayState] = useState([1, 2, 3]);

  const changeState = () => {
    setCount((prev) => prev + 1);
    setarrayState([...arrayState, 4]); // destructures prev array, adds 4 to it
  };

  // the rule is -  minimise state change

  return (
    <div className="App">
      <div>
        <ul>
          {todos.map((todo) => (
            <li>{todo.description}</li>
          ))}
        </ul>
        <div>Counter:{count}</div> <br />
        <div>Counter:{arrayState}</div> <br />
        <button onClick={changeState}>change state</button> <br />
      </div>
      <MyComponent />
      <WatchCount />
    </div>
  );
}

export default App;
