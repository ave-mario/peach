import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import validationSchema from '../../schemas/sign_up.schema';
import SignUpForm from './form';

const SignUp = props => (
  <Formik
    validateOnBlur="true"
    validateOnChange="false"
    initialValues={{ phoneNumber: '', email: '', name: '', surname: '' }}
    validationSchema={validationSchema}
    render={formikProps => <SignUpForm {...formikProps} close={props.close} />}
    onSubmit={values => {
      const { attemtToSignUp } = props;
      attemtToSignUp(
        values.email,
        values.phoneNumber,
        values.name,
        values.surname,
      );
    }}
  />
);

SignUp.propTypes = {
  attemtToSignUp: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default SignUp;
