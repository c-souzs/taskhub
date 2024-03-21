import { useContext } from "react";

import { FormProvider, useForm } from "react-hook-form";
import { Form } from "../../../components/Form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Link } from "react-router-dom";

import { postUser } from "../../../service/user";

import { useMutation } from "@tanstack/react-query";

import ButtonPrimary from "../../../components/Buttons/Primary";
import StructureAuth from "../../../shared/auth";
import { AuthContext } from "../../../contexts/Auth";

const signupSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string()
});

type SignUpForm = z.infer<typeof signupSchema>;

export default function Signup() {
  const signupRegister = useForm<SignUpForm>({
    resolver: zodResolver(signupSchema),
  });

  const { handleSubmit } = signupRegister;

  const { login: { fnLogin } } = useContext(AuthContext);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: postUser,
    onSuccess: () => {
      const { email, password } = signupRegister.getValues();

      fnLogin({ email, password });
    }
  })

  const submitSignup = (data: SignUpForm) => {
    mutate(data);
  }

  return (
    <StructureAuth 
      title="Crie sua conta."
      description="Você está a um passo de organizar suas tarefas e anotações de forma eficiente."
      formAuth={
        <FormProvider {...signupRegister}>
        <form onSubmit={handleSubmit(submitSignup)}>
          <Form.ContainerInput>
            <Form.Label htmlFor="email"> E-mail </Form.Label>
            <Form.Input type="email" name="email" placeholder="email@gmail.com" required/>
          </Form.ContainerInput>

          <Form.ContainerInput>
            <Form.Label htmlFor="password"> Senha </Form.Label>
            <Form.Input type="password" name="password" placeholder="••••••••"/>
          </Form.ContainerInput>
          
          {
            isError && (<Form.ErrorMessage message={error.message} />)
          }

          <ButtonPrimary
            disabled={isPending}
          >
            {isPending ? "Criando..." : "Criar agora!"}
          </ButtonPrimary>
        </form>
      </FormProvider>
      }
      footer={
        <>
          <p>Já possui uma conta?</p>
          <Link to="/auth/login">Acessar minha conta</Link>
        </>
      }
    />
  )
}
