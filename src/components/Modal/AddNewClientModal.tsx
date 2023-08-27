import { useState } from "react";
import { Button, Form, InputGroup, Modal, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router";
import styles from "./CreateCollectionModal.module.css";
import { Formik, Field } from "formik";
import { addClientValidation } from "../../Utils/validations";
import { STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import { fileUpload } from "../../Utils/helper"
import StudioClientSevice from "../../api/StudioClient/StudioClient"

function AddNewClientModal(props: any) {

    let formInitialValues = {
        name: props?.client?.name || "",
        email: props?.client?.email || "",
        phone: props?.client?.phone || "",
        profileImg: props?.client?.profileUrl || ""
    }

    const [loader, setLoader] = useState<boolean>(false);

    const handleSubmit = async (values: any) => {
        try {
            setLoader(true)
            let data: any = {
                name: values?.name,
                email: values?.email,
                phone: String(values?.phone),
            }
            console.log(values?.profileImg,'----values?.profileImg----');
            
            if (values?.profileImg !== formInitialValues?.profileImg) {
                let ext = values?.profileImg?.name?.split('.').pop()
                let key = `studio-management/userid/client-profile/${Date.now()}.${ext}`
                const s3Key = await fileUpload(values?.profileImg, key)
                data = { ...data, profileUrl: s3Key }
            }
            if (props.createnew === "true") {
                const clientRes = await StudioClientSevice.addClient(data);
                if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                    console.log(clientRes?.result)
                    const newData = {
                        name: clientRes?.result?.name,
                        email: clientRes?.result?.email,
                        phone: clientRes?.result?.phone,
                        profileUrl: clientRes?.result?.profileUrl,
                        createdAt: clientRes?.result?.createdAt
                    }
                    props.setcreateclient(newData)
                }
            } else {
                const clientRes = await StudioClientSevice.updateClientDetails(props?.client?.id, data);
                if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                    NotificationWithIcon("success", "Client update successfully.")
                    props.updatedata(data)
                }
            }
        } catch (err: any) {
            NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
        } finally {
            props.onHide()
            setLoader(false)
        }

    }

    return (
        <Modal
            size="lg"
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName="addNewDeviceModal"
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body className={styles.maincompclient}>
                <div className={styles.maintitlediv}>
                    {
                        props.createnew === "true" ?
                            <p className={styles.maintitle}>Add New Client</p> :
                            <p className={styles.maintitle}>Edit Client</p>
                    }
                </div>
                <Formik
                    initialValues={formInitialValues}
                    onSubmit={handleSubmit}
                    validationSchema={addClientValidation}>
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                        <Form className={styles.formdiv} onSubmit={handleSubmit}>
                            <div className={styles.formcomp}>
                                <Form.Label className={styles.formlabel}>Client Name</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="input"
                                        value={values.name}
                                        name="name"
                                        placeholder="Client Name"
                                        onChange={handleChange}
                                        isValid={touched.name && !errors.name}
                                        isInvalid={!!errors.name}
                                    />
                                    {/* <Form.Control.Feedback type="invalid">
                                        <p>{errors.name}</p>
                                    </Form.Control.Feedback> */}
                                </InputGroup>
                            </div>
                            <div className={styles.formcomp}>
                                <Form.Label className={styles.formlabel}>Email</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="input"
                                        value={values.email}
                                        name="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                        isValid={touched.email && !errors.email}
                                        isInvalid={!!errors.email}
                                    />
                                    {/* <Form.Control.Feedback type="invalid">
                                        <p>{errors.email}</p>
                                    </Form.Control.Feedback> */}
                                </InputGroup>
                            </div>
                            <div className={styles.formcomp}>
                                <Form.Label className={styles.formlabel}>Phone Number</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="number"
                                        value={values.phone}
                                        name="phone"
                                        placeholder="Phone Number"
                                        onChange={handleChange}
                                        isValid={touched.phone && !errors.phone}
                                        isInvalid={!!errors.phone}
                                    />
                                    {/* <Form.Control.Feedback type="invalid">
                                        <p>{errors.phone}</p>
                                    </Form.Control.Feedback> */}
                                </InputGroup>
                                <Form.Group className="mb-3">
                                    <Form.Label>Select photo</Form.Label>
                                    <br></br>
                                    <Field name="profileImg" >
                                        {({ field, form }: any) => (
                                            <input
                                                className={styles.profileImg}
                                                type="file"
                                                accept="image/*"
                                                name="profileImg"
                                                required={false}
                                                onChange={(event) => {
                                                    const file = event.currentTarget.files?.[0];
                                                    if (file) {
                                                        form.setFieldValue('profileImg', file);
                                                    }
                                                }}
                                            />
                                        )}
                                    </Field>
                                </Form.Group>
                            </div>
                            <div className={styles.buttondiv}>
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
                                <Button className={styles.cancelbtn} onClick={props.onHide} variant="custom">Cancel</Button>
                            </div>

                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

export default AddNewClientModal;
