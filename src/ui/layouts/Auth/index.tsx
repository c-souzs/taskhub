import { Outlet } from "react-router-dom";

import * as S from './styles';

import Logo from "../../../components/Logo";

export default function AuthLayout() {
  return (
    <S.ContainerAuthLayout>
      <Logo />
      <section>
        <Outlet />
      </section>
    </S.ContainerAuthLayout>
  )
}