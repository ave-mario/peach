import React from 'react';
import PropTypes from 'prop-types';
import { Button, CrossButton } from '../../shared/buttons.css';
import {
  ModalForm,
  FormHeader,
  FormBody,
  FormFooter,
  FormHeaderText,
  FormInput,
} from '../../shared/modal_form.css';

const SignIn = props => {
  const { show } = props;
  const { close } = props;

  return (
    <ModalForm
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100px)',
        opacity: show ? '1' : '0',
      }}
    >
      <FormHeader>
        <FormHeaderText>Login</FormHeaderText>
        <CrossButton onClick={close}>×</CrossButton>
      </FormHeader>
      <FormBody>
        <p>Please, enter your phone number:</p>
        <FormInput placeholder="email or phone number" />
      </FormBody>
      <FormFooter>
        <Button cancel onClick={close}>
          CLOSE
        </Button>
        <Button continue>CONTINUE</Button>
      </FormFooter>
    </ModalForm>
  );
};

SignIn.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.objectOf.isRequired,
};
export default SignIn;
