import React, { useContext } from "react";
import { ResultContext } from "../App";
import User from "./User";

export const UserContext = React.createContext();

const UsersList = () => {
  const usersList = useContext(ResultContext);

  return (
    <div>
      {usersList.users.length === 0 ? (
        <p>Nothing found :(</p>
      ) : (
        <>
          {usersList.users.map((user) => {
            const userInfo = {
              name: user.login,
              avatar: user.avatar_url,
              url: user.html_url,
            };
            return (
              <UserContext.Provider key={user.id} value={userInfo}>
                <User/>
              </UserContext.Provider>
            );
          })}
        </>
      )}
    </div>
  );
};

export default UsersList;
