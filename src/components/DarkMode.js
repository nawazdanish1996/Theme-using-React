import React, { useState } from 'react';
import "../style/DarkMode.css";

function DarkMode() {
  const [text, setText] = useState("Light Mode")
  let body = document.body;

  const ChangeTxt = () =>{
    if(text === "Dark Mode"){
      setText("Light Mode");
      body.style.background = "#ffffff";
      body.style.color = "#111111";
    }
    else if(text === "Light Mode"){
      setText("Romance");
      body.style.background = "crimson";
      body.style.color = "#fff";
    }
    else{
      setText("Dark Mode");
      body.style.background = "#111111";
      body.style.color = "#fff";
    }
  }

  return (
    <div style={{textAlign: "center"}}>
        <h1>Nawaz Danish, West Bengal, India</h1>


        <button onClick={ChangeTxt}>{text}</button>
    </div>
  )
}

export default DarkMode;