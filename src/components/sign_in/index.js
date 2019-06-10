import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import validationSchema from '../../schemas/sign_in.schema';
import SignInForm from './form';

const SignIn = props => (
  <Formik
    validateOnBlur="true"
    validateOnChange="false"
    initialValues={{ phoneNumber: '' }}
    validationSchema={validationSchema}
    onSubmit={values => {
      // TODO: redo loginCode after implementing at API
      const loginCode = '123456';
      const { attemtLogin } = props;
      attemtLogin(values.phoneNumber, loginCode);
    }}
    render={formikProps => <SignInForm {...formikProps} close={props.close} />}
  />
);

SignIn.propTypes = {
  attemtLogin: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default SignIn;
