import React from 'react'
import { Formik, FieldArray, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './DynamicForm.module.css'

function QuestionnariesResponse({ initialValue }: any) {

    console.log(initialValue, '=====initialValue====');

    const initialValues = initialValue
    const handleSubmit = (value: any) => {
        console.log(value, '----value-----');

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
                                                    disabled
                                                    className={styles.checkboxbtn}
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
                                        type="file"
                                        name={`fields.${index}.file`}
                                        id={`fields.${index}.file`}
                                        placeholder="Enter Question"
                                        disabled
                                        className={styles.filemain}
                                    />
                                    :
                                    <Field
                                        type="text"
                                        readOnly
                                        name={`fields.${index}.response`}
                                        id={`fields.${index}.response`}
                                        placeholder="Enter Question"
                                        disabled
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
            <Formik
                initialValues={initialValues}
                // validationSchema={validationSchema}
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

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default QuestionnariesResponse