import React, { useState, useCallback, useEffect } from "react";
// import { useLogger } from "react-use";
import useToggle from "../../hooks/useToggle";
import axios from "../../api/axios";

import "./_form.css";
import { useAuth } from "../../hooks/useAuth";
import Loader from "../spinner/Loader";
import useAxios from "../../hooks/useAxios";

const initialValue = {
  user: "bchittock0@washingtonpost.com",
  password: "sUDtNo"
};

const UnmemoizedLoginForm = () => {
  // useLogger("LoginForm");
  const [show, handleToggle] = useToggle();
  const [value, setValue] = useState(initialValue);
  const { auth, setAuth } = useAuth();
  const { user, password } = value;
  const [response, loading, error, success, getResponse] = useAxios();

  const handleChange = useCallback((name) => {
    return (e) =>
      setValue((prev) => ({
        ...prev,
        [name]: e.target.value
      }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      axiosInstance: axios,
      url: "/login",
      method: "POST",
      data: value
    };
    getResponse(configObj);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted && response) {
      setAuth(response);
    }
    return () => (isMounted = false);
  }, [response]);

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
          Submit {loading && <Loader size={5} />}
        </button>
      </form>
    </div>
  );
};

const LoginForm = React.memo(UnmemoizedLoginForm);

export default LoginForm;
