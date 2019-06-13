import { string, object } from 'yup';

const validationSchema = object().shape({
  phoneNumber: string()
    .required('Phone number is required')
    .min(13, 'Phone number is incorrect')
    .max(13, 'Phone number is incorrect'),
  email: string()
    .required('Email is required')
    .email('The email is incorrect'),
  name: string()
    .required('Name is required')
    .matches(/^[A-Za-z]+$/, 'Only laters, no spaces'),
  surname: string()
    .required('Surname is required')
    .matches(/^[A-Za-z]+$/, 'Only laters, no spaces'),
});

export default validationSchema;
