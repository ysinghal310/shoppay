import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

const NewsLetter = () => {
  return (
    <div className={styles.footer__newsletter}>
      <h3>SIGN UP FOR NEWSLETTER</h3>
      <div className={styles.footer__flex}>
        <input type="text" placeholder="Your Email Address" />
        <button className={styles.btn_primary}>SUBSCRIBE</button>
      </div>
      <p>
        By clicking the subscribe button, you are agreeing to our{"  "}
        <Link href="#">Privacy & Cookie policy</Link>
      </p>
    </div>
  );
};

export default NewsLetter;
