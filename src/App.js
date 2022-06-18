import "./styles.css";
import Login from "./pages/auth/Login";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Unauthorized from "./pages/Unauthorized";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import LinkPage from "./pages/LinkPage";

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/linkpage" element={<LinkPage />} />

        {/* we want to protect these routes */}
        <Route
          element={
            <RequireAuth
              allowedRoles={[ROLES.User, ROLES.Editor, ROLES.Admin]}
            />
          }
        >
          <Route path="/" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}
