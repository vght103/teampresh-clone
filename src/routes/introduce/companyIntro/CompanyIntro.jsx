import React from "react";
import "./companyIntro.scss";
const CompanyIntro = (props) => {
  return (
    <main>
      <section className="company-intro-1">
        <div className="company-intro-img">
          <h2>회사소개</h2>
        </div>
        <div className="intro-text-wrap ">
          <div className="intro-1-text row">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/company-intro/logo_indigo_teamfresh.png"
              }
              alt="팀프레시 로고"
              className="logo-img col-md-3"
            />
            <p className="col-md-9">
              TimF는 Team Fresh를 발음기호로 형상화 한 것으로 <br /> 신선식품
              배송 업계를 리드할 최상의 팀이라는 의미를 가지고 있습니다.
            </p>
          </div>
        </div>
      </section>
      <section className="company-intro-2">
        <div className="intro-2-wrap">
          <div className="intro-2-text">
            <h3>"대한민국 No.1 Cold-Chain Platform"</h3>
            <p>
              안전한 환경에서 신속하게 고객에 먹거리를 제공함으로써 대한민국
              콜드체인 대표 플랫폼이 되겠다는 포부를 가지고 있습니다.
            </p>
          </div>

          <div className="intro-2-video ">
            <iframe
              src="https://www.youtube.com/embed/vlXzU-1Oec4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CompanyIntro;
