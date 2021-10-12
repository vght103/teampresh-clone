import React from "react";
import { Route } from "react-router";
import Home from "./routes/home/Home";
import CompanyIntro from "./routes/introduce/companyIntro/CompanyIntro";
import Customer from "./routes/introduce/customerIntro/Customer";
import Map from "./routes/introduce/map/Map";
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
      <Route path="/company/customer">
        <Customer />
      </Route>
      <Route path="/company/map">
        <Map />
      </Route>
    </>
  );
};

export default RouterList;
