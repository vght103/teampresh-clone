import React from "react";
import { Route, Switch } from "react-router";
import Home from "./routes/home/Home";
import CompanyIntro from "./routes/introduce/companyIntro/CompanyIntro";
import PartnerIntro from "./routes/introduce/partnerIntro/PartnerIntro";

const RouterList = (props) => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/company/intro">
        <CompanyIntro />
      </Route>
      <Route path="/company/partner">
        <PartnerIntro />
      </Route>
    </>
  );
};

export default RouterList;
