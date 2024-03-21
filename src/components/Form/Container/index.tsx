import { HTMLAttributes } from "react"

import styled from "styled-components";

type ContainerInputProps = HTMLAttributes<HTMLDivElement>;

const ConatinerInputStyled = styled.div``;

export default function ContainerInput({ ...props }: ContainerInputProps) {
  return <ConatinerInputStyled {...props} />
}