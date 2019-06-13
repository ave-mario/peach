import React from 'react';
import { withTranslation } from 'react-i18next';
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
  isSubmitting,
  close,
  t,
}) => {
  return (
    <ModalForm>
      <FormHeader>
        <FormHeaderText>{t('lables.Login')}</FormHeaderText>
        <CrossButton onClick={close}>×</CrossButton>
      </FormHeader>
      <FormBody onSubmit={handleSubmit} className="formBody">
        <p>{t('lables.LoginEnterPhone')}</p>
        <FormInput
          placeholder={t('lables.EnterEmailOrPhone')}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phoneNumber}
          name="phoneNumber"
          className="phoneNumber"
        />
        {errors.phoneNumber && (
          <ErrorMessage>{errors.phoneNumber}</ErrorMessage>
        )}
      </FormBody>
      <FormFooter>
        <Button cancel onClick={close}>
          {t('buttons.Close')}
        </Button>
        <Button
          continue
          onClick={handleSubmit}
          type="submit"
          disabled={!dirty || isSubmitting || errors.phoneNumber}
        >
          {t('buttons.Continue')}
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
  t: PropTypes.func.isRequired,
};

export default withTranslation('SignIn')(SignInForm);
