import React from "react";
import styled from "styled-components";
import Image4 from "../../images/prueba.png";

const ImgDiv = styled.div`
height:100%
`;

export const Page1: React.FC = () => {
  return (
    //  <label></label>
    <ImgDiv>
   <img src={Image4} height= "100%"></img>
   <label >Prueba</label>
   </ImgDiv>
  );
};
