import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h1 className="logo">
            <img
              src={process.env.PUBLIC_URL + "/images/home/logo.png"}
              alt="팀프레쉬 로고"
            />
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                회사소개
              </span>
              <ul
                className="dropdown-menu "
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/company/intro">
                    회사소개
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    협력사 소개
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    고객사 소개
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    오시는 길
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                사업소개
              </span>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/#">
                    새벽배송
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    화물주선
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    풀필먼트
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    그로서리
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                공지사항
              </span>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/#">
                    공지사항
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    인재채용
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    서비스소개
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">
                보도자료
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
