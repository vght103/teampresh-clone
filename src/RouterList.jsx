import React from "react";
import { Route } from "react-router";
import Cargo from "./routes/business/cargo/Cargo";
import Fulfillment from "./routes/business/fulfillment/Fulfillment";
import Grocery from "./routes/business/grocery/Grocery";
import Shipping from "./routes/business/shipping/Shipping";
import Home from "./routes/home/Home";
import CompanyIntro from "./routes/introduce/companyIntro/CompanyIntro";
import Customer from "./routes/introduce/customerIntro/Customer";
import Map from "./routes/introduce/map/Map";
import PartnerIntro from "./routes/introduce/partnerIntro/PartnerIntro";
import Notice from "./routes/notice/Notice";

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
      <Route path="/business/shipping">
        <Shipping />
      </Route>
      <Route path="/business/cargo">
        <Cargo />
      </Route>
      <Route path="/business/fulfillment">
        <Fulfillment />
      </Route>
      <Route path="/business/grocery">
        <Grocery />
      </Route>
      <Route path="/notice">
        <Notice />
      </Route>
    </>
  );
};

export default RouterList;
