import { ReactNode } from "react"

import * as S from "./styles";

type StructureAuthProps = {
  title: string;
  description: string;
  formAuth: ReactNode;
  footer: ReactNode;
}

export default function StructureAuth({ title, description, formAuth, footer }: StructureAuthProps) {
  return (
    <div>
      <S.ContainerSignup>
        <div>
          <h1>{ title }</h1>
          <p>{ description }</p>
        </div>

        { formAuth }
      </S.ContainerSignup>

      <S.ContainerLinkToLogin>
        { footer }
      </S.ContainerLinkToLogin>
    </div>
  )
}