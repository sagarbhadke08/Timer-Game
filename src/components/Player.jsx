import { useState, useRef } from "react";

export default function Player() {

  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayer] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  // function handleChange(event) {
  //   setSubmitted(false);//* used bcz not to update every key stroke
  //   setEnteredPlayer(event.target.value);
  // }

  function handleClick() {
    // setSubmitted(true);
    setEnteredPlayer(playerName.current.value);
    playerName.current.value = '';
  }
  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2> */}
      {/* Update below and ??--> If it us true then it will return the value and if it is falsy then it will return unknown value  */}
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input
          ref={playerName}
          type="text"

        />

        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
