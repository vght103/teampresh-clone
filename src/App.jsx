import "./app.scss";
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import RouterList from "./RouterList";
import Header from "./componenets/header/Header";
import Footer from "./componenets/footer/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <RouterList />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
