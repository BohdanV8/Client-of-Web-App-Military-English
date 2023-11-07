import React from "react";
import styles from "./SignInForm.module.css";
const SignInForm = () => {
  return (
    <form className={styles.myForm}>
      <input className={styles.myInput} type="text" placeholder="Username" />
      <input className={styles.myInput} type="password" placeholder="Password" />
      <div className="text-center">
        <button className={styles.myButton}>Sign in</button>
      </div>
      <div className="text-center">
        <button type="button" class="btn btn-link">Don't have an account? Create it!</button>
      </div>
    </form>
  );
};

export default SignInForm;
