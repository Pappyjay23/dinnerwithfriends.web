import Button from "../../../components/Button";
import classes from "./ContactUsForm.module.css";
import { useState } from "react";

const ContactUsForm = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const firstNameOnChangeHandler = (e) => {
    setEnteredFirstName(e.target.value);
  };
  const lastNameOnChangeHandler = (e) => {
    setEnteredLastName(e.target.value);
  };
  const emailOnChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const messageOnChangeHandler = (e) => {
    setEnteredMessage(e.target.value);
  };

  const contactUsFormSubmitHandler = (e) => {
    e.preventDefault();

    // reset form
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmail("");
    setEnteredMessage("");
  };

  return (
    <form onSubmit={contactUsFormSubmitHandler} className={classes.form}>
      <div className={classes["input-container"]}>
        <label htmlFor={"first-name"}>First Name</label>
        <input
          type={"text"}
          id="first-name"
          placeholder="Eunice"
          value={enteredFirstName}
          onChange={firstNameOnChangeHandler}
        />
      </div>
      <div className={classes["input-container"]}>
        <label htmlFor="last-name">Last Name</label>
        <input
          type={"text"}
          id="last-name"
          placeholder="David"
          value={enteredLastName}
          onChange={lastNameOnChangeHandler}
        />
      </div>
      <div className={classes["input-container"]}>
        <label htmlFor="email">Enter mail address</label>
        <input
          type={"email"}
          id="email"
          placeholder="davideunice07@gmail.com"
          value={enteredEmail}
          onChange={emailOnChangeHandler}
        />
      </div>
      <div className={classes["input-container"]}>
        <label htmlFor="message">Type your message</label>
        <textarea
          rows={"10"}
          id="message"
          placeholder="Hello..."
          value={enteredMessage}
          onChange={messageOnChangeHandler}
          maxLength={100}
        />
        <p>Maximum of 100 words</p>
      </div>
      <Button className={classes["contact-submit-btn"]}>Send</Button>
    </form>
  );
};

export default ContactUsForm;
