import { useState } from "react";
import { Button, Form, InputGroup, Modal, Spinner } from "react-bootstrap";
import styles from "./AddNewSpecialityModal.module.css";
import { Formik, Field } from "formik";
import { addSpecilityValidation } from "../../Utils/validations";
import { STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import { fileUpload } from "../../Utils/helper"
import StudioClientSevice from "../../api/StudioClient/StudioClient"

function AddNewSpeciality(props: any) {

    let formInitialValues = {
        name: props?.special?.name ? props?.special?.name : "" as string,
        imageUrl: props?.special?.imageUrl ? props?.special?.imageUrl : "" as string
    }

    const [loader, setLoader] = useState<boolean>(false);

    const handleSubmit = async (values: any) => {
        try {
            setLoader(true)
            let data: any = {
                name: values?.name,
            }
            if (values?.imageUrl !== formInitialValues?.imageUrl) {
                let ext = values?.imageUrl?.name?.split('.').pop()
                let key = `studio-management/userid/speciality/${Date.now()}.${ext}`
                const s3Key = await fileUpload(values?.imageUrl, key)
                data = { ...data, imageUrl: s3Key }
            }
            if (props?.createnew === "true") {
                const clientRes = await StudioClientSevice.addSpeciality(data);
                if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                    const newData = {
                        id: clientRes?.data?.id,
                        name: clientRes?.data?.name,
                        imageUrl: clientRes?.data?.imageUrl,
                    }
                    props.setcreatespeciality(newData)
                }
            } else {
                const clientRes = await StudioClientSevice.updateSpecialityDetails(props?.special?.id, data);
                if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                    NotificationWithIcon("success", "Client update successfully.")
                    console.log(clientRes.data);
                    props.updatedata(clientRes.data)
                }
            }
        } catch (err: any) {
            setLoader(false);
            NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
        } finally {
            props.onHide()
            setLoader(false)
        }

    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body className={styles.maincomp}>
                <div className={styles.maintitlediv}>
                    <p className={styles.maintitle}>Add New Speciality</p>
                </div>
                <Formik
                    initialValues={formInitialValues}
                    onSubmit={handleSubmit}
                    validationSchema={addSpecilityValidation}>
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                        <Form className={styles.formdiv} onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className={styles.formcomp}>
                                <Form.Label className={styles.formlabel}>Name</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="input"
                                        value={values.name}
                                        name="name"
                                        placeholder="Speciality Name"
                                        onChange={handleChange}
                                        isValid={touched.name && !errors.name}
                                        isInvalid={!!errors.name}
                                    />
                                    {/* <Form.Control.Feedback type="invalid">
                                        <p>{errors.name}</p>
                                    </Form.Control.Feedback> */}
                                </InputGroup>
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Label>Select photo</Form.Label>
                                <br></br>
                                <Field name="imageUrl" >
                                    {({ field, form }: any) => (
                                        <input
                                            className={styles.imageUrl}
                                            type="file"
                                            accept="image/*"
                                            name="imageUrl"
                                            required={false}
                                            onChange={(event) => {
                                                const file = event.currentTarget.files?.[0];
                                                if (file) {
                                                    form.setFieldValue('imageUrl', file);
                                                }
                                            }}
                                        />
                                    )}
                                </Field>
                            </Form.Group>
                            <div className={styles.buttondiv}>
                                <Button className={styles.cancelbtn} onClick={props.onHide} variant="custom">Cancel</Button>
                                {
                                    props.createnew === "true" ? (
                                        loader ?
                                            < Button className={styles.createbtn} variant="custom" disabled type="submit">
                                                <Spinner
                                                    as="span"
                                                    animation="border"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />{'  '}
                                                Creating...
                                            </Button> :
                                            < Button className={styles.createbtn} variant="custom" type="submit">Create</Button>
                                    ) : (
                                        loader ?
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
                                            < Button className={styles.createbtn} variant="custom" type="submit">Save</Button>
                                    )
                                }
                            </div>

                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

export default AddNewSpeciality;
