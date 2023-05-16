import React from "react";
import Buttons from "./Buttons";

function Quote({ quotes, index, getRandomValue, getRandomAuthorIndex, remixIndex, remixArray }) {
  const { text, author } = quotes[index];
  const remixAuthor = remixArray[remixIndex];

  return (
    <section id="quote-box" className="container">
      <h2 className="title">Aggressive Optimism</h2>

      <div className="quote">
        <p id="text">{text}</p>
        <h3 id="author">{author || "unknown"} remixed with {remixAuthor}</h3>
      </div>

      <Buttons author={author} text={text} getRandomValue={getRandomValue} getRandomAuthorIndex={getRandomAuthorIndex} remixAuthor={remixAuthor} />
    </section>
  );
}

export default Quote;
