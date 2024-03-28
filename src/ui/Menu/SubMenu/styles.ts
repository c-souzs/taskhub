import styled from "styled-components";

export const SubMenu = styled.ul`
  padding: 8px;
  font-size: 14px;

  li a {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    align-items: center;
    color: #000;

    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:hover, &:focus {
      color: var(--color-primary-dark);
    }
  }

  li a.active {
    color: var(--color-primary-dark);
  }

  li a span {
    height: 20px;
    width: 20px;
    background-color: var(--color-primary);
    border-radius: 2px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 14px;
    font-weight: 600;
    color: #FFF;
  }

  li a p {
    opacity: .8;
  }
`;