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
  Input,
} from 'shared/modal_form.css';
import ErrorMessage from 'shared/error.css';
import { addResourse } from 'config/localization';
import localization from './localization.sing_up';

addResourse('SignUp', localization);

const SignUpForm = ({
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
        <HeaderLabel>{t('lables.title')}</HeaderLabel>
        <CrossButton onClick={close}>×</CrossButton>
      </Header>
      <Form onSubmit={handleSubmit} className="formBody">
        <p>{t('lables.text')}</p>
        <Input
          placeholder={t('lables.Email')}
          autoComplete="email"
          name="email"
          className="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email && (
          <ErrorMessage className="error">{errors.email}</ErrorMessage>
        )}
        <Input
          placeholder={t('lables.PhoneNumber')}
          name="phoneNumber"
          autoComplete="tel"
          className="phoneNumber"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phoneNumber}
        />
        {touched.phoneNumber && errors.phoneNumber && (
          <ErrorMessage className="error">{errors.phoneNumber}</ErrorMessage>
        )}
        <Input
          placeholder={t('lables.Name')}
          name="name"
          autoComplete="given-name"
          className="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        {touched.name && errors.name && (
          <ErrorMessage className="error">{errors.name}</ErrorMessage>
        )}
        <Input
          placeholder={t('lables.Surname')}
          className="surname"
          name="surname"
          autoComplete="family-name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.surname}
        />
        {touched.surname && errors.surname && (
          <ErrorMessage className="error">{errors.surname}</ErrorMessage>
        )}
      </Form>
      <Footer>
        <Button cancel onClick={close}>
          {t('buttons.Close')}
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
          {t('buttons.Continue')}
        </Button>
      </Footer>
    </Wrapper>
  );
};

SignUpForm.propTypes = {
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

export default withTranslation('SignUp')(SignUpForm);
