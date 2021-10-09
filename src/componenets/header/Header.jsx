import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header>
      <div>
        <h1 className={styles.logo}>
          <img
            src={process.env.PUBLIC_URL + "./images/home/logo.png"}
            alt="팀프레쉬 로고"
          />
        </h1>
      </div>
    </header>
  );
};

export default Header;
