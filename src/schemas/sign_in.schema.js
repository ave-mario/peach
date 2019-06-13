import { string, object } from 'yup';
import i18n from 'config/localization';

const translate = value => i18n.t(value);

const validationSchema = object().shape({
  phoneNumber: string()
    .required(translate('validation:required:phoneNumber'))
    .min(13, translate('validation:incorrect:phoneNumber'))
    .max(13, translate('validation:incorrect:phoneNumber')),
});

export default validationSchema;
