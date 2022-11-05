import React from "react";
import styles from "./Crad.module.css";

export default function Crad({ item }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.img_wrap}>
        <img src={item.img} alt="" className={styles.card_img} />
      </div>
      <div>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <div>
          <span>{item.date}</span>
          <span>•</span>
          <span>{item.comment}</span>
        </div>
      </div>
      <div>
        <div>
          <span>
            <img src={item.profile} alt="" className={styles.card_profile} />
          </span>
          <span>
            by <b>{item.name}</b>
          </span>
        </div>
        <div>{item.like}</div>
      </div>
    </div>
  );
}
