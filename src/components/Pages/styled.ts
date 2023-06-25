import styled from "styled-components";
import { TextStyled } from "../Text/styled";
import { device } from "../../utils";

export const Title = styled(TextStyled)`
  font-family: Rouge Script;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  z-index: 1;
  color: #FFF;

`;

export const Page1Wrapper = styled.div`

  height: 25%;
  justify-content: center;
  align-items: center;
`;

export const Page2Wrapper = styled.div`

  height: 100%;
  align-items: center;

`;

export const Page3Wrapper = styled.div`

  height: 100%;
  justify-content: center;
  align-items: center;

`;

export const Page2Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  background-color: #ffffffa8;

  ${TextStyled} {
    font-family: "Podkova", sans-serif;
  }
`;

export const MapStyled = styled.iframe`
    width: 95%;
    height: 35%;
    margin: 2%
`;

export const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 0;
`