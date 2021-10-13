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
          <ul className="navbar-nav text-secondary">
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle text-dark"
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
                  <Link className="dropdown-item" to="/company/partner">
                    협력사 소개
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/company/customer">
                    고객사 소개
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/company/map">
                    오시는 길
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle text-dark"
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
                  <Link className="dropdown-item" to="/business/shipping">
                    새벽배송
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/business/cargo">
                    화물주선
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/business/fulfillment">
                    풀필먼트
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/business/grocery">
                    그로서리
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle text-dark"
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
              <Link to="#">
                <span
                  className="nav-link dropdown-toggle text-dark"
                  id="navbarDropdownMenuLink"
                >
                  보도자료
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
