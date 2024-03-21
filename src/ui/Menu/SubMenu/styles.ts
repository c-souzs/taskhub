import styled from "styled-components";

export const SubMenuContainer = styled.div`
  padding: 8px;
  font-size: 14px;

  ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul li span {
    height: 20px;
    width: 20px;
    background-color: var(--color-primary);
    border-radius: 2px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    color: #FFF;
  }

  ul li p {
    opacity: .8;
  }
`;