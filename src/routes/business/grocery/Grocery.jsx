import React from "react";
import "./grocery.scss";

const Grocery = (props) => {
  return (
    <main>
      <div className="grocery-img">
        <h2>그로서리</h2>
      </div>
      <section className="grocery">
        <div className="grocery-instruction">
          <div className="grocery-sub">
            <h3 className="sub-title">그로서리</h3>
            <p className="sub-p">
              그로서리 사업부는 급식/외식/온라인 식품 커머스 등 고객사에
              식자재를 공급하는 사업부로, 각 고객사의 비즈니스 모델에 적합한
              식자재 큐레이션 서비스를 제공하고 있습니다.
            </p>
            <p className="sub-p">
              식자재 및 부자재 협력사와 SCM Network를 구축하고 기존 물류먕을
              통해 제조 고객사에 식자재/부자재를 일괄 공급함으로써 구매력이
              부족한 중소 고객사에 좋은 식자재를 더욱 합리적인 가격으로 제공하고
              있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="grocery">
        <div className="grocery-instruction">
          <div className="grocery-sub">
            <h3 className="sub-title">식자재 구매 경쟁력</h3>
            <p className="sub-p">
              한 곳에서, 한번에, 간편하게 대기업 유통사 제품 단일 시스템 발주가
              가능합니다.
            </p>
            <p className="sub-p">
              안정적으로, 저렴하게, 품질유지까지 시세에 민감한 농산/청과 품목을
              시장 경매 및 산지 직거래까지 한번에 확인 가능합니다.
            </p>
            <p className="sub-p">
              더 싸게, 더 편하게, 더 탄력적으로 당사 물류 센터 활용을 통한 재고
              매입으로 단가 경쟁력을 확보했습니다.
            </p>
            <p className="sub-p">
              단가경쟁력, 운영안정성, 발주유연성의 중간 유통과정 없는 공산품
              직거래 매입으로 구매 경쟁력이 있습니다.
            </p>
          </div>

          <div className="grocery-sub-imgs">
            <ul className="sub-imgs-ul row justify-content-around">
              <li className="col-md-3 col-xs-12">
                <img
                  src={process.env.PUBLIC_URL + "/images/grocery/2.png"}
                  alt="대기업 매입"
                />
                <p className="sub-p">
                  <strong>대기업 유통사 매입</strong>을 통한 상품 구색력 강화
                </p>
              </li>
              <li className="col-md-3 col-xs-12">
                <img
                  src={process.env.PUBLIC_URL + "/images/grocery/gr2.png"}
                  alt="시장 경매매입"
                />
                <p className="sub-p">
                  <strong>시세에 민감한 품목(농산/청과)</strong> 시장 경매를
                  통한 매입
                </p>
              </li>
              <li className="col-md-3 col-xs-12">
                <img
                  src={process.env.PUBLIC_URL + "/images/grocery/gr3.png"}
                  alt="재고매입"
                />
                <p className="sub-p">
                  당사 물류센터를 활용하여 <strong>거래처별 맞춤 품목</strong>
                  재고 매입
                </p>
              </li>
              <li className="col-md-3 col-xs-12">
                <img
                  src={process.env.PUBLIC_URL + "/images/grocery/3.png"}
                  alt="직거래매입"
                />
                <p className="sub-p">
                  <strong>거래처별 상위 출하 품목</strong> 제조사 직거래 매입
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="grocery">
        <div className="grocery-instruction">
          <div className="grocery-sub">
            <h3 className="sub-title">물류 경쟁력</h3>
            <p className="sub-p">
              전 과정 Cold Chain System으로 냉장/냉동시설 및 온도조절기 부착하여
              더욱 신선하게 식자재를 제공해드립니다.
            </p>
            <p className="sub-p">
              TMS 운송관리_공급정보/배차 관련 다양한 기준을 제시하여 빠른 배차
              조정이 가능합니다.
            </p>
            <p className="sub-p">
              GPS 위치추적 및 실시간 차량 관제가 가능하여 위치정보, 운행 중
              온도관리 등 배송 차량의 실시간 관리가 가능합니다.
            </p>
          </div>

          <ul className="grocery-process ">
            <li className="process-li">
              <div>
                <span className="ico">
                  <i class="fas fa-sign-in-alt fa-2x"></i>
                </span>
                <span>입고</span>
                <p>주문상품 센터입고</p>
              </div>
            </li>
            <li className="process-li ">
              <div>
                <span className="ico">
                  <i class="fas fa-sign-in-alt fa-2x"></i>
                </span>
                <span>검수/검품</span>
                <p>상품의 수량/품질확인</p>
              </div>
            </li>
            <li className="process-li ">
              <div>
                <span className="ico">
                  <i class=" fas fa-sign-in-alt fa-2x"></i>
                </span>
                <span>이동/보관</span>
                <p>창고 및 분류장으로 이동/보관</p>
              </div>
            </li>
            <li className="process-li ">
              <div>
                <span className="ico">
                  <i class="fas fa-sign-in-alt fa-2x"></i>
                </span>
                <span>분류/피킹</span>
                <p>출고예정상품에 대해 분류 및 창고 내 pick-up</p>
              </div>
            </li>
            <li className="process-li ">
              <div>
                <span className="ico">
                  <i class="fas fa-sign-in-alt fa-2x"></i>
                </span>
                <span>검수/상차</span>
                <p>2차검수 및 배송차량 상품 적재</p>
              </div>
            </li>
            <li className="process-li ">
              <div>
                <span className="ico">
                  <i class="fas fa-sign-in-alt fa-2x"></i>
                </span>
                <span>배송/추적</span>
                <p>배송차량 실시간 위치/온도 관제</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="grocery">
        <div className="grocery-instruction">
          <div className="grocery-sub">
            <h3 className="sub-title">고객지원 서비스</h3>
            <p className="sub-p">
              에네스푸드넷 온라인 발주시스템을 통해 대기업매입, 시장매입,
              재고매입, 직거래 매입이 한번에 가능합니다.
            </p>
            <p className="sub-p">
              클레임 발생을 대비하여 VOC담당자가 사전, 사후 관리 서비스를
              제공합니다.
            </p>
          </div>

          <ul className="service row">
            <li className="service-li col-md-3 col-sm-6">
              <span>① 사전관리</span>
              <p>CS팀 상시관리 조기출근 주말대응</p>
            </li>
            <li className="service-li col-md-3 col-sm-6">
              <span>② 클레임 발생</span>
              <p>
                영업사원 / CS사원 접수 및 응대 (오입고, 미입고, 품질불량 등)
              </p>
            </li>
            <li className="service-li col-md-3 col-sm-6">
              <span>③ 클레임 처리</span>
              <p>원인 분석 및 확인 1시간 이내 해결 (교환, 반품, 재입고 등)</p>
            </li>
            <li className="service-li col-md-3 col-sm-6">
              <span>④ 사후 관리</span>
              <p>피드백 관리 재발방지 교육 실시</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Grocery;
