import "./App.css";
import React, { useState } from "react";
import MyComponent from "./MyComponent";
import MyfuncComponent from "./MyfuncComponent";

const TodoHeader = (props) => {
  const { text } = props;
  return <h2>{text}</h2>;
};

const TodoListRow = (props) => {
  const { todo } = props;

  return <li>{todo}</li>;
};

const TodoList = (props) => {
  const { todos, headerText } = props;

  return (
    <div>
      <TodoHeader text={headerText} />
      <ul>
        {todos.map((todo) => {
          return <TodoListRow key={todo} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

const todoArray = ["Todo 1", "Todo 2", "Todo 3", "Todo 4", "Todo 5"];

function App() {
  const [todos, setTodos] = useState(todoArray); // initial state, function that allows to update the state
  const [isVisible, setisVisible] = useState(true);
  const [test, setTest] = useState(0);

  const onButtonClick = () => {
    const arrayLength = todos.length; // not the array, but the current state
    const myNextTodoName = `Todo ${arrayLength + 1}`;
    // todos.push(myNextTodoName); // will not update to UI, react does not know!
    const myNextTodos = todos.concat(myNextTodoName); // does not mutate the array, returns a new one
    setTodos(myNextTodos);
    console.log("hej", myNextTodoName);
    console.log(todoArray);
  };

  const onUnmount = () => {
    setisVisible(!isVisible);
  };
  const onUpdate = () => {
    setTest(test + 1);
  };

  return (
    <div className="App">
      <TodoList todos={todos} headerText="Todo list" />

      <button onClick={onButtonClick}>add new todo</button>

      <button onClick={onUnmount}>unmount</button>
      <button onClick={onUpdate}>update</button>

      {isVisible && <MyComponent test={test} />}
      {isVisible && <MyfuncComponent test={test} />}
    </div>
  );
}

export default App;
