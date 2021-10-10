import Home from "./routes/home/Home";
import "./app.css";
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Home />
      </div>
    </Router>
  );
}

export default App;
