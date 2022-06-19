import { Link, useLocation } from "react-router-dom";
import Users from "./Users";

const Admin = () => {
  const location = useLocation();
  // console.log(location)
  const from = location.state?.from?.pathname || "/";
  return (
    <section>
      <h1>Admins Page</h1>
      <br />
      <Users />
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
      <br />
    </section>
  );
};

export default Admin;
