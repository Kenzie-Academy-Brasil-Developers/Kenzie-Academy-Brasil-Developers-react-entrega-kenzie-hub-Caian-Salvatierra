import { useContext } from "react";
import { Header } from "../Header";
import { UserContext } from "../../providers/UserContext";

export const DefautTemplate = ({children }) => {

  const {user} = useContext(UserContext);
  return (
    <>
      <Header user={user}/>
      {children}
    </>
  );
};
