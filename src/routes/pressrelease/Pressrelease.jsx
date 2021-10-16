import React from "react";
import "./pressrelease.scss";
const Pressrelease = (props) => {
  return (
    <main>
      <section className="pressrelease">
        <h2>보도자료</h2>
        <table className="table">
          <thead className="t-head">
            <tr>
              <th>#</th>
              <th>제목</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody className="t-body"></tbody>
        </table>
      </section>
    </main>
  );
};

export default Pressrelease;
