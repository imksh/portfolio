import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./Form.module.css";

export const Form = () => {
  const [state, handleSubmit] = useForm("mdkdakoy");
  if (state.succeeded) {
    return (
      <div className={styles.container}>
        <h3>Contact Me</h3>
        <p>Thanks for Contacting!</p>
      </div>
    );
  }
  return (
    <div className={styles.container} data-aos="zoom-in">
      <h3>Contact Me</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          required
          style={{ textAlign: "center" }}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label htmlFor="email"></label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={{ textAlign: "center" }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="number"></label>
        <input
          id="number"
          type="text"
          name="number"
          placeholder="Phone Number"
          required
          style={{ textAlign: "center" }}
        />
        <ValidationError prefix="Number" field="number" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          placeholder="Write a message"
          rows="8"
          cols="25"
          required
          style={{ padding: "10px" }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};
