import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input/index";
import { InputPassword } from "../InputPassword";
import { registerFormSchema } from "./registerForm.schema";
import { SelectForm } from "../SelectForm";


import style from "./style.module.scss";
import { UserContext } from "../../../providers/UserContext";
import { useContext } from "react";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const {userRegister} = useContext(UserContext);

  const submit = (payload) => {
    userRegister(payload);
    reset();
  };

  return (
    <div className={style.containerInput}>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          label="Nome"
          type="text"
          id="name"
          placeholder="Digite aqui seu nome"
          error={errors.name}
          {...register("name")}
        />

        <Input
          label="Email"
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          error={errors.email}
          {...register("email")}
        />

        <InputPassword
          label="Senha"
          id="password"
          placeholder="Digite aqui sua senha"
          error={errors.password}
          {...register("password")}
        />

        <InputPassword
          label="Confirme sua Senha"
          
          placeholder="Confirme sua Senha"
          error={errors.confirmPassword}
          {...register("confirmPassword")}
        />

        <Input
          label="Bio"
          type="bio"
          placeholder="Fale sobre você"
          error={errors.bio}
          {...register("bio")}
        />

        <Input
          label="Contato"
          type="number"
          placeholder="Opção de contato"
          error={errors.contact}
          {...register("contact")}
        />

        <SelectForm
          label="Selecionar modulo"
          type="text"
          id="text"
          placeholder="Selecionar módulo"
          error={errors.course_module}
          {...register("course_module")}
        >
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </SelectForm>
        {console.log(errors)}

        <div>
          <button type="submit" className="btn">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};
