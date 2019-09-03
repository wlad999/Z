import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Contact.module.css";

const Contact = () => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>
      <h2>CONTACT</h2>
      <p>Vorobkevich St., 33, Chernivtsi, Chernivtsi region 58000, UA</p>
      <div>
        <a href="http://zazend.com" target="_blank">
          http://zazend.com
        </a>
      </div>
      <h3>Don`t thinking - go to Chernivtsi right now!</h3>
    </main>
    <div className={styles.header}>
      <Footer />
    </div>
  </div>
);

export default Contact;
