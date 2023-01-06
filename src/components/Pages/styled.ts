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

  @media ${device.mobileS} {
    font-size: 60px;
  }
`;

export const Page1Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 25%;
  justify-content: center;
  align-items: center;
`;

export const Page2Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  
  @media ${device.mobileS} {
    justify-content: end;
  }
  
  @media ${device.tablet} {
    justify-content: center;
  }
`;

export const Page3Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media ${device.mobileS} {
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    margin: 40px;
  }
`;

export const Page2Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  background-color: #ffffffa8;

  ${TextStyled} {
    font-family: "Podkova", sans-serif;
  }

  @media ${device.mobileS} {
    margin: auto;
    padding: 30px;
  }

  @media ${device.tablet} {
    margin: 100px;
    padding: 100px;
    padding-top: 50px;
    padding-bottom: 100px;
  }

  /* opacity: 0.5; */
`;

export const MapStyled = styled.iframe`
    width: 95vw;
    height: 35vh;
`;

export const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 0;
`