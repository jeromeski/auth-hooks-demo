import React, { useState } from "react";

import "./_form.css";

const LoginForm = () => {
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <form className="login-form">
        <h4>Login</h4>
        {error && (
          <div className="error-wrapper">
            <p className="error-message">An error has occurred!</p>
          </div>
        )}
        {success && (
          <div className="success-wrapper">
            <p className="success-message">Login success!</p>
          </div>
        )}
        <div className="form-group">
          <label htmlFor="user">Username/Email*</label>
          <input id="user" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password*</label>
          <div className="password-input__group">
            <input id="password" type={show ? "text" : "password"} />
            <button type="button" className="btn-pword" onClick={toggleShow}>
              {show && (
                <span className="material-symbols-outlined">visibility</span>
              )}
              {!show && (
                <span className="material-symbols-outlined">
                  visibility_off
                </span>
              )}
            </button>
          </div>
        </div>

        <label className="checkbox-wrapper">
          <input type="checkbox" /> Trust this device
        </label>

        <button type="submit" className="btn mt-1">
          submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

/*

*/
