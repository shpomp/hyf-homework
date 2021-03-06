import "./App.css";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import UsersList from "./components/UsersList";

export const SearchContext = React.createContext();
export const ResultContext = React.createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("mojombo");
  const [users, setUsers] = useState([]);

  const cleanUp = (id) => {
    clearTimeout(id);
  };

  useEffect(() => {
    setLoading(true);
    // debouncing
    const id = setTimeout(async () => {
      try {
        const result = await fetch(
          `https://api.github.com/search/users?q=${searchInput}`
        );
        const fetchedData = await result.json();
        result.ok ? setUsers(fetchedData.items) : setUsers([]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 2000);

    return () => cleanUp(id);
  }, [searchInput]);

  return (
    <div className="App">
      <SearchContext.Provider value={{ searchInput, setSearchInput }}>
        <SearchBar/>
      </SearchContext.Provider>
      {loading && <p>loading....</p>}
      {!loading && (
        <ResultContext.Provider value={{ users }}>
          <UsersList/>
        </ResultContext.Provider>
      )}
    </div>
  );
}

export default App;
