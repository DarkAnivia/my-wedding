import React from "react";
import { Page3Wrapper, Page2Container, MapStyled } from "./styled";
import Entrada from "../../images/entrada.png";
import Pica from "../../images/picapica.jpg";
import { Text } from "../Text";
import { Divider } from "../Divider";


export const Page3: React.FC = () => {
  return (
    <Page3Wrapper>
      <Page2Container>
      <Divider></Divider>
      <Text fontSize="32px" fontWeight="bold" paddingBottom="18px" paddingTop="40px">
          Ubicación
        </Text>
      <Text fontSize="18px" paddingBottom="18px">
           Hotel Rey Don Jaime
        </Text>
        <Text fontSize="16px" paddingBottom="3px">
        Avinguda de l'Hotel, 22
        </Text>
        <Text fontSize="16px" paddingBottom="18px">
        08860 Castelldefels, Barcelona
        </Text>
        <img className="hotel-image" src={Entrada}></img>
        <Divider></Divider>
        <MapStyled
        title ="maps"
          src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.7629537437842!2d1.959668415724459!3d41.27049691119572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4829b7646e45d%3A0x8d152959c81572f3!2sGran%20Hotel%20Rey%20Don%20Jaime!5e0!3m2!1ses!2ses!4v1672313933145!5m2!1ses!2ses"
        ></MapStyled>
        <Divider></Divider>
        <img className="hotel-image" src={Pica}></img>
        <Divider></Divider>
      </Page2Container>
    </Page3Wrapper>
  );
};
