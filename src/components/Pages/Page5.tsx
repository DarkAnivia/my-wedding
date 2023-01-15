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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIWL0C1PwlOx7jhD19VNirxMjBVAXUDS09b_YZ3bs33bMnXA/viewform" target="_blank"> Formulario asistencia </a>
          </Text>
        </div>

        <div className="contact">
          <i className="fa fa-whatsapp"></i>
          <Text fontSize="20px">
          WhatsApp 
            <a target="_blank" href="https://api.whatsapp.com/send?phone=34606242894"> Montse</a>
          </Text>
          <Text>  // </Text>
          <Text fontSize="20px">
            <a target="_blank" href="https://api.whatsapp.com/send?phone=34696717059"> Xavi</a>
          </Text>
        </div>

        <div className="contact">
          <i className="fa fa-phone"></i>
          <Text fontSize="20px">
            Teléfono
            <a target="_blank" href="tel:606242894"> Montse</a>
          </Text>
          <Text>     //      </Text>
          <Text fontSize="20px">
            <a target="_blank" href="tel:696717059"> Xavi</a>
          </Text>
        </div>

        <div className="contact">
          <i className="fa fa-envelope"></i>
          <Text fontSize="20px">
            <a target="_blank" href="mailto:xamondebellota@gmail.com">Correo electrónico</a>
          </Text>
        </div>

        <div className="contact">
          <i className="fa fa-photo"></i>
          <Text fontSize="20px">
            <a target="_blank" href="http://www.wedshoots.com/download?albumId=ESb891b3ca">Wedshoots</a>
          </Text>
          <p></p>
          <Text fontSize="20px">Código ESb891b3ca</Text>
        </div>

      </Page2Container>
    </Page3Wrapper>

    //"https://docs.google.com/forms/d/e/1FAIpQLSeIWL0C1PwlOx7jhD19VNirxMjBVAXUDS09b_YZ3bs33bMnXA/viewform"

    
  );
};
