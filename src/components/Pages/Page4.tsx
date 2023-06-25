import React from "react";
import { Page3Wrapper, Page2Container } from "./styled";
import Sonic from "../../images/sonic.png";
import Mega from "../../images/mega.png";
import Mario from "../../images/mario.png";
import Kidd from "../../images/kidd.png";
import { Timer } from "../Timer/Timer";
import { Divider } from "../Divider";


export const Page4: React.FC = () => {
  return (
    <Page3Wrapper>
      <Page2Container>
        {/* <Text fontSize="18px" paddingBottom="18px">
          Placeholder.
        </Text> */}

          <div className='timer-up'>    <img src={Sonic} className='timer-image-l'></img>    <img src={Mega} className='timer-image-r'></img></div>
          <Timer deadline="June, 3, 2023, 13:00"></Timer>
          <div className='timer-down'>    <img src={Mario} className='timer-image-l'></img>    <img src={Kidd} className='timer-image-r'></img></div>
          <Divider></Divider>

      </Page2Container>
    </Page3Wrapper>
  );
};
