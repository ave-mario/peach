import { string, object } from 'yup';

const validationSchema = object().shape({
  phoneNumber: string()
    .required('Phone number is required')
    .min(13, 'Phone number is incorrect')
    .max(13, 'Phone number is incorrect'),
  email: string()
    .required('Email is required')
    .min(5, 'Enter > 4 characters')
    .max(20, 'Enter < 20 characters')
    .email('The email is incorrect'),
  name: string()
    .required('Name is required')
    .min(2, 'Enter > 1 character')
    .max(9, 'Enter < 9 characters'),
  surname: string()
    .required('Surname is required')
    .min(2, 'Enter > 1 character')
    .max(9, 'Enter < 9 characters'),
});

export default validationSchema;
