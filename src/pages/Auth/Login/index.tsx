import { useContext } from "react";

import { FormProvider, useForm } from "react-hook-form";
import { Form } from "../../../components/Form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Link } from "react-router-dom";

import ButtonPrimary from "../../../components/Buttons/Primary";
import StructureAuth from "../../../shared/auth";
import { AuthContext } from "../../../contexts/Auth";

const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string()
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const { login: { fnLogin, isPending } } = useContext(AuthContext);

  const loginRegister = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const { handleSubmit } = loginRegister;

  const submitLogin = async (data: LoginForm) => {
    fnLogin(data);
  }

  return (
    <StructureAuth 
      title="Acessar conta."
      description="Você está a um passo de organizar suas tarefas e anotações de forma eficiente."
      formAuth={
        <FormProvider {...loginRegister}>
        <form onSubmit={handleSubmit(submitLogin)}>
          <Form.ContainerInput>
            <Form.Label htmlFor="email"> E-mail </Form.Label>
            <Form.Input type="email" name="email" placeholder="email@gmail.com" required/>
          </Form.ContainerInput>

          <Form.ContainerInput>
            <Form.Label htmlFor="password"> Senha </Form.Label>
            <Form.Input type="password" name="password" placeholder="••••••••"/>
          </Form.ContainerInput>
          
          {/* {
            isError && (<Form.ErrorMessage message={error!.message} />)
          } */}

          <ButtonPrimary
            disabled={isPending}
          >
            {isPending ? "Carregando..." : "Acessar conta"}
          </ButtonPrimary>
        </form>
      </FormProvider>
      }
      footer={
        <>
          <p>Ainda não possui uma conta?</p>
          <Link to="/auth/signup">Criar conta</Link>
        </>
      }
    />
  )
}
