import { Link } from "react-router-dom";

import styled from "styled-components";

import logo from "../../assets/logo.svg";

const ImageStyled = styled.img`
  width: 135px;
  margin: 0 auto;
`;

export default function Logo() {
  return (
    <Link to="/app">
      <ImageStyled src={logo} alt="Taskhub logo"/>
    </Link>
  )
}