import React, { useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.body.style.background = dark ? "white" : "black";
    document.body.style.color = dark ? "black" : "#white";
    setDark(!dark);
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {dark ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;
