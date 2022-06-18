import { createContext, useMemo, useState } from "react";
// import authReducer from "./auth.reducer";
// import { LOADING, LOGIN, LOGOUT } from "./constants";

// const initialValues = {};

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  // const [state, dispatch] = useReducer(authReducer, initialValues);

  const values = useMemo(() => ({ auth, setAuth }), [auth]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
