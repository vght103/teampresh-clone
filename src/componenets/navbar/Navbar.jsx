import React from "react";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="main_menu">
        <li>
          <span>회사소개</span>
          <ul className="sub_menu">
            <li>회사소개</li>
            <li>협력사 소개</li>
            <li>고객사 소개</li>
            <li>오시는 길</li>
          </ul>
        </li>
        <li>
          <span>사업소개</span>
          <ul className="sub_menu">
            <li>새벽배송</li>
            <li>화물주선</li>
            <li>풀필먼트</li>
            <li>그로서리</li>
          </ul>
        </li>
        <li>
          <span>공지사항</span>
          <ul className="sub_menu">
            <li>공지사항</li>
            <li>인재채용</li>
            <li>서비스소개</li>
          </ul>
        </li>
        <li>
          <span>보도자료</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
