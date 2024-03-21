import { ButtonHTMLAttributes, ReactNode } from "react"

import styled from "styled-components";

type ButtonPrimaryProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

const ButtonPrimaryStyled = styled.button`
  background-color: var(--color-primary);

  border: none;
  border-radius: 4px;
  padding: 10px 20px;

  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #FFF;
  font-weight: 600;

  cursor: pointer;
  outline: none;

  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover, &:focus {
    background-color: var(--color-primary-dark);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default function ButtonPrimary({ children, ...props }: ButtonPrimaryProps) {
  return (
    <ButtonPrimaryStyled {...props}>
      { children }
    </ButtonPrimaryStyled>
  )
}