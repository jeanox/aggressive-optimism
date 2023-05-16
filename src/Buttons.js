import React from "react";

const Buttons = ({ author, text, getRandomValue, getRandomAuthorIndex, remixIndex, remixAuthor }) => {

  const downloadToFile = () => {
    const a = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });

    a.href = URL.createObjectURL(file);
    a.download = author + ' & ' + remixAuthor;
    a.click();

    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="btn-box">
      <button id="new-quote" onClick={() => {getRandomValue(); getRandomAuthorIndex(); }}>
        New Quote ({remixAuthor})
      </button>

      <button className="btn-save" onClick={() => downloadToFile()}>
        Save
      </button>

    </div>
  );
};

export default Buttons;
