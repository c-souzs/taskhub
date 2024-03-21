import styled from "styled-components";

export const ContainerSignup = styled.section`
  margin-top: 24px;
  border-radius: 4px;
  padding: 16px 24px;
  background-color: var(--color-bg-light);

  h1 {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    
    margin-bottom: 4px;
  }

  & div > p {
    text-align: center;
    max-width: 400px;
    margin-bottom: 24px;
    opacity: .8;
  }

  form {
    margin: 12px 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  form button {
    margin-top: 8px;
  }
`
export const ContainerLinkToLogin = styled.div`
  font-size: 14px;

  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    opacity: .8;
  }

  a {
    color: var(--color-primary);
  
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  
    &:hover, &:focus {
      color: var(--color-primary-dark);
    }
  }
`;