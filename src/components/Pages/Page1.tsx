import React from "react";
import styled from "styled-components";
import { BattleImg } from "./BattleImg";
import { TitleImg } from "./TitleImg";


const ImgDiv = styled.div`
background: #ffffffa8;
margin-bot:30px
width:100%;
`;


export const Page1: React.FC = () => {
  return (
    <ImgDiv>
    <TitleImg></TitleImg>
   
   <BattleImg></BattleImg>
   </ImgDiv>
  );
};
