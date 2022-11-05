import React from "react";
import styles from "./Navbar.module.css";
import { BsFillSunFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>V e l o g</span>
      <div className={styles.list}>
        <li>
          <BsFillSunFill />
        </li>
        <li>
          <BsSearch />
        </li>
        <li>
          <button className={styles.button}>로그인</button>
        </li>
      </div>
    </nav>
  );
}
