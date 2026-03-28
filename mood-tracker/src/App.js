import React, { useState } from "react";

function App() {
  const [mood, setMood] = useState("😊 Happy");

  return (
    <div style={styles.container}>
      <h1>Mood Tracker</h1>

      <h2>Your Mood: {mood}</h2>

      <div style={styles.buttons}>
        <button onClick={() => setMood("😊 Happy")}>Happy</button>
        <button onClick={() => setMood("😢 Sad")}>Sad</button>
        <button onClick={() => setMood("😡 Angry")}>Angry</button>
        <button onClick={() => setMood("😴 Tired")}>Tired</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial"
  },
  buttons: {
    marginTop: "20px"
  }
};

export default App;