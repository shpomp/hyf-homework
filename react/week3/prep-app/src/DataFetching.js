import React, { useEffect, useState, useCallback } from "react";
const API_CATS_URL = "https://aws.random.cat/meow";

const DataFetching = (props) => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  const addCat = useCallback(() => {
    fetch(API_CATS_URL)
      .then((res) => res.json())
      .then((result) => {
        const { file } = result;
        // const nextCats = cats.concat(file); // React Hook useEffect has a missing dependency: 'cats'. Either include it or remove the dependency array
        // console.log("see states", cats, nextCats);
        // setCats(nextCats);
        setCats((LastState) => {
          return LastState.concat(file);
        });
        setLoading(false);
        console.log("file", file);
      });
  }, []);
  console.log("cats", cats);

  useEffect(() => {
    addCat();
    console.log("Im mounted");
  }, [addCat]); // wil run once when mounted

  return (
    <>
      {loading && <div>loading...</div>}
      {cats.map((cat) => {
        return <img src={cat} width="300"></img>;
      })}
      <button onClick={addCat}>add cat!</button>
    </>
  );
};

export default DataFetching;
