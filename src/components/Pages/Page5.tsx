import React from "react";
import { Form, Page3Wrapper, Page2Container } from "./styled";
import { GoogleForm } from 'react-google-forms-hooks'
import { Text } from "../Text";

import form from '../../utils/form.json'
import { GoogleFormComponent } from "../GoogleForm/GoogleFormComponent";

export const Page5: React.FC = () => {


  return (
    <Page3Wrapper>
      <Page2Container>
      {/* <Form>
        <GoogleFormComponent form={form as GoogleForm}/>
        </Form> */}

        <Text fontSize="26px" paddingBottom="18px">Se pueden reservar habitaciones en el propio hotel por un precio de unos 120€ aproximadamente (descuento por boda)</Text>
        <Text fontSize="26px" paddingBottom="18px">Rellenad el siguente  
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIWL0C1PwlOx7jhD19VNirxMjBVAXUDS09b_YZ3bs33bMnXA/viewform" target="_blank"> formulario </a> para confirmar asistencia 
       </Text>
       <Text fontSize="26px" paddingBottom="18px">Contacto</Text>
       <Text fontSize="26px" paddingBottom="18px"><a target="_blank" href="https://api.whatsapp.com/send?phone=34606242894">Montse</a></Text>

      </Page2Container>
    </Page3Wrapper>

    //"https://docs.google.com/forms/d/e/1FAIpQLSeIWL0C1PwlOx7jhD19VNirxMjBVAXUDS09b_YZ3bs33bMnXA/viewform"

    
  );
};
