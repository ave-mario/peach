import React from 'react';

import { Button, CrossButton } from '../../shared/buttons.css';
import {
  ModalForm,
  FormHeader,
  FormBody,
  FormFooter,
  FormHeaderText,
  FormInput,
} from '../../shared/modal_form.css';

const SignUp = props => {
  return (
    <ModalForm
      style={{
        transform: props.show ? 'translateY(0vh)' : 'translateY(-100px)',
        opacity: props.show ? '1' : '0',
      }}
    >
      <FormHeader>
        <FormHeaderText>SignUp</FormHeaderText>
        <CrossButton onClick={props.close}>×</CrossButton>
      </FormHeader>
      <FormBody>
        <p>Please, enter your information:</p>
        <FormInput placeholder="email or phone number" />
        <FormInput placeholder="First Name" />
        <FormInput placeholder="Last Name" />
      </FormBody>
      <FormFooter>
        <Button cancel onClick={props.close}>
          CLOSE
        </Button>
        <Button continue>CONTINUE</Button>
      </FormFooter>
    </ModalForm>
  );
};

export default SignUp;
