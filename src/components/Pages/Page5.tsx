import React from "react";
import { Page3Wrapper, Page2Container } from "./styled";

import { Text } from "../Text";
import Kidd from "../../images/kidd.png";


export const Page5: React.FC = () => {


  return (
    <Page3Wrapper>
      <Page2Container>
      {/* <Form>
        <GoogleFormComponent form={form as GoogleForm}/>
        </Form> */}

        <Text fontSize="32px" fontWeight="bold" paddingBottom="20px" paddingTop="40px" >Contacto</Text>

        <div className="contact">
          <i className="fa fa-file-text"></i>
          <Text fontSize="30px"  paddingBottom="18px">
            <a href="xxxx" target="_blank"> Formulario asistencia </a>
          </Text>
        </div>

        <div className="contact">
          <i className="fa fa-whatsapp"></i>
          <Text fontSize="20px">
          WhatsApp 
            <a target="_blank" href="https://api.whatsapp.com/send?phone=xxxx"> xxxx</a>
          </Text>
          <Text>  // </Text>
          <Text fontSize="20px">
            <a target="_blank" href="https://api.whatsapp.com/send?phone=xxxx"> xxxx</a>
          </Text>
        </div>

        <div className="contact">
          <i className="fa fa-phone"></i>
          <Text fontSize="20px">
            Teléfono
            <a target="_blank" href="tel:xxx"> xxx</a>
          </Text>
          <Text>     //      </Text>
          <Text fontSize="20px">
            <a target="_blank" href="tel:xxx"> xxx</a>
          </Text>
        </div>

        <div className="contact">
          <i className="fa fa-envelope"></i>
          <Text fontSize="20px">
            <a target="_blank" href="mailto:xxx">Correo electrónico</a>
          </Text>
        </div>

        <div className="contact">
          <i className="fa fa-photo"></i>
          <Text fontSize="20px">
            <a target="_blank" href="http://www.wedshoots.com/download?albumId=xxx">Wedshoots</a>
          </Text>
          <p></p>
          <Text fontSize="20px">Código xxx</Text>
        </div>

      </Page2Container>
    </Page3Wrapper>


    
  );
};
