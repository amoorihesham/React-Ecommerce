import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser, userToken, setUserToken }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
