import "./App.css";
import React, { useEffect, useState, useContext } from "react";

// http://api.open-notify.org/astros.json

const DataContext = React.createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("Lithuania");
  const [universities, setUniversities] = useState([]);

  const cleanUp = (id) => {
    console.log("cleaning");
    clearTimeout(id);
  };

  useEffect(() => {
    console.log("use effect is called");

    if (setSearchInput === "") {
      return;
    }

    const id = setTimeout(async () => {
      console.log("calling");
      const result = await fetch(
        `http://universities.hipolabs.com/search?country=${searchInput}`
      );
      const fetchedData = await result.json();
      setUniversities(fetchedData);
      console.log(fetchedData);
      setLoading(false);
    }, 3000);

    return () => cleanUp(id);
  }, [searchInput]);

  console.log(searchInput);
  return (
    <div className="App">
      <input onKeyUp={(e) => setSearchInput(e.target.value)}></input>
      {loading && <p>loading....</p>}
      {!loading && (
        <DataContext.Provider value={universities}>
          <Display></Display>
        </DataContext.Provider>
      )}
    </div>
  );
}

const Display = () => {
  const uniDataContext = useContext(DataContext);
  console.log(uniDataContext);
  return (
    <div>
      {uniDataContext.map((uni) => (
        <p key={uni.name}>{uni.name}</p>
      ))}
    </div>
  );
};

// setup timeout on fetch for debouncing
// retutn the clean up, dont call it
// only the fetchin is in async, cannot put timeout inside of async!

export default App;
