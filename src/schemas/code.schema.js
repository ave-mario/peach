import { string, object } from 'yup';
import i18n from 'config/localization';

const validationSchema = object().shape({
  loginCode: string()
    .required(i18n.t('validation:required:code'))
    .matches(/^[0-9]+$/, i18n.t('validation:incorrect:code')),
});

export default validationSchema;
