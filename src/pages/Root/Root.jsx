import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Root.module.css";

export default function Root() {
  return (
    <div className={styles.wrap}>
      <Navbar />
      <Outlet />
    </div>
  );
}
