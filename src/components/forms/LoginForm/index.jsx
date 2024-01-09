import { Link, useNavigate } from "react-router-dom";
import {Input} from "../Input/index";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import { loginFormSchema } from "./loginForm.schema";
import { FaRegEyeSlash,FaRegEye }  from "react-icons/fa";
import { useState } from "react"; 
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export const LoginForm = ({setUser}) => {
const [showPwd, setShowPwd] = useState(false)

  const {
  register, 
  handleSubmit, 
  formState: {errors},
} = useForm({
  resolver: zodResolver(loginFormSchema),

});

const navigate = useNavigate(); 

const userLogin = async (payload) =>{
  try {
     const {data} = await api.post("/sessions" , payload);
     navigate ("/dashboard")
     setUser(data.user)
      toast.success("Login realizado com sucesso");
  } catch (error) {
    console.log(error);
      toast.error("Ops! Credencias invalidas")
    
  }
};


const submit = (payload) => {
  userLogin(payload)
};

  return (
    <div>
      <div>
        <h2>Login</h2>
      </div>
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
      type= {showPwd ? "text" : "password"}
      id="password" 
      error={errors.password}
      {...register("password")}
      />

      {showPwd ? <FaRegEye onClick={()=> setShowPwd(!showPwd)} /> : <FaRegEyeSlash onClick={()=> setShowPwd(!showPwd)}/>}

      <div>
        <button type="submit">Entrar</button>
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </form>
    </div>
  );
};
