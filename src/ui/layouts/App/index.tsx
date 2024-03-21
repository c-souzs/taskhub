import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Menu from "../../Menu";

const AppLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 275px 1fr;
  min-height: 100vh;
`;

export default function AppLayout() {
  return (
    <AppLayoutContainer>
      <Menu />
      <Outlet />
    </AppLayoutContainer>
  )
}