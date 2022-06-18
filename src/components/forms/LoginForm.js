import React, { useState, useCallback } from "react";
import { useLogger } from "react-use";
import useToggle from "../../hooks/useToggle";
import axios from "../../api/axios";

import "./_form.css";
import { useAuth } from "../../hooks/useAuth";

const initialValue = {
  user: "bchittock0@washingtonpost.com",
  password: "sUDtNo"
};

const UnmemoizedLoginForm = () => {
  useLogger("LoginForm");
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [show, handleToggle] = useToggle();
  const [value, setValue] = useState(initialValue);
  const { auth, setAuth } = useAuth();

  const { user, password } = value;

  const handleChange = useCallback((name) => {
    return (e) =>
      setValue((prev) => ({
        ...prev,
        [name]: e.target.value
      }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", value);
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
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
          <input
            value={user}
            id="user"
            type="text"
            onChange={handleChange("user")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password*</label>
          <div className="password-input__group">
            <input
              value={password}
              id="password"
              type={show ? "text" : "password"}
              onChange={handleChange("password")}
            />
            <button type="button" className="btn-pword" onClick={handleToggle}>
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
