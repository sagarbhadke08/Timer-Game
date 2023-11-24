import { useState } from "react";

export default function Player() {

 const [enteredPlayer, setEnteredPlayer]= useState('');

 function handleChange(event){
  setEnteredPlayer(event.target.value);
 }
  return (
    <section id="player">
      <h2>Welcome unknown entity</h2>
      <p>
        <input type="text" onChange={handleChange}/>
        <button >Set Name</button>
      </p>
    </section>
  );
}
