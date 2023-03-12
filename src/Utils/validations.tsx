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

export { loginValidations }