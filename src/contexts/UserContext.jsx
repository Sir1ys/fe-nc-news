import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userAuthorized, setUserAuthorized] = useState(false);

  return (
    <UserContext.Provider
      value={{
        userState: [user, setUser],
        userAuthorizedState: [userAuthorized, setUserAuthorized],
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
