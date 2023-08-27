import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import styles from './FillQuestionnaries.module.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import StudioClientSevice from '../../api/StudioClient/StudioClient';
import { MESSAGE, STATUS_CODE, VALIDATIONS } from '../../Utils/constants';
import { NotificationWithIcon } from '../../Utils/helper';
import TemplateLoader from '../Loader/TemplateLoader';
import { fileUpload } from "../../Utils/helper"

function FillQuestionnaries() {

    const { questionnariesId } = useParams()
    const [loader, setLoader] = useState(true)
    const [questionnaire, setQuestionnaire]: any = useState({})

    useEffect(() => {
        getClientDetails()
    }, [])

    const getClientDetails = async () => {
        try {
            const clientRes = await StudioClientSevice.getClientQuestionnaries(questionnariesId);
            console.log(clientRes, '=====clientRes====');

            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                setQuestionnaire(clientRes?.data?.questionnarires?.template)
                setLoader(false);
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                setLoader(false);
                NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
            } else {
                setLoader(false);
                NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
            }
        }
    }

    const validationSchema = Yup.object().shape({
    });

    const handleSubmit = async (values: any) => {
        try {
            for (let files of values.fields) {
                console.log(files, '----value-----');
                if (files.type === 'file') {
                    let ext = files?.response?.name?.split('.').pop()
                    let key = `studio-management/questionnaries/${questionnariesId}/${Date.now()}.${ext}`
                    console.log(files?.response, '----key-----');
                    const s3Key = await fileUpload(files?.response, key)
                    files.response = s3Key
                }
            }
            console.log(values.fields, '======values.fields====');
        } catch (error) {
            console.log(error, '======error=========');
        }
    }

    const renderFormFields = (values: any) => {
        return values.fields.map((field: any, index: any) => (
            <div key={index} className={styles.optiondiv}>
                {field.type && (
                    <>
                        <label htmlFor={`field.question`}
                            className={styles.labeldiv}>
                            {field.question}
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
                                                    name={`fields.${index}.response.${optionIndex}`}
                                                />
                                                <Field
                                                    type="text"
                                                    className={styles.checkname}
                                                    name={`fields.${index}.options.${optionIndex}`}
                                                    placeholder={`Option${optionIndex}`}
                                                    readOnly
                                                    style={{ border: 'none' }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </> :
                                field.type === 'file' ?
                                    <Field name={`fields.${index}.response`} >
                                        {({ field, form }: any) => (
                                            <input
                                                type="file"
                                                name={`fields.${index}.response`}
                                                id={`fields.${index}.response`}
                                                placeholder="Enter Question"
                                                className={styles.filemain}
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
                                    <Field
                                        type="text"
                                        // readOnly
                                        name={`fields.${index}.response`}
                                        id={`fields.${index}.response`}
                                        placeholder="Enter Question"
                                        className={styles.filemain}
                                    />
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
                    <Formik
                        initialValues={questionnaire}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values }) => (
                            <Form>
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
                                {renderFormFields(values)}
                                <button className={styles.addNewDevice} type="submit">
                                    Submit Response
                                </button>
                            </Form>
                        )}
                    </Formik>
            }
        </div>
    )
}

export default FillQuestionnaries