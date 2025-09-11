import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from "./Form.module.css";

export const Form = () => {
  const [state, handleSubmit] = useForm("mdkdakoy");
  if (state.succeeded) {
      return (
        <div className={styles.container}>
            <h3>Contact Me</h3>
            <p>Thanks for joining!</p>
        </div>
      )
  }
  return (
    <div className={styles.container}  data-aos="zoom-in">
        <h3>Contact Me</h3>
        <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Write a message"
        rows="8"
        cols="25"
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
}
