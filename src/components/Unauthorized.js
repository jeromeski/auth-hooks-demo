import React from "react";

const Unauthorized = () => {
  return (
    <React.Fragment>
      <h4>You are unauthorized to access this page</h4>
      <button className="btn">Login</button>
    </React.Fragment>
  );
};

export default Unauthorized;
