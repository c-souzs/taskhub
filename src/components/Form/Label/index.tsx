import { LabelHTMLAttributes } from "react"
import styled from "styled-components";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

const LabelStyled = styled.label`
  font-size: 12px;
  font-weight: 600;

  display: block;
  margin-bottom: 4px;
`;

export default function Label({ ...props }: LabelProps) {
  return <LabelStyled {...props} />
}