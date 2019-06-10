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

const SignUpForm = ({
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  values,
  dirty,
  close,
}) => {
  return (
    <ModalForm>
      <FormHeader>
        <FormHeaderText>SignUp</FormHeaderText>
        <CrossButton onClick={close}>×</CrossButton>
      </FormHeader>
      <FormBody onSubmit={handleSubmit} className="formBody">
        <p>Please, enter your information:</p>
        <FormInput
          placeholder="Email"
          autoComplete="email"
          name="email"
          className="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && (
          <ErrorMessage className="error">{errors.email}</ErrorMessage>
        )}
        <FormInput
          placeholder="Phone number"
          name="phoneNumber"
          autoComplete="tel"
          className="phoneNumber"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phoneNumber}
        />
        {errors.phoneNumber && (
          <ErrorMessage className="error">{errors.phoneNumber}</ErrorMessage>
        )}
        <FormInput
          placeholder="First Name"
          name="name"
          autoComplete="given-name"
          className="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        {errors.name && (
          <ErrorMessage className="error">{errors.name}</ErrorMessage>
        )}
        <FormInput
          placeholder="Last Name"
          className="surname"
          name="surname"
          autoComplete="family-name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.surname}
        />
        {errors.surname && (
          <ErrorMessage className="error">{errors.surname}</ErrorMessage>
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
          disabled={
            !dirty ||
            errors.phoneNumber ||
            errors.email ||
            errors.name ||
            errors.surname
          }
        >
          CONTINUE
        </Button>
      </FormFooter>
    </ModalForm>
  );
};

SignUpForm.propTypes = {
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  dirty: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default SignUpForm;
