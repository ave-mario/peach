import { string, object } from 'yup';

const validationSchema = object().shape({
  loginCode: string()
    .required('Please, enter the code')
    .matches(/^[0-9]+$/, 'Only numbers avaliable'),
});

export default validationSchema;
