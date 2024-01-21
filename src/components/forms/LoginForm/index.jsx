import { Link} from "react-router-dom";
import { Input } from "../Input/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginForm.schema";



import style from "./style.module.scss";
import { InputPassword } from "../InputPassword";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const {userLogin} = useContext(UserContext);

  const submit = (payload) => {
    userLogin(payload);
  };

  return (
    <div className={style.conteinerLoginForm}>
      <div>
        <h2 className="title center">Login</h2>
      </div>
      <form className={style.formLogin} onSubmit={handleSubmit(submit)}>
        <Input
          label="Email"
          placeholder= "Digite o seu Email"
          type="email"
          id="email"
          error={errors.email}
          {...register("email")}
        />

        <InputPassword
          label="Digite sua Senha"
          placeholder= "Digite sua Senha"
          id="password"
          error={errors.password}
          {...register("password")}
          
        />

        <div className={style.buttonLogin}>
          <button type="submit" className="btn">
            Entrar
          </button>
          <p className="paragraph">Ainda não possui uma conta?</p>
          <Link to="/register" className="btn btnGrey">
            Cadastre-se
          </Link>
        </div>
      </form>
    </div>
  );
};
