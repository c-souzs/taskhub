import { InputHTMLAttributes } from "react"

import { useFormContext } from "react-hook-form"

import styled from "styled-components"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
}

const InputStyled = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 10px;

  outline: none;
  border: 1px solid #000;
  border-radius: 2px;

  &:hover, &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 1px 1px var(--color-primary-dark);
  }
`;

export default function Input({ name, ...props }: InputProps) {

  const { register } = useFormContext();

  return (
    <InputStyled  
      id={name}
      {...register(name)}
      {...props}
    />
  )
}