import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = (props) => {
  return (
    <footer className="footer row">
      <div className="footer-box box-1 col-md-4">
        <h6>Timf</h6>
        <p>상호명: (주)팀프레시</p>
        <p>사업자등록번호: 561-88-01138</p>
        <p>대표자: 이성일</p>
      </div>
      <div className="footer-box box-2 col-md-4">
        <h6>Contact us</h6>
        <p>Tel: 02-423-0525</p>
        <p>Fax: 02-3432-0525</p>
        <p>E-mail: info@timf.co.kr</p>
        <p>서울특별시 송파구 위례성대로 12길 15-1</p>
        <p>
          영업 및 제휴 문의: <br /> E-mail: sales@timf.co.kr
        </p>
      </div>
      <div className="footer-box box-3 col-md-4">
        <h6>Others</h6>
        <p>
          <Link to="#">인재채용</Link>
        </p>
        <p>
          <Link to="#">서비스 소개</Link>
        </p>
        <p>
          <Link to="#">개인정보 처리방침</Link>
        </p>
        <p>
          <Link to="#">위치기반 서비스 이용약관</Link>
        </p>
      </div>
      <div className="footer-box box-4 col-12">
        <p>© TeamFresh All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
