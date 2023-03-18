import * as Yup from "yup";
import * as Constants from "./constants";

const loginValidations = Yup.object().shape({
    email: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.EMAIL_REQUIRED)
        .matches(Constants.EMAIL_REGEX, Constants.VALIDATIONS.INVALID_EMAIL),
    password: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.PASSWORD_REQUIRED)
});

const collectionValidations = Yup.object().shape({
    name: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.NAME_REQUIRED),
    eventDate: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.DATE_REQUIRED)
});

export { loginValidations, collectionValidations }