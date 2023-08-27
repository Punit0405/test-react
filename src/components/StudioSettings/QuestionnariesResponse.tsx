import React from 'react'
import { Formik, FieldArray, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './DynamicForm.module.css'

function QuestionnariesResponse({ initialValue }: any) {

    console.log(initialValue, '=====initialValue====');

    const initialValues = initialValue

    const validationSchema = Yup.object().shape({
        // fields: Yup.array().of(
        //     Yup.object().shape({
        //         type: Yup.string().required('Type is required')
        //         // label: Yup.string().when('type', {
        //         //   is: (val: any) => val === 'radio' || val === 'dropdown',
        //         //   then: Yup.string().required('Label is required'),
        //         // }),

        //     })
        // ),
    });

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
                                    <Field
                                        type="file"
                                        name={`fields.${index}.file`}
                                        id={`fields.${index}.file`}
                                        placeholder="Enter Question"
                                        className={styles.filemain}
                                    />
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
            <Formik
                initialValues={initialValues}
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
                       
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default QuestionnariesResponse