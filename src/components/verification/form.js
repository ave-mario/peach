import React from 'react';
import PropTypes from 'prop-types';
import { Button, CrossButton } from 'shared/buttons.css';
import {
  Wrapper,
  Header,
  Form,
  Footer,
  HeaderLabel,
  Input,
} from 'shared/modal_form.css';
import ErrorMessage from 'shared/error.css';
import ResendCodeLink from 'shared/links.css';

const VerificationForm = ({
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  values,
  dirty,
  touched,
  close,
  attemtGetCode,
  phoneNumber,
}) => {
  function handleClickResend(e) {
    e.preventDefault();
    attemtGetCode(phoneNumber);
  }

  return (
    <Wrapper>
      <Header>
        <HeaderLabel>Verify yourself</HeaderLabel>
        <CrossButton onClick={close}>×</CrossButton>
      </Header>
      <Form onSubmit={handleSubmit} className="formBody">
        <p>Please, enter the code. We send it to you via email</p>
        <Input
          code
          name="loginCode"
          maxLength="6"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.loginCode}
        />
        {touched.loginCode && errors.loginCode && (
          <ErrorMessage>{errors.loginCode}</ErrorMessage>
        )}
      </Form>
      <ResendCodeLink onClick={handleClickResend}>
        send code again
      </ResendCodeLink>
      <Footer>
        <Button cancel onClick={close}>
          CLOSE
        </Button>
        <Button
          continue
          type="submit"
          onClick={handleSubmit}
          disabled={!dirty || errors.loginCode}
        >
          PROCEED
        </Button>
      </Footer>
    </Wrapper>
  );
};

VerificationForm.propTypes = {
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  dirty: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  attemtGetCode: PropTypes.func.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};

export default VerificationForm;
