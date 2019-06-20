import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Button, CrossButton } from 'shared/buttons.css';
import {
  Wrapper,
  Header,
  Form,
  Footer,
  HeaderLabel,
} from 'shared/modal_form.css';
import {
  Wrapper as InputWrapper,
  Label,
  Border,
  Input,
} from 'shared/input.css';
import { addResourse } from 'config/localization';
import localization from './localization.sign_in';

addResourse('SignIn', localization);

const SignInForm = ({
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  values,
  dirty,
  touched,
  close,
  t,
}) => {
  return (
    <Wrapper>
      <Header>
        <HeaderLabel>{t('lables.Login')}</HeaderLabel>
        <CrossButton onClick={close}>×</CrossButton>
      </Header>
      <Form onSubmit={handleSubmit} className="formBody">
        <p>{t('lables.LoginEnterPhone')}</p>
        <InputWrapper>
          <Input
            type="text"
            required
            name="phoneNumber"
            className="phoneNumber"
            autoComplete="tel"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phoneNumber}
          />
          <Border></Border>
          <Label>
            {errors.phoneNumber && touched.phoneNumber
              ? errors.phoneNumber
              : 'Phone Number'}
          </Label>
        </InputWrapper>
      </Form>
      <Footer>
        <Button
          continue
          onClick={handleSubmit}
          type="submit"
          disabled={!dirty || errors.phoneNumber}
        >
          {t('buttons.Continue')}
        </Button>
      </Footer>
    </Wrapper>
  );
};

SignInForm.propTypes = {
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  dirty: PropTypes.bool.isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  close: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('SignIn')(SignInForm);
