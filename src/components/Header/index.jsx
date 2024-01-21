import { useContext } from "react";
import LogoKenzieHub from "../../assets/img/logoKenzieHub.png";
import { UserContext } from "../../providers/UserContext";
import style from "./style.module.scss";

export const Header = () => {

  const {userLogout} = useContext(UserContext);
  return (
    <div className={style.header}>
      <img src={LogoKenzieHub} alt="Logo KenzieHub" />
      <button className="btnLink" onClick={userLogout}>
        Sair
      </button>
    </div>
  );
};
