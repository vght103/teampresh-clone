import React from "react";
import { useMediaQuery } from "react-responsive";
import "./fulfillment.scss";

const Fulfillment = (props) => {
  const smSize = useMediaQuery({ query: "(max-width: 576px)" });

  return (
    <main className="main">
      <div className="fulfillment-img">
        <h2>풀필먼트</h2>
      </div>
      <section className="fulfillment">
        <div className="fulfillment-instruction">
          <h3>풀필먼트</h3>
          <p>
            FU 사업부는 신선식품 물류 운영과 관련된 광범위한 업무를 수행합니다.
            물류센터의 재고관리, 주문처리(피패킹) 부터 B2B 배송 및 고객사 판매
            채널의 CS업무까지 담당하고 있습니다.
          </p>
          <p>
            본 서비스는 보관 방법 별 관리가 요구되는 신선식품 고객사, 식품온도별
            소량 상품 합포장 니즈가 있는 고객사에게 추천드립니다.
          </p>

          <div className="img-box">
            {smSize ? (
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/fulfillment/Responsive image.png"
                }
                alt="새벽배송 과정"
              />
            ) : (
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/fulfillment/Responsive image (1).png"
                }
                alt="새벽배송 과정"
              />
            )}
          </div>
        </div>
      </section>

      <section className="fulfillment-ability">
        <div className="sub-title">
          <h3>주요업무</h3>
        </div>
        <div className="row ability-instruction-box">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/fulfillment/Responsive image (2).jpg"
            }
            alt="Cold Chain"
            className="col-md-5"
          />
          <div className="col-md-6 instruction-text">
            <h4>기획</h4>
            <ul>
              <li>일정 설계 및 비용 컨설팅 제공</li>
              <li>운영 프로세스 기획</li>
              <li>구매/시공 관련 컨설팅 제공</li>
              <li>현장 관리직 및 현장직 교육</li>
            </ul>
          </div>
        </div>
        <div className="row ability-instruction-box">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/fulfillment/Responsive image.jpg"
            }
            alt="Cold Chain"
            className="col-md-5"
          />
          <div className="col-md-6 instruction-text">
            <h4>운영</h4>
            <ul>
              <li>입/출고 재고 관리 및 적재관리</li>
              <li>설비 도입(DAS, 컨베이어 벨트 등 설비 도입 및 WMS와 연계)</li>
              <li>프로세스 효율화(병목공정 파악 및 개선)</li>
              <li>작업동선 설계</li>
            </ul>
          </div>
        </div>
        <div className="row ability-instruction-box">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/fulfillment/Responsive image (1).jpg"
            }
            alt="Cold Chain"
            className="col-md-5"
          />
          <div className="col-md-6 instruction-text">
            <h4>관리</h4>
            <ul>
              <li>CS 기획 및 운영</li>
              <li>콜센터 시스템 구축</li>
              <li>데이터 관리</li>
              <li>현장 인력 채용 및 관리</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Fulfillment;
