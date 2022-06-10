import {Link}          from 'react-router-dom'
import * as yup        from 'yup';
import { useForm }     from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState }    from 'react';


import './style.css'

function Form(){

    const [autorizado,setAutorizado] = useState(false)

    const formSchema = yup.object({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório").email("email invalido"),
        password:yup.string().required("Senha obrigatória").min(8, "A senha nao pode ter menos de 8 caracteres"),
        confirmPassword: yup.string().required("Confirmacao de Senha obrigatoria").oneOf([yup.ref('password')], 'Senhas diferentes'),


    });
    

    const { register, handleSubmit,formState:{errors} } = useForm({
        resolver: yupResolver(formSchema),
      });
 

    const onSubmitFunction = (data) => {
       setAutorizado(true)
       console.log("SIM")
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <input type="text"      placeholder='Nome'      {...register("name")}/>
                {errors.name?.message}
                <label>Nome</label>
                <input type="text"      placeholder='Email'     {...register("email")}/>
                {errors.email?.message}
                <label>Email</label>
                <input type="password"  placeholder='Senha'     {...register("password")}/>
                {errors.password?.message}
                <label>Senha</label>
                <input type="password"  placeholder='Confirmar Senha' {...register("confirmPassword")}/>
                {errors.confirmPassword?.message}
                <label>Confirmar Senha</label>
                <input type="submit" value="Cadastrar"  />
            </form>
            {
                autorizado&&
                <Link to={"/:768"}/>

            }
        </div>
    )
}

export default Form