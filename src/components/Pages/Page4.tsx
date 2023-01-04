import React from "react";
import { Page3Wrapper, Page2Container } from "./styled";
import { Text } from "../Text";
import { MapChalet } from "./MapChalet";

export const Page4: React.FC = () => {
  return (
    <Page3Wrapper>
      <MapChalet />
      <Page2Container>
        <Text fontSize="18px" paddingBottom="18px">
          Placeholder.
        </Text>

      </Page2Container>
    </Page3Wrapper>
  );
};
