import * as yup from 'yup';

export const courseValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  creator_id: yup.string().nullable(),
  instructor_id: yup.string().nullable(),
});
