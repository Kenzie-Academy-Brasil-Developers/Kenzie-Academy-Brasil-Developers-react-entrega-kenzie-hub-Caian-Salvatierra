import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/forms/RegisterForm";

import LogoKenzieHub from "../../assets/img/logoKenzieHub.png";
import style from "./style.module.scss";

export const Register = () => {
  return (
    <main className={style.containerMain}>
      <div className={style.containerRegister}>
      <div className={style.headerRegister}>
        <img src={LogoKenzieHub} alt="KenzieHub" />
        <Link to="/" className="btnLink">Voltar</Link>
      </div>
      <div className={style.registerForm}>
        <h1 className="title center"> Crie sua conta</h1>
        <p className="paragraph center">Rápido e grátis, vamos nessa</p>
        <RegisterForm />
      </div>
      </div>
    </main>
  );
};
