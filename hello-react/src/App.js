import React from "react";
import "./App.css";

function App() {
  const name = "react";

  return (
    <div className="react">{name === "react" && <h1>리액트입니다.</h1>}</div>
  );
}

export default App;
