import * as Yup from "yup";
import * as Constants from "./constants";

const loginValidations = Yup.object().shape({
    email: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.EMAIL_REQUIRED)
        .matches(Constants.EMAIL_REGEX, Constants.VALIDATIONS.INVALID_EMAIL),
    password: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.PASSWORD_REQUIRED),
});

const collectionValidations = Yup.object().shape({
    name: Yup.string().trim().required(Constants.VALIDATIONS.NAME_REQUIRED),
    eventDate: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.DATE_REQUIRED),
});

const assetDeviceValidation = Yup.object().shape({
    type: Yup.string().trim().required(Constants.VALIDATIONS.NAME_REQUIRED),
    nickName: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.DEVICE_NAME_REQUIRED),
    deviceID: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.IMEI_NUMBER_REQUIRED),
    deviceAmount: Yup.number()
        .min(1, "Must be more than 1 ")
        .required(Constants.VALIDATIONS.AMOUNT_REQUIRED),
});

const recordInvoiceValidation = Yup.object().shape({
    status: Yup.string().trim().required(Constants.VALIDATIONS.NAME_REQUIRED),
    currentOutstanding: Yup.number()
        .min(1, "Must be more than 1 ")
        .required(Constants.VALIDATIONS.AMOUNT_REQUIRED),
});

const addClientValidation = Yup.object().shape({
    name: Yup.string().trim().required(Constants.VALIDATIONS.NAME_REQUIRED),
    email: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.DEVICE_NAME_REQUIRED)
        .matches(Constants.EMAIL_REGEX, Constants.VALIDATIONS.INVALID_EMAIL),
    phone: Yup.number()
        .min(1, "phone number must be more than 1 ")
        .required(Constants.VALIDATIONS.AMOUNT_REQUIRED),
});

const addSpecilityValidation = Yup.object().shape({
    name: Yup.string().trim().required(Constants.VALIDATIONS.NAME_REQUIRED),
    profileImg: Yup.mixed().nullable(),
});

const sendQuestionnarieEmail = Yup.object().shape({
    name: Yup.string().trim().required(Constants.VALIDATIONS.NAME_REQUIRED),
    email: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.DEVICE_NAME_REQUIRED)
        .matches(Constants.EMAIL_REGEX, Constants.VALIDATIONS.INVALID_EMAIL),
    subject: Yup.string().trim().required(Constants.VALIDATIONS.NAME_REQUIRED),
    message: Yup.string().trim().required(Constants.VALIDATIONS.NAME_REQUIRED),
});

export {
    loginValidations,
    collectionValidations,
    assetDeviceValidation,
    addClientValidation,
    sendQuestionnarieEmail,
    addSpecilityValidation,
    recordInvoiceValidation,
};
