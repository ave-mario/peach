import React from 'react';
import PropTypes from 'prop-types';
import { Button, CrossButton } from 'shared/buttons.css';
import {
  ModalForm,
  FormHeader,
  FormBody,
  FormFooter,
  FormHeaderText,
  FormInput,
} from 'shared/modal_form.css';
import ErrorMessage from 'shared/error.css';

const SignInForm = ({
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  values,
  dirty,
  isSubmitting,
  close,
}) => {
  return (
    <ModalForm>
      <FormHeader>
        <FormHeaderText>Login</FormHeaderText>
        <CrossButton onClick={close}>×</CrossButton>
      </FormHeader>
      <FormBody onSubmit={handleSubmit} className="formBody">
        <p>Please, enter your phone number:</p>
        <FormInput
          placeholder="email or phone number"
          name="phoneNumber"
          className="phoneNumber"
          autoComplete="tel"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phoneNumber}
        />
        {errors.phoneNumber && (
          <ErrorMessage>{errors.phoneNumber}</ErrorMessage>
        )}
      </FormBody>
      <FormFooter>
        <Button cancel onClick={close}>
          CLOSE
        </Button>
        <Button
          continue
          onClick={handleSubmit}
          type="submit"
          disabled={!dirty || isSubmitting || errors.phoneNumber}
        >
          CONTINUE
        </Button>
      </FormFooter>
    </ModalForm>
  );
};

SignInForm.propTypes = {
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  dirty: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default SignInForm;
