import React, { useState, useCallback, useEffect } from "react";

import "./App.css";
import SubscriptionForm from "./SubscriptionForm";
import SubscriptionMessage from "./SubscriptionMessage";

const YES_NO_API = "https://yesno.wtf/api";

function App() {
  const [loading, setLoading] = useState(true);
  const [yesNo, setYesNo] = useState("");

  const fetchData = useCallback(() => {
    fetch(YES_NO_API)
      .then((res) => res.json())
      .then((result) => {
        const answer = result.answer;
        setLoading(false);
        setYesNo(answer);
        console.log(answer);
      });
  }, []);

  useEffect(() => {
    fetchData();
    console.log("Im mounted");
  }, [fetchData]);

  return (
    <div className="App">
      <GenericComponent className="outer-container">
        <div className="inner-container">
          {loading && <div>loading...</div>}
          {!loading &&
            (yesNo === "yes" ? <SubscriptionMessage /> : <SubscriptionForm />)}
        </div>
      </GenericComponent>
    </div>
  );
}
// APP ENDS

function GenericComponent({ children }) {
  console.log(children);
  return <div>{children}</div>;
}
// GENERIC COMPONENT ENDS

export default App;
