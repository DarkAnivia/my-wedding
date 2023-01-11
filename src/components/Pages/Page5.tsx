import React from "react";
import { Form, Page3Wrapper, Page2Container } from "./styled";
import { GoogleForm } from 'react-google-forms-hooks'

import form from '../../utils/form.json'
import { GoogleFormComponent } from "../GoogleForm/GoogleFormComponent";

export const Page5: React.FC = () => {


  return (
    <Page3Wrapper>
      <Page2Container>
      {/* <Form>
        <GoogleFormComponent form={form as GoogleForm}/>
        </Form> */}

        blabla bla tenemos un formulario
      </Page2Container>
    </Page3Wrapper>

    //"https://docs.google.com/forms/d/e/1FAIpQLSeIWL0C1PwlOx7jhD19VNirxMjBVAXUDS09b_YZ3bs33bMnXA/viewform"

    
  );
};
