import React from "react";
import "./employment.scss";

const Employment = (props) => {
  return (
    <main>
      <section className="employment">
        <h2>인재채용</h2>
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

export default Employment;
