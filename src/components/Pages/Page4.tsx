import React from "react";
import { Page3Wrapper, Page2Container } from "./styled";
import { Text } from "../Text";
import { Timer } from "../Timer/Timer";


export const Page4: React.FC = () => {
  return (
    <Page3Wrapper>
      <Page2Container>
        <Text fontSize="18px" paddingBottom="18px">
          Placeholder.
        </Text>
        <Timer deadline="June, 3, 2023, 13:00"></Timer>

      </Page2Container>
    </Page3Wrapper>
  );
};
