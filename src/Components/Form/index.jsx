import { Redirect } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

import "./style.css";

function Form() {
  const [autorizado, setAutorizado] = useState(false);
  const [name, setName] = useState();

  const formSchema = yup.object({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("email invalido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "A senha nao pode ter menos de 8 caracteres"),
    confirmPassword: yup
      .string()
      .required("Confirmacao de Senha obrigatoria")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    setAutorizado(true);
    setName(data.name);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Cadastrar</h2>
        
        <TextField
          required
          id="outlined-required"
          label="Nome"
          defaultValue=""
          className="inputs"
          {...register("name")}
        />
        {errors.name?.message}

        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          className="inputs"
          {...register("email")}
        />
        {errors.email?.message}

        <TextField
          required
          id="outlined-required"
          label="Senha"
          defaultValue=""
          type="password"
          className="inputs"
          {...register("password")}
        />
        {errors.password?.message}

        <TextField
          required
          id="outlined-required"
          label="Confirmar Senha"
          defaultValue=""
          type="password"
          className="inputs"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message}

        <Button className="btn" type="submit">Cadastrar</Button>
      </form>
      {autorizado && <Redirect to={"/sucess/:" + name} />}
    </div>
  );
}

export default Form;