import React from "react";
import FormQuestion from "./FormQuestion";
import FormTextArea from "./FormTextArea";
import styles from "./Form.module.css";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className={styles.container}>
      <form method="POST" id="contactsForm" className={styles.form}>
        <FormQuestion name="name" type="text" title="Full name" />
        <FormQuestion name="email" type="email" title="Email" />
        <FormQuestion name="message" type="text" title="Message" />
        <FormTextArea
          name="message"
          rows="6"
          placeholder="Enter your message"
          required={true}
          className={styles.textArea}
        />

        <Link to="/">
          <button type="submit" className={styles.button}>
            Send message
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
