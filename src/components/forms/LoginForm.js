import React, { useState, useCallback } from "react";
import { useLogger } from "react-use";

import "./_form.css";

const initialValue = {
  user: "",
  password: ""
};

const UnmemoizedLoginForm = () => {
  useLogger("LoginForm");
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(initialValue);

  // const {user, password} = value;

  const toggleShow = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  const handleChange = useCallback((name) => {
    return (e) =>
      setValue((prev) => ({
        ...prev,
        [name]: e.target.value
      }));
  }, []);

  console.log("value -->", value);

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
          <input id="user" type="text" onChange={handleChange("user")} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password*</label>
          <div className="password-input__group">
            <input
              id="password"
              type={show ? "text" : "password"}
              onChange={handleChange("password")}
            />
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

const LoginForm = React.memo(UnmemoizedLoginForm);

export default LoginForm;
