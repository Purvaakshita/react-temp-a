// App22.jsx
import React from "react";

function App22({ name = "Guest", color = "blue" }) {
    return (
      <div style={{ color }}>
        <h2>Hello, {name}!</h2>
      </div>
    );
  }
  
  export default App22;