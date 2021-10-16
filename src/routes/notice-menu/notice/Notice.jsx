import React from "react";
import "./notice.scss";
import { Link } from "react-router-dom";

const Notice = (props) => {
  return (
    <main>
      <section className="notice">
        <h2>공지사항</h2>
        <table className="table">
          <thead className="t-head">
            <tr>
              <th>#</th>
              <th>제목</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody className="t-body">
            <tr>
              <th className="notice-no">10</th>
              <th className="notice-link">
                <Link to="#">[공고] 신주발행 공고 (구주주 배정방식)</Link>
              </th>
              <th>2021-09-15</th>
            </tr>
            <tr>
              <th className="notice-no">9</th>
              <th className="notice-link">
                <Link to="#">[공고] 신주발행 공고 (구주주 배정방식)</Link>
              </th>
              <th>2021-09-08</th>
            </tr>
            <tr>
              <th className="notice-no">8</th>
              <th className="notice-link">
                <Link to="#">[공고] 신주발행 공고 (구주주 배정방식)</Link>
              </th>
              <th>2021-08-31</th>
            </tr>
            <tr>
              <th className="notice-no">7</th>
              <th className="notice-link">
                <Link to="#">[공고] 신주발행 공고 (구주주 배정방식)</Link>
              </th>
              <th>2021-04-01</th>
            </tr>
            <tr>
              <th className="notice-no">6</th>
              <th className="notice-link">
                <Link to="#">[공고] 신주발행 공고 (구주주 배정방식)</Link>
              </th>
              <th>2021-03-09</th>
            </tr>
            <tr>
              <th className="notice-no">5</th>
              <th className="notice-link">
                <Link to="#">[공고] 신주발행 공고 (구주주 배정방식)</Link>
              </th>
              <th>2021-03-09</th>
            </tr>
            <tr>
              <th className="notice-no">4</th>
              <th className="notice-link">
                <Link to="#">[공고] 신주발행 공고 (구주주 배정방식)</Link>
              </th>
              <th>2021-02-19</th>
            </tr>
            <tr>
              <th className="notice-no">3</th>
              <th className="notice-link">
                <Link to="#">[공고] 신주발행 공고 (구주주 배정방식)</Link>
              </th>
              <th>2021-01-20</th>
            </tr>
            <tr>
              <th className="notice-no">2</th>
              <th className="notice-link">
                <Link to="#">[공고] 신주발행 공고 (구주주 배정방식)</Link>
              </th>
              <th>2021-01-07</th>
            </tr>
            <tr>
              <th className="notice-no">1</th>
              <th className="notice-link">
                <Link to="#">[공고] 신주발행 공고 (구주주 배정방식)</Link>
              </th>
              <th>2021-01-07</th>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Notice;
