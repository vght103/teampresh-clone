import React from "react";
import "./home.scss";
import "bootstrap";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <main className="main">
        <section className="home-1 ">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={process.env.PUBLIC_URL + "/images/home/background1.png"}
                  alt=""
                  className="d-block w-100"
                />
                <div className="carousel-caption d-md-block">
                  <h5>대한민국 No.1</h5>
                  <p>Cold Chain Platform</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + "/images/home/background2.png"}
                  alt=""
                  className="d-block w-100"
                />
                <div className="carousel-caption d-md-block">
                  <h5>TIMF</h5>
                  <p>Connect Freshness</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + "/images/home/background3.png"}
                  alt=""
                  className="d-block w-100"
                />
                <div className="carousel-caption d-md-block">
                  <h5>COMMERCE TREND</h5>
                  <p>신선식품 물류를 선도하는 시스템 구축</p>
                </div>
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
          <div className="home-1-text">
            <h3>대한민국 No.1 Cold-Chain Platform</h3>
            <p>
              팀프레시는 국내 유일 Door to Door Cold Chain 통합물류 서비스를
              제공합니다. 입출고 – 주문처리 - 새벽배송 전 과정에 신선도 유지를
              위한 설비/역량을 보유하고 있습니다.
            </p>
          </div>
        </section>

        <section className="home-2">
          <h2>TIMF BUSINESS</h2>
          <ul className="row business-list">
            <li className=" col-md-3 ">
              <img
                src={process.env.PUBLIC_URL + "/images/home/main_card1.png"}
                alt=""
              />
              <div className="business-text">
                <h4>새벽배송</h4>
                <p>
                  팀프레시는 당일 입고 및 출고를 원칙으로 새벽배송 망을 운영
                  중입니다. 배송 기사님들은 팀프레시 배송매니저 앱을 사용해 아침
                  7시까지 배송을 완료합니다.
                </p>
                <span>더 알아보기</span>
              </div>
            </li>
            <li className=" col-md-3">
              <img
                src={process.env.PUBLIC_URL + "/images/home/main_card2.png"}
                alt=""
              />
              <div className="business-text">
                <h4>화물주선</h4>
                <p>
                  화물주선은 화물차량이 필요한 곳에 차량을 보내드리는
                  서비스입니다. 팀프레시의 데이터베이스를 활용해 차량의 원활한
                  수급이 가능하도록 도와드립니다.
                </p>
                <span>더 알아보기</span>
              </div>
            </li>
            <li className=" col-md-3">
              <img
                src={process.env.PUBLIC_URL + "/images/home/main_card3.jpg"}
                alt=""
              />
              <div className="business-text">
                <h4>풀필먼트</h4>
                <p>
                  풀필먼트는 재고관리, 주문처리, CS 업무 등을 자체적으로
                  해결하기 어려운 기업을 위한 서비스입니다. 각 화주사별
                  요구사항을 매뉴얼화해 관리합니다.
                </p>
                <span>더 알아보기</span>
              </div>
            </li>
            <li className=" col-md-3">
              <img
                src={process.env.PUBLIC_URL + "/images/home/main_card4.jpg"}
                alt=""
              />
              <div className="business-text">
                <h4>그로서리</h4>
                <p>
                  급식·외식·온라인 커머스 등의 고객사에 식자재를 공급하는
                  서비스입니다. 기존 물류망을 활용헤 식자재를 일괄 공급함으로써
                  비용 효율화가 가능하도록 합니다.
                </p>
                <span>더 알아보기</span>
              </div>
            </li>
          </ul>
        </section>

        <section className="home-3 row">
          <div className="home-notice col-lg-6">
            <h2>공지사항</h2>
            <div className="home-notice-box">
              <h3>
                <Link to="/home">Notice</Link>
              </h3>
              <ul className="notice-list">
                <li>
                  <Link to="/home">[공고] 신주발행 공고(제 3자 배정방식)</Link>
                  <span className="notice_created-at">2021-09-15</span>
                </li>
                <li>
                  <Link to="/home">[공고] 신주발행 공고(제 3자 배정방식)</Link>
                  <span className="notice_created-at">2021-09-08</span>
                </li>
                <li>
                  <Link to="/home">[공고] 신주발행 공고(제 3자 배정방식)</Link>
                  <span className="notice_created-at">2021-08-31</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="home-time_news col-lg-6">
            <h2>보도자료</h2>
            <div className="home-time_news-box">
              <h3>TimF News</h3>
              <ul className="notice-list">
                <li>
                  <Link to="/home">[공고] 신주발행 공고(제 3자 배정방식)</Link>
                  <span className="notice_created-at">2021-09-15</span>
                </li>
                <li>
                  <Link to="/home">[공고] 신주발행 공고(제 3자 배정방식)</Link>
                  <span className="notice_created-at">2021-09-08</span>
                </li>
                <li>
                  <Link to="/home">[공고] 신주발행 공고(제 3자 배정방식)</Link>
                  <span className="notice_created-at">2021-08-31</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="home-4">
          <h2>Connect</h2>
          <div className="connect d-flex justify-content-center">
            <span className="facebook m-5">
              <i className="fab fa-facebook-square fa-4x"></i>
            </span>
            <span className="youtube m-5">
              <i className="fab fa-youtube fa-4x"></i>
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
