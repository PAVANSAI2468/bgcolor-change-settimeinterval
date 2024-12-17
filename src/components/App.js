import React from "react";
import { useState, useEffect } from "react";

let colours = ["gold", "pink", "green", "yellow"];

const App = () => {
  const [color, setColor] = useState(colours[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % colours.length);
      setColor(colours[(index + 1) % colours.length]);
    }, 1000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <h1>gh</h1>
      <p>countyer</p>
    </div>
  );
};

export default App;
