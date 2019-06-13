import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import validationSchema from 'schemas/code.schema';
import VerificationForm from './form';

const OneTimePassword = props => (
  <Formik
    validateOnBlur="true"
    validateOnChange="false"
    initialValues={{ loginCode: '' }}
    validationSchema={validationSchema}
    onSubmit={values => {
      const { attemtLogin, phoneNumber } = props;
      attemtLogin(phoneNumber, values.loginCode);
    }}
    render={formikProps => (
      <VerificationForm {...formikProps} close={props.close} />
    )}
  />
);

OneTimePassword.propTypes = {
  attemtLogin: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};

export default OneTimePassword;
