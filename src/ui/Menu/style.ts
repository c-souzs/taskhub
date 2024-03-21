import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuContainer = styled.div`
  height: 100%;
  border-right: 1px solid var(--color-bg-medium);

  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  nav {
    margin-top: 36px;
  }
`

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  font-weight: 500;

  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover, &:focus {
    color: var(--color-primary-dark);

    svg {
      fill: var(--color-primary-dark);
    }
  }
`


export const MenuOptions = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  
  li {
    border-radius: 4px;
    overflow: hidden;
    padding: 16px;
  }

  li a {
    padding: 8px;
  }

  li.active {
    background-color: var(--color-bg-medium);

    a {
      color: var(--color-primary-dark);
    }
  }
`