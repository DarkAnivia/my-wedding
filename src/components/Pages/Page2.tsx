import React from "react";
import { Page2Wrapper, Page2Container } from "./styled";
import { Text } from "../Text";

export const Page2: React.FC = () => {
  return (
    <Page2Wrapper>
      <Page2Container>
        <Text fontSize="32px" fontWeight="bold" paddingBottom="18px">
          Invitación
        </Text>
        <Text fontSize="32px" paddingBottom="18px">
          3 de Junio de 2023
        </Text>
        <Text fontSize="20px">
          Inicio ceremonia
        </Text>
        <Text fontSize="32px" paddingBottom="20px">
          -13:30-
        </Text>
        <Text fontSize="20px">Pica Pica</Text>
        <Text fontSize="32px" paddingBottom="20px">
          -14:00-
        </Text>
        <Text fontSize="20px">Comida</Text>
        <Text fontSize="32px" paddingBottom="20px">
          -15:00-
        </Text>
        <Text fontSize="20px">Baile</Text>
        <Text fontSize="32px" paddingBottom="20px">
          -17:00-
        </Text>
      </Page2Container>
    </Page2Wrapper>
  );
};
