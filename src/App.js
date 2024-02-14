import React, { useState, useRef } from 'react';
import gifImage from './assets/giphy.gif';
import gifImage2 from './assets/sleepy.gif';
import './App.css';

function App() {

  const [x, setx] = useState(52);
  const [y, sety] = useState(55);
  const form = useRef();

  const [show, setShow] = useState(true);


  const body = document.querySelector("body");
  if (!body) {
    throw new ReferenceError("Body section not found.");
  }

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s"
    body.appendChild(heart);
  }
  setInterval(createHeart, 1000);
  setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
      heartArr[0].remove()
    }

  }, 100);


  /* code for moving button */
  const popUp = () => {
    alert("HOW DA FUK YOU CLICK NO!!!");
  }

  const clickedYes = () => {
    //e.preventDefault(); // Prevent the default form submission behavior
    setShow(false);
  }

  function mouseOver() {
    setx(Math.random() * 100);
    sety(Math.random() * 100);
  }
  
  var noStyle = {
    left: x + "%",
    top: y + "%",
    position: "absolute",
  };
  
  var yesStyle = {
    left: "40%",
    top: "55%",
    position: "absolute",
  }

  const generateSpans = (word) => {
    const spans = [];

    for (let i = 0; i < word.length; i++) {
      spans.push(<span key={i} style={{ '--i': i }}>{word[i]}</span>);
    }

    return spans;
  };

  return (
    <div>
    {show && (<>
    <img src={gifImage} alt="Example GIF" 
      style={{
        width: '300px', // Set the width of the GIF
        height: 'auto', // Automatically adjust the height to maintain aspect ratio
        position: 'absolute', // Set the position to absolute
        top: '50%', // Set the top position to 50% of the parent container
        left: '25%', // Set the left position to 50% of the parent container
        transform: 'translate(-50%, -50%)', // Center the GIF horizontally and vertically
      }}
    />
    <p className="pre-valentine">
      Will you be my Valentine
    </p>
    <p className="valentine">{generateSpans("SUKHMUN?")}</p>
    <form onSubmit={clickedYes} ref={form}>
      <button 
        style={yesStyle}
        type="submit"
      >
        YES!
      </button> 
    </form>
    <button
      onMouseOver={mouseOver}
      style={noStyle}
      onClick={popUp}
    >
      no(try me)
  </button>
  </>)}
  {!show && (
    <div className="login-container">
      <img src={gifImage2} alt="Example GIF" 
      style={{
        width: '300px', // Set the width of the GIF
        height: 'auto', // Automatically adjust the height to maintain aspect ratio
        position: 'absolute', // Set the position to absolute
        top: '50%', // Set the top position to 50% of the parent container
        left: '25%', // Set the left position to 50% of the parent container
        transform: 'translate(-50%, -50%)', // Center the GIF horizontally and vertically
      }}
    />
      <div class="login-page">
        <p className="text">
        You win one free date on February 16th at 6:00 pm with an eligible bachelor
        </p>

        <p>*condiitons apply*</p>
      </div>

    </div>
  )}
  </div>
  );
}

export default App;
