import { useFormContext } from "react-hook-form";
import styled from "styled-components"

type ErrorMessageProps = {
  message?: string
  field?: string
}

const MessageErrorStyled = styled.p`
  font-size: 14px;
  color: #dc2626;
`;

function getMessageByField(obj: Record<any, any>, path: string) {
  const toArray = path.split(' ').reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj)
  return toArray
}

export default function ErrorMessage({ message, field }: ErrorMessageProps) {
  let messageShow = "";

  const { formState: { errors } } = useFormContext()
  
  if(field) {
    const fieldError = getMessageByField(errors, field);
    messageShow = fieldError?.message?.toString();
  }

  messageShow = message || "";

  return (
    <MessageErrorStyled>
      { messageShow }
    </MessageErrorStyled>
  )
}