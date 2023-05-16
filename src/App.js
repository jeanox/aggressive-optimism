import React, { useState, useEffect } from "react";
import Quote from "./Quote";

const url = "https://type.fit/api/quotes";

function App() {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);

  const remixArray = ['Slappy the Squirrel', 'Lewis Black', 'Gilbert Godfrey', 'Vicky from Fairly Odd Parents', 'Double Trouble from She-Ra'];
  const [remixIndex, setRemixIndex] = useState(0);
  // const [remix, setRemix] = useState([]);

  const getRandomAuthorIndex = () => {
    const randomIndex = Math.floor(Math.random() * remixArray.length);
    // const randomAuthor = remixArray[randomIndex];
    // return randomAuthor;
    if(randomIndex === remixIndex) {
      getRandomAuthorIndex();
    }
    setRemixIndex(randomIndex);
  };

  // const getRandomAuthor = () {
    
  // };

  const getData = async () => {
    const response = await fetch(url);
    const myData = await response.json();
    if (response.status !== 200) {
      throw new Error("Error Fetching Data");
    }
    return myData;
  };

  const getRandomValue = () => {
    let randomValue = Math.floor(Math.random() * quotes.length);
    if (randomValue === index) {
      getRandomValue();
    }
    setIndex(randomValue);
  };

  useEffect(() => {
    getData()
      .then((myData) => {
        setQuotes(myData);
        setLoading(false);
        setIndex(Math.floor(Math.random() * myData.length));
        setRemixIndex(Math.floor(Math.random() * remixArray.length));
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <>
      <Quote quotes={quotes} index={index} getRandomValue={getRandomValue} remixArray={remixArray} remixIndex={remixIndex} getRandomAuthorIndex={getRandomAuthorIndex} />
    </>
  );
}

export default App;
