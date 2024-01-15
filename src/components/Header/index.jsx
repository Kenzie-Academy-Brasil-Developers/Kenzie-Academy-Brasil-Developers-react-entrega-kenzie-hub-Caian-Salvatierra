import LogoKenzieHub from "../../assets/img/logoKenzieHub.png";
import style from "./style.module.scss";

export const Header = ({ userLogout }) => {
  return (
    <div className={style.header}>
      <img src={LogoKenzieHub} alt="Logo KenzieHub" />
      <button className="btnLink" onClick={userLogout}>
        Sair
      </button>
    </div>
  );
};
