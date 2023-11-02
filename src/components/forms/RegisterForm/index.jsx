import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "../Input/index";
import { registerFormSchema } from "./registerForm.schema";
import { api } from "../../../services/api";


export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState:{ errors } } = useForm({
        resolver: zodResolver(registerFormSchema),
    });

    const userRegister = async (payload) =>{
        try {
           const {data} = await api.post("/users" , payload);
           console.log(data)
            alert ("Cadastro realizado");
        } catch (error) {
            console.log(error)
        }
    };

    const submit = (payload) => {
        userRegister(payload);
        // userRegister(payload);
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input
            label = "Nome"
            type = "text"
            placeholder="Digite aqui seu nome"
            error = {errors.name}
            {...register("name")}
            />

            <Input
            label = "Email"
            type = "email"
            placeholder="Digite aqui seu email"
            error = {errors.email}
            {...register("email")}
            />  

            <Input
            label = "Senha"
            type = "password"
            placeholder="Digite aqui sua senha"
            error = {errors.password}
            {...register("password")}
            />

            <Input
            label = "Confirme sua Senha"
            type = "password"
            placeholder="Confirme sua Senha"
            error = {errors.confirmPassword}
            {...register("confirmPassword")}
            />

            <Input
            label = "Bio"
            type = "bio"
            placeholder="Fale sobre você"
            error = {errors.bio}
            {...register("bio")}
            />

            <Input
            label = "Contato"
            type = "number"
            placeholder="Opção de contato"
            error = {errors.contact}
            {...register("contact")}
            />

            <div>
                <button type="submit">Cadastrar</button>
            </div>


        </form>
    )
};