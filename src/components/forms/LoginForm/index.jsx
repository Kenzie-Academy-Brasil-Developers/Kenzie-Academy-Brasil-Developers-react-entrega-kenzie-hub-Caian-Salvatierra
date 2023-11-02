import { Link } from "react-router-dom";
import {Input} from "../Input/index";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import { loginFormSchema } from "./loginForm.schema";

export const LoginForm = () => {
const {
  register, 
  handleSubmit, 
  formState: {errors},
} = useForm({
  resolver: zodResolver(loginFormSchema),

});


const submit = (payload) => {
  console.log(payload)
}

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input 
      label="Email" 
      type="email" 
      id="email" 
      error={errors.email}
      {...register("email")}
      />

      <Input 
      label="Senha" 
      type="password" 
      id="password" 
      error={errors.password}
      {...register("password")}
      />

      <div>
        <button type="submit">Entrar</button>
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </form>
  );
};
