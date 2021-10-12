import React from "react";
import "./partnerIntro.scss";

const PartnerIntro = (props) => {
  return (
    <main>
      <section className="partner-intro-1">
        <div className="partner-intro-img">
          <h2>협력사 소개</h2>
        </div>
        <div className="partners-container">
          <ul className="partner-list row ">
            <li className="col-md-4">
              <h6>NETWORK</h6>
              <img
                src={process.env.PUBLIC_URL + "/images/partner-intro/lk.png"}
                alt=""
              />
            </li>
            <li className="col-md-4">
              <h6>LOGISTICS CENTER</h6>
              <img
                src={
                  process.env.PUBLIC_URL + "/images/partner-intro/hansol.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL + "/images/partner-intro/savills.png"
                }
                alt=""
              />
            </li>
            <li className="col-md-4">
              <h6>FACILITIES</h6>
              <img
                src={process.env.PUBLIC_URL + "/images/partner-intro/서림.png"}
                alt=""
              />
            </li>
            <li className="col-md-4">
              <h6>MATERIALS</h6>
              <img
                src={
                  process.env.PUBLIC_URL + "/images/partner-intro/3stech.png"
                }
                alt=""
              />
            </li>
            <li className="col-md-4">
              <h6>WMS SOLUTION</h6>
              <img
                src={
                  process.env.PUBLIC_URL + "/images/partner-intro/nosnos.png"
                }
                alt=""
              />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default PartnerIntro;
