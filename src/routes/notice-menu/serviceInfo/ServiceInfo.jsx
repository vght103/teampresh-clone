import React from "react";
import "./serviceInfo.scss";
import "bootstrap";

const ServiceInfo = (props) => {
  return (
    <main>
      <section className="service-info">
        <h2>서비스 소개</h2>
        <div className="service-list">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            // data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/2.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/3.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/4.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/5.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/6.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/7.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/8.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/9.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/10.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/11.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/12.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/13.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/14.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/15.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/16.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/17.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/18.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/19.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/20.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/21.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/22.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/23.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/24.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/notice/serviceInfo/25.png"
                  }
                  alt=""
                  className="d-block w-100"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceInfo;
