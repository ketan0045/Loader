// without icon 1..
// import React, { useState, useEffect } from 'react';

// function ToggleMode() {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const body = document.body;
//     body.style.backgroundColor = isDark ? '#1E1E1E' : '#FFFFFF';
//     body.style.color = isDark ? '#FFFFFF' : '#1E1E1E';
//   }, [isDark]);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   return (
//     <div>
//       <button onClick={toggleTheme}>
//         {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//       </button>
//       <h1>{isDark ? 'Dark Mode' : 'Light Mode'}</h1>
//       <p>{isDark ? 'This is dark mode.' : 'This is light mode.'}</p>
//     </div>
//   );
// }

// export default ToggleMode;

// with icon 2..

import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function ToggleMode() {
  const [isDark, setIsDark] = useState(false);

  const icon = isDark ? faSun : faMoon;

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = isDark ? "#1E1E1E" : "#FFFFFF";
    body.style.color = isDark ? "#FFFFFF" : "#1E1E1E";
  }, [isDark]); 

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="main-section" >
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>

      <button className="navbar-btn" onClick={toggleTheme}>
        <FontAwesomeIcon icon={icon} />
        &nbsp;&nbsp;
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <hr style={{marginTop:"1px"}}/>

      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
      <p>{isDark ? "This is dark mode." : "This is light mode."}</p>
    </div>
  );
}

export default ToggleMode;
