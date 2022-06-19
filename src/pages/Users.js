import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useLogger } from "react-use";

// const users = [{name: "Jerome"}, {name: "James"}, {name: "Jacob"}, {name: "Jesse"}]

export const Users = () => {
  const [users, setUsers] = useState();

  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useAuth();
  useLogger("Users");

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get("/list", {
          signal: controller.signal,
          body: { email: auth?.user?.email }
        });
        console.log("Users : res --> ", response.data);
        isMounted && setUsers(response.data.users);
      } catch (error) {
        console.log(error);
        navigate("/login", { state: { from: location }, replace: true });
      }
    };
    getUsers();

    return () => {
      if (controller && controller.abort) {
        controller.abort();
        isMounted = false;
      }
    };
  }, []);

  return (
    <article>
      <h4>User List</h4>
      <ul>
        {users?.length ? (
          users.map((user, i) => <li key={i}>{user.name}</li>)
        ) : (
          <li>No users to show.</li>
        )}
      </ul>
    </article>
  );
};

export default Users;
