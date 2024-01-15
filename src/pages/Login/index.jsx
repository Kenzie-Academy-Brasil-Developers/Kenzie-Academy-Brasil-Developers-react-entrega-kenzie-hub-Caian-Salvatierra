import { LoginForm } from "../../components/forms/LoginForm";
import LogoKenzieHub from "../../assets/img/logoKenzieHub.png";
import style from "./style.module.scss";

export const Login = ({ setUser }) => {
  return (
    <main className={style.main}>
      <div className={style.containerLogin}>
        <div className={style.logo}>
          <img src={LogoKenzieHub} alt="LogoKenzieHub" />
        </div>
        <LoginForm setUser={setUser} />
      </div>
    </main>
  );
};
