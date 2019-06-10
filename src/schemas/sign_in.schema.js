import { string, object } from 'yup';

const validationSchema = object().shape({
  phoneNumber: string()
    .required('Phone number is required')
    .min(13, 'Phone number is incorrect')
    .max(13, 'Phone number is incorrect'),
});

export default validationSchema;
