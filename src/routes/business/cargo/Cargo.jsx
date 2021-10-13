import React from "react";
import { useMediaQuery } from "react-responsive";
import "./cargo.scss";

const Cargo = (props) => {
  const smSize = useMediaQuery({ query: "(max-width: 576px)" });

  return (
    <main>
      <div className="cargo-img">
        <h2>화물주선</h2>
      </div>
      <section className="cargo">
        <div className="cargo-instruction">
          <h3>화물주선</h3>
          <p>
            LF 사업부는 상품 출고 이후부터 배송까지 수도권 Full Cold Chain
            영업용 화물차량 배송 대행 서비스를 제공하는 서비스입니다.
          </p>
          <p>
            냉동탑 차량이 필요한 고객사에 팀프레시의 냉동탑 배송 매니저
            네트워크에서 고객사의 요구조건에 적합한 매니저를 매칭하여
            진행합니다.
          </p>

          <div className="img-box">
            {smSize ? (
              <img
                src={
                  process.env.PUBLIC_URL + "/images/cargo/Responsive image.png"
                }
                alt="새벽배송 과정"
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + "/images/cargo/LF.png"}
                alt="새벽배송 과정"
              />
            )}
          </div>
        </div>

        <div className="cargo-ability">
          <div className="sub-title">
            <h3>핵심역량</h3>
          </div>
          <div className="row ability-instruction-box">
            <img
              src={process.env.PUBLIC_URL + "/images/cargo/planning.jpg"}
              alt="Cold Chain"
              className="col-md-5"
            />
            <div className="col-md-6 instruction-text">
              <h4>운영</h4>
              <ul>
                <li>냉장차량-화주사 매칭 시스템으로 기업 부담 감소</li>
                <li>
                  배송 매니저 교육을 통해 각 화주사에 맞게 안정적으로 배송
                </li>
                <li>
                  정직하고 직관적인 운송 정산체계 운영과 여러 제휴 혜택으로 배송
                  매니저 DB구축
                </li>
                <li>충분한 양의 DB를 확보해 수요 증가 등의 이슈에 대처 가능</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cargo;
