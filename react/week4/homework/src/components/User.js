import React, { useContext } from "react";
import { UserContext } from "./UsersList";
import { FaGithub } from "react-icons/fa";

const User = () => {
  const user = useContext(UserContext);

  return (
    <div className="gh-user">
      <img alt="gh-user-avatar" src={user.avatar}></img>
      <h3>{user.name}</h3>
      <a href={user.url}>
        <FaGithub className="gh-icon" />
      </a>
    </div>
  );
};
export default User;
