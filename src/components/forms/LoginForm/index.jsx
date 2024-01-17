import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Input/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "./loginForm.schema";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

import style from "./style.module.scss";
import { InputPassword } from "../InputPassword";

export const LoginForm = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const navigate = useNavigate();

  const userLogin = async (payload) => {
    try {
      const { data } = await api.post("/sessions", payload);
      navigate("/dashboard");
      setUser(data.user);
      toast.success("Login realizado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Credencias invalidas");
    }
  };

  const submit = (payload) => {
    userLogin(payload);
  };

  return (
    <div className={style.conteinerLoginForm}>
      <div>
        <h2 className="title center">Login</h2>
      </div>
      <form onSubmit={handleSubmit(submit)}>
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
          type="text"
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
