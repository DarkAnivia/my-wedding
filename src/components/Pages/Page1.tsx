import React from "react";
import styled from "styled-components";
import Image4 from "../../images/prueba.png";
import { Timer } from "./Timer";

const ImgDiv = styled.div`
height:100%
`;

export const Page1: React.FC = () => {
  return (
    //  <label></label>
    <ImgDiv>
   <img src={Image4} height= "100%"></img>
   <Timer deadline="June, 3, 2023, 13:00"></Timer>
   </ImgDiv>
  );
};
