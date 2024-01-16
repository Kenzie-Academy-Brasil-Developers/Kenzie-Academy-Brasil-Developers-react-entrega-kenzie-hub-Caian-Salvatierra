import { createContext } from "react";

export const UserContext = createContext({});

export const USerProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
