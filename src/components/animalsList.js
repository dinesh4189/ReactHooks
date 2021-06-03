import React, { useState, useEffect } from "react";
import "../styles.css";

const AnimalsApiList = () => {
  let [loader, setLoader] = useState(true);
  let [animals, setAnimals] = useState({});
  let [count, setCount] = useState(0);

  const animalApi = async () => {
    setLoader(true);
    let animalApiResponse = await fetch("https://api.publicapis.org/entries");
    let newsPromise = await animalApiResponse.json();
    return newsPromise;
  };

  useEffect(() => {
    animalApi()
      .then((data) => {
        setLoader(false);
        setCount(data.count);
        setAnimals(data.entries);
        console.log(count);
        console.log(animals);
      })
      .catch((error) => console.log("Error Message -> " + error));
  }, []);
  return (
    <div className="newsWrapper">
      {loader ? (
        <div className="loader">Loader...</div>
      ) : (
        <div className="newsContainer">
          <h1>test</h1>
        </div>
      )}
    </div>
  );
};

export default AnimalsApiList;
