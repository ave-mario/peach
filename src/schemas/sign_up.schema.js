import { string, object } from 'yup';
import i18n from 'config/localization';

const translate = value => i18n.t(value);

const validationSchema = object().shape({
  phoneNumber: string()
    .required(translate('validation:required:phoneNumber'))
    .min(13, translate('validation:incorrect:phoneNumber'))
    .max(13, translate('validation:incorrect:phoneNumber')),
  email: string()
    .required(translate('validation:incorrect:email'))
    .email(translate('validation:incorrect:email')),
  name: string()
    .required(translate('validation:required:name'))
    .min(2, 'Enter > 1 character')
    .max(9, 'Enter < 9 characters'),
  surname: string()
    .required(translate('validation:required:surname'))
    .min(2, 'Enter > 1 character')
    .max(9, 'Enter < 9 characters'),
});

export default validationSchema;
