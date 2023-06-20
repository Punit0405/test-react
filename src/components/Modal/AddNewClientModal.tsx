import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import styles from "./CreateCollectionModal.module.css";
import { Formik } from "formik";
import { addClientValidation } from "../../Utils/validations";
import { STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";

function AddNewClientModal(props: any) {

    let formInitialValues = {
        name: "",
        email: "",
        phone: "",
    }

    const [loader, setLoader] = useState<boolean>(false);

    const handleSubmit = async (values: any) => {
        try {

        } catch (err: any) {
            setLoader(false);
            NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
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
            <Modal.Body className={styles.maincomp}>
                <div className={styles.maintitlediv}>
                    <p className={styles.maintitle}>Add New Client</p>
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
                                    <Form.Control.Feedback type="invalid">
                                        <p>{errors.name}</p>
                                    </Form.Control.Feedback>
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
                                    <Form.Control.Feedback type="invalid">
                                        <p>{errors.email}</p>
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </div>
                            <div className={styles.formcomp}>
                                <Form.Label className={styles.formlabel}>Device Amount</Form.Label>
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
                                    <Form.Control.Feedback type="invalid">
                                        <p>{errors.phone}</p>
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </div>
                            <div className={styles.buttondiv}>
                                <Button className={styles.cancelbtn} onClick={props.onHide} variant="custom">Cancel</Button>
                                {
                                    loader ?
                                        <Button className={styles.createbtn} variant="custom" disabled type="submit">Adding...</Button> :
                                        <Button className={styles.createbtn} variant="custom" type="submit">Add</Button>
                                }
                            </div>

                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

export default AddNewClientModal;
