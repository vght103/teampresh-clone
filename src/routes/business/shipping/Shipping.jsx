import React from "react";
import "./shipping.scss";
import { useMediaQuery } from "react-responsive";
const Shipping = (props) => {
  const smSize = useMediaQuery({ query: "(max-width: 576px)" });

  return (
    <main className="main">
      <div className="shipping-img">
        <h2>새벽배송</h2>
      </div>

      <section className="shipping">
        <div className="shipping-instruction">
          <div className="sub-title">
            <h3>새벽배송</h3>
          </div>
          <p>
            상품을 거래처에서 센터로 입고/검수 후 배송 권역에 맞게 배차/분류하여
            최종 소비자에게 배송하는 TimF 서비스입니다.
          </p>
          <p>
            당일 입고, 당일 출고로 하여 재고 부담을 감소 시키며, 여러 화주의
            물량을 크로스 도킹 형태로 배송함으로써 보다 효율적이고 경제적인 배송
            시스템을 운영합니다.
          </p>
          <p>
            또한, 새벽배송 운영 시간에도 운영되는 TIMF CONTROL CENTER를 통해
            본사 컨트롤 센터의 즉각적인 대응과 담당자 간 정보공유로 고객 클레임
            발생 최소화를 할 수 있습니다.
          </p>

          <div className="img-box">
            {smSize ? (
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/shipping/Responsive image (1).png"
                }
                alt="새벽배송 과정"
              />
            ) : (
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/shipping/Responsive image.png"
                }
                alt="새벽배송 과정"
              />
            )}
          </div>
        </div>
      </section>

      <section className="center">
        <div className="sub-title">
          <h3>물류센터 & 냉장차량</h3>
        </div>
        <div className="row center-instruction-box">
          <img
            src={process.env.PUBLIC_URL + "/images/shipping/center.jpg"}
            alt="물류센터"
            className="col-md-5"
          />
          <div className="col-md-6 instruction-text">
            <ul>
              <li>주소: 경기도 수원시 권선구 오목천로 132번길 55</li>
              <li>면적: 6611.57㎡(2,000평) 냉장, 냉동, 분류장 등</li>
              <li>200대 차량 동시 접안 및 출차가능</li>
              <li>입고 즉시 분류, 배송이 가능한 Cross Docking Terminal</li>
              <li>수도권과 30~40km 근접거리 위치</li>
              <li>수송, 배송 접근력 매우 우수</li>
              <li>냉장 4℃ / 냉동 -22℃ 온도 유지</li>
              <li>온도 트래킹 장치, 타코메타(Thachometer) 방식 사용</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="shipping-ability">
        <div className="sub-title">
          <h3>핵심역량</h3>
        </div>
        <div className="row ability-instruction-box">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/shipping/Responsive image (2).png"
            }
            alt="Cold Chain"
            className="col-md-5"
          />
          <div className="col-md-6 instruction-text">
            <h4>Cold Chain</h4>
            <ul>
              <li>냉장/냉동 면적 2,000평 규모의 물류센터 보유</li>
              <li>냉장탑차 다수 보유</li>
              <li>국내 유일 Door to Door Cold Chain Service</li>
              <li>국내 3PL 기업 중 가장 넓은 배송 권역</li>
            </ul>
          </div>
        </div>

        <div className="row ability-instruction-box">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/shipping/Responsive image (1).jpg"
            }
            alt="Control Center"
            className="col-md-5"
          />
          <div className="col-md-6 instruction-text">
            <h4>Control Center</h4>
            <ul>
              <li>새벽시간 중앙 관제 24시간 연락망 구성</li>
              <li>전문 CS 인력배치 배송사고에 대한 빠른 대처</li>
            </ul>
          </div>
        </div>

        <div className="row ability-instruction-box">
          <img
            src={
              process.env.PUBLIC_URL + "/images/shipping/Responsive image.jpg"
            }
            alt="라이센스"
            className="col-md-5"
          />
          <div className="col-md-6 instruction-text">
            <h4>라이센스</h4>
            <ul>
              <li>법인 화물 운송업 취득</li>
              <li>법인 화물 주선업 취득</li>
              <li>배송차량 영업번호판 완비</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="delivery-area">
        <div className="sub-title">
          <h3>배송지역</h3>
        </div>
        <div className=" delivery-box">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/shipping/Responsive image (3).png"
            }
            alt="배송가능지역"
            // className="col-xxl-12 "
          />

          <div className="delivery-vailed">
            <h4>
              지역공통사항 : 섬/공단/학교/학교기숙사/병원/관공서는 배송불가
            </h4>

            <div>
              <h5>전 지역 가능</h5>
              <p>
                서울, 안양시, 부천시, 구리시, 성남시, 수원시, 광명시, 의정부시,
                안산시, 시흥시(안산시흥 공단지역 제외)
              </p>
            </div>

            <div>
              <h5>일부 가능 지역</h5>
              <h6>광주시</h6>
              <p>오포읍</p>

              <h6>고양시</h6>
              <p>
                덕양구 – 성사동(성사1~2동), 화정동(화정1~2동),
                행신동(행신1~3동), 주교동, 토당동, 도내동, 삼송동, 원흥동,
                흥도동, 능곡동, 행주동
              </p>
              <p>
                일산동구 – 장항동(장항1~2동), 마두동(마두1~2동),
                백석동(백석1~2동), 식사동, 풍동, 중산동, 정발산동, 풍산동
              </p>
              <p>
                일산서구 – 일산동(일산1~3동), 주엽동(주엽1~2동), 가좌동, 덕이동,
                대화동, 탄현동, 송산동, 송포동
              </p>

              <h6>과천시</h6>
              <p>관문동 제외 전지역</p>

              <h6>용인시</h6>
              <p>수지구 고기동, 처인구 제외 전지역</p>

              <h6>인천광역시</h6>
              <p>계양구, 부평구, 남동구, 연수구, 미추홀구, 서구</p>

              <h6>하남시</h6>
              <p>
                미사동(미사1~2동), 신장동(신장1~2동), 덕풍동(덕풍1~3동), 망월동,
                선동, 풍산동, 창우동, 천현동, 학암동, 위례동
              </p>

              <h6>파주시</h6>
              <p>
                금촌동(금촌1~3동), 운정1~3동, 야동동, 다율동, 와동동, 목동동,
                동패동, 문발동, 야당동, 교하동
              </p>

              <h6>화성시</h6>
              <p>
                병점동(병점1~2동), 동탄1~6동, 진안동, 반월동, 기산동, 능동,
                반송동, 석우동, 영천동, 청계동, 오산동, 목동, 산척동
              </p>

              <h6>의왕시</h6>
              <p>내손동(내손1~2동), 포일동, 오전동, 고천동</p>

              <h6>군포시</h6>
              <p>
                군포1~2동, 산본동(산본1~2동), 금정동, 당동, 당정동, 부곡동,
                광정동, 궁내동, 수리동, 재궁동, 오금동
              </p>
              <h6>김포시</h6>
              <p>
                양촌읍, 고촌읍, 운양동, 장기동, 구래동, 마산동, 걸포동, 감정동,
                사우동, 북변동, 풍무동
              </p>

              <h6>남양주시</h6>
              <p>
                진전읍, 진건읍, 와부읍, 별내면, 퇴계원면, 다산동(다산1~2동),
                별내동, 평내동, 호평동, 금곡동, 이패동, 도농동, 지금동
              </p>

              <h6>오산시</h6>
              <p>
                양산동, 세교동, 외삼미동, 금암동, 내삼미동, 수청동, 은계동,
                궐동, 서동, 벌음동, 탑동, 누읍동, 갈곶동, 청호동, 고현동, 원동,
                부산동, 오산동, 청학동, 가수동
              </p>

              <h6>평택시</h6>
              <p>
                고덕면, 팽성읍, 신장동, 독곡동, 지산동, 서정동, 이중동, 장안동,
                도일동, 장당동, 가재동, 철괴동, 칠원동, 지제동, 세교동, 통복동,
                평택동, 군문동, 합정동, 비전동, 소사동, 용이동, 죽백동, 동삭동
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shipping;
