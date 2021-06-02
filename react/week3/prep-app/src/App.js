import "./App.css";
import NameForm from "./NameForm";
import EssayForm from "./EssayForm";
import FlavorForm from "./FlavorForm";
import Reservation from "./Reservation";
import ControlledInput from "./ControlledInput";
import DataFetching from "./DataFetching";
import ChildrenExample from "./ChildrenExample";

function App() {
  return (
    <div>
      <div className="App">
        <NameForm />
        <EssayForm />
        <FlavorForm />
        <Reservation />
      </div>
      <div className="youtube">
        <h3>Controlled input</h3>
        <ControlledInput />
        <h3>Data fetching</h3>

        <DataFetching />
      </div>
    </div>
  );
}

export default App;
