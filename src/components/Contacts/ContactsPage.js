import React from "react";
import styles from "./ContactsPage.module.css";
import Form from "./Form";
const ContactsPage = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.leftSide}>
        <h1>Contacts Us</h1>
        <Form />
      </div>
      <div
        className={styles.rightSide}
        style={{ backgroundImage: `url(/images/contacts1.jpg)` }}
      ></div>
    </div>
  );
};

export default ContactsPage;
