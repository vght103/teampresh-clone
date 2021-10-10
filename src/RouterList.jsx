import React from "react";
import { Route } from "react-router";
import Home from "./routes/home/Home";

const RouterList = (props) => {
  return (
    <Route exact path="/home">
      <Home />
    </Route>
  );
};

export default RouterList;
