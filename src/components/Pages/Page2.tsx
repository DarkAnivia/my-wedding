import React from "react";
import { Page2Wrapper, Page2Container } from "./styled";
import { Text } from "../Text";
import { Divider } from "../Divider";

export const Page2: React.FC = () => {
  return (
    <Page2Wrapper>
      <Page2Container>
        <Divider></Divider>

        <Text fontSize="32px" fontWeight="bold" paddingBottom="18px" paddingTop="40px">
          Agenda
        </Text>
        <Text fontSize="20px">Inicio Ceremonia</Text>
        <Text fontSize="32px" paddingBottom="20px">
          -13:00-
        </Text>
        <Text fontSize="20px">Aperitivo y Comida</Text>
        <Text fontSize="32px" paddingBottom="20px">
          -15:00-
        </Text>
        <Text fontSize="20px">Baile</Text>
        <Text fontSize="32px" paddingBottom="20px">
          -17:00-
        </Text>
        <Text fontSize="20px">Recena</Text>
        <Text fontSize="32px" paddingBottom="20px">
        -20:00-
        </Text>
        <Text fontSize="20px">Fin de fiesta</Text>
        <Text fontSize="32px" paddingBottom="40px">
          -21:00-
        </Text>
      </Page2Container>
    </Page2Wrapper>
  );
};
