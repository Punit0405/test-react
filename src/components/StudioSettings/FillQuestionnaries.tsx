import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import styles from './FillQuestionnaries.module.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import StudioClientSevice from '../../api/StudioClient/StudioClient';
import { MESSAGE, STATUS_CODE, VALIDATIONS } from '../../Utils/constants';
import { NotificationWithIcon } from '../../Utils/helper';
import TemplateLoader from '../Loader/TemplateLoader';
import { fileUpload } from "../../Utils/helper"
import { Button, Form, Spinner } from 'react-bootstrap';

function FillQuestionnaries() {

    const { questionnariesId } = useParams()
    const [loader, setLoader] = useState(true)
    const [questionnaire, setQuestionnaire]: any = useState({})
    const [disabled, setDisabled] = useState(true)
    const [submitLoader, setSubmitLoader] = useState(false)
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        getClientDetails()
    }, [])

    const getClientDetails = async () => {
        try {
            const clientRes = await StudioClientSevice.getClientQuestionnaries(questionnariesId);
            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                const template = clientRes?.data?.questionnarires?.template
                setDisabled(clientRes?.data?.questionnarires?.status === "SUBMITTED" ? true : false)
                setQuestionnaire(template)
                setLoader(false);
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
            } else {
                NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
            }
        }
    }

    const validateValue = (value: any) => {
        let error;
        if (!value) {
            error = 'Required';
        }
        console.log(error, '=======error=======');
        return error;
    }

    const validationSchema = Yup.object().shape({
    });

    const handleSubmit = async (values: any) => {
        try {
            setValidated(true)
            setSubmitLoader(true)
            let allUploadPromise: any = []
            for (let files of values.fields) {
                if (files.type === 'file' && files.response && files.response !== '') {
                    let ext = files?.response?.name?.split('.').pop()
                    let key = `studio-management/questionnaries/${questionnariesId}/${Date.now()}_${allUploadPromise.length}.${ext}`
                    const promiseIns = fileUpload(files?.response, key)
                    allUploadPromise.push(promiseIns)
                    files.response = 'https://snape-buckets.b-cdn.net/' + key
                }
            }
            await Promise.all(allUploadPromise)

            await StudioClientSevice.submitClientQuestionnaries(questionnariesId, values);
            setSubmitLoader(false)
            setDisabled(true)
            NotificationWithIcon("success", "Questionnarie submitted.")
        } catch (err: any) {
            setSubmitLoader(false)
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                setLoader(false);
                NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
            } else {
                setLoader(false);
                NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
            }
        }
    }

    const renderFormFields = (errors: any, touched: any, values: any) => {
        return values.fields.map((field: any, index: any) => (
            <div key={index} className={styles.optiondiv}>
                {field.type && (
                    <>
                        <label htmlFor={`field.question`}
                            className={styles.labeldiv}>
                            {field.question}{field.required ? <span className={styles.requiredlabel}>*</span> : <></>}
                        </label>
                        {
                            field.type === 'checkbox' ?
                                <>
                                    <div>
                                        {field.options.map((option: any, optionIndex: any) => (
                                            <div key={optionIndex}>
                                                <Field
                                                    type="checkbox"
                                                    className={styles.checkboxbtn}
                                                    disabled={disabled}
                                                    name={`fields.${index}.response.${optionIndex}`}
                                                />
                                                <label htmlFor={`field.question`}
                                                    className={styles.checkname}>
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </> :
                                field.type === 'file' ?
                                    <Field
                                        name={`fields.${index}.response`}
                                        validate={field.required ? validateValue : {}}
                                        className={styles.requiredfield}
                                    >
                                        {({ field, form }: any) => (
                                            <input
                                                type="file"
                                                name={`fields.${index}.response`}
                                                id={`fields.${index}.response`}
                                                placeholder="Enter Question"
                                                className={styles.filemain}
                                                disabled={disabled}
                                                onChange={(event: any) => {
                                                    const file = event.currentTarget.files?.[0];
                                                    if (file) {
                                                        form.setFieldValue(`fields.${index}.response`, file);
                                                    }
                                                }}
                                            />
                                        )}
                                    </Field>
                                    :
                                    <>
                                        {/* <Field
                                            type="text"
                                            disabled={disabled}
                                            name={`fields.${index}.response`}
                                            id={`fields.${index}.response`}
                                            placeholder="Enter Question"
                                            className={styles.filemain}
                                            validate={field.required ? validateValue : {}}
                                        /> */}
                                        <Form.Control
                                            type="input"
                                            value={values.name}
                                            name={`fields.${index}.response`}
                                            id={`fields.${index}.response`}
                                            placeholder="Enter Question"
                                            className={styles.filemain}
                                            // validate={field.required ? validateValue : {}}
                                            required={field.required}
                                            isValid={touched?.['fields']?.[index]?.response && !errors?.['fields']?.[index]?.response}
                                            isInvalid={!!errors?.['fields']?.[index]?.response}
                                        />
                                        {
                                            errors?.['fields']?.[index]?.response && touched?.['fields']?.[index]?.response &&
                                            <div className={styles.errmsg}>
                                                {errors['fields'][index].response}
                                            </div>
                                        }
                                    </>
                        }
                    </>
                )}
            </div>
        ))
    }

    return (
        <div className={styles.maincomp}>
            {
                loader ?
                    <TemplateLoader /> :
                    questionnaire ?
                        <Formik
                            initialValues={questionnaire}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                values,
                                touched,
                                isValid,
                                errors,
                            }: any) => (
                                <Form onSubmit={handleSubmit} >
                                    <div className={styles.uperdiv}>
                                    </div>
                                    <div className={styles.maintitle}>
                                        <div className={styles.title}>
                                            Questionnaire
                                        </div>
                                        <label
                                            htmlFor={`description`}
                                            className={styles.textarealabel}
                                        >
                                            {values?.description}
                                        </label>
                                    </div>
                                    {
                                        values.fields.map((field: any, index: any) => (
                                            <div key={index} className={styles.optiondiv}>
                                                {field.type && (
                                                    <>
                                                        <label htmlFor={`field.question`}
                                                            className={styles.labeldiv}>
                                                            {field.question}{field.required ? <span className={styles.requiredlabel}>*</span> : <></>}
                                                        </label>
                                                        {
                                                            field.type === 'checkbox' ?
                                                                <>
                                                                    <div className={styles.optionDiv}>
                                                                        {field.options.map((option: any, optionIndex: any) => (
                                                                            <div key={optionIndex}>
                                                                                <Field
                                                                                    type="checkbox"
                                                                                    className={styles.checkboxbtn}
                                                                                    disabled={disabled}
                                                                                    name={`fields.${index}.response.${optionIndex}`}
                                                                                />
                                                                                <label htmlFor={`field.question`}
                                                                                    className={styles.checkname}>
                                                                                    {option}
                                                                                </label>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </> :
                                                                field.type === 'file' ?
                                                                    <>
                                                                        <Field
                                                                            name={`fields.${index}.response`}
                                                                            // validate={field.required ? validateValue : {}}
                                                                            className={styles.requiredfield}
                                                                        >
                                                                            {({ fieldForm, form }: any) => (
                                                                                <Form.Control
                                                                                    type="file"
                                                                                    required={field.required}
                                                                                    name={`fields.${index}.response`}
                                                                                    id={`fields.${index}.response`}
                                                                                    placeholder="Enter Question"
                                                                                    className={styles.filemain}
                                                                                    onChange={(event: any) => {
                                                                                        const file = event.currentTarget.files?.[0];
                                                                                        if (file) {
                                                                                            form.setFieldValue(`fields.${index}.response`, file);
                                                                                        }
                                                                                    }} />
                                                                            )}
                                                                        </Field>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <Form.Control
                                                                            type="input"
                                                                            name={`fields.${index}.response`}
                                                                            id={`fields.${index}.response`}
                                                                            placeholder="Enter Question"
                                                                            onChange={handleChange}
                                                                            className={styles.filemain}
                                                                            required={field.required}
                                                                            value={field.response}
                                                                        />
                                                                    </>
                                                        }
                                                    </>
                                                )}
                                            </div>
                                        ))
                                    }
                                    {
                                        disabled ? <></> :
                                            submitLoader ?
                                                < Button className={styles.createbtn} variant="custom" disabled type="submit">
                                                    <Spinner
                                                        as="span"
                                                        animation="border"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    />{'  '}
                                                    Saving...
                                                </Button> :
                                                <button className={styles.addNewDevice} type="submit" disabled={disabled}>
                                                    Submit Response
                                                </button>
                                    }
                                </Form>
                            )}
                        </Formik> :
                        <div className={styles.notfound}>
                            Questionnarie not found
                        </div>
            }
        </div >
    )
}

export default FillQuestionnaries