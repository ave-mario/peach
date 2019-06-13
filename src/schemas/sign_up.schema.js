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
    .matches(/^[A-Za-z]+$/, translate('validation:incorrect:name')),
  surname: string()
    .required(translate('validation:required:surname'))
    .matches(/^[A-Za-z]+$/, translate('validation:incorrect:name')),
});

export default validationSchema;
