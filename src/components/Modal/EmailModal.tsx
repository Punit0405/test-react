import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import styles from "./EmailModal.module.css";
import { Formik } from "formik";
import { sendQuestionnarieEmail } from "../../Utils/validations";
import { STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";

function EmailModal(props: any) {

    let formInitialValues = {
        name: props?.details?.type ? props?.details?.type : "" as string,
        email: props?.details?.nickName ? props?.details?.nickName as string : "" as string,
        subject: props?.details?.deviceID ? props?.details?.deviceID as string : "" as string,
        message: props?.details?.deviceAmount ? props?.details?.deviceAmount as string : "" as string
    }

    const [loader, setLoader] = useState<boolean>(false);

    const handleSubmit = async (values: any) => {
        try {
            props?.onHide()
            props?.confirm()
        } catch (err: any) {
            setLoader(false);
            NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
        }

    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName="addNewDeviceModal"
        >
            <Modal.Body className={styles.maincomp}>
                <div className={styles.maintitlediv}>
                    <p className={styles.maintitle}>Email Questionnaire</p>
                </div>
                <Formik
                    initialValues={formInitialValues}
                    onSubmit={handleSubmit}
                    validationSchema={sendQuestionnarieEmail}>
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
                                <Form.Label className={styles.formlabel}>Document</Form.Label>
                                <Form.Control
                                    type="input"
                                    value={values.name}
                                    name="name"
                                    placeholder="Document Name"
                                    onChange={handleChange}
                                    isValid={touched.name && !errors.name}
                                    isInvalid={!!errors.name}
                                />
                                {/* <Form.Control.Feedback type="invalid">
                                    <p>{errors.nickName}</p>
                                </Form.Control.Feedback> */}
                            </div>
                            <div className={styles.formcomp}>
                                <Form.Label className={styles.formlabel}>Email to</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="input"
                                        value={values.email}
                                        name="email"
                                        placeholder="Email to"
                                        onChange={handleChange}
                                        isValid={touched.email && !errors.email}
                                        isInvalid={!!errors.email}
                                    />
                                    {/* <Form.Control.Feedback type="invalid">
                                        <p>{errors.nickName}</p>
                                    </Form.Control.Feedback> */}
                                </InputGroup>
                            </div>
                            <div className={styles.formcomp}>
                                <Form.Label className={styles.formlabel}>Subject</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="input"
                                        value={values.subject}
                                        name="subject"
                                        placeholder="Subject"
                                        onChange={handleChange}
                                        isValid={touched.subject && !errors.subject}
                                        isInvalid={!!errors.subject}
                                    />
                                    {/* <Form.Control.Feedback type="invalid">
                                        <p>{errors.deviceID}</p>
                                    </Form.Control.Feedback> */}
                                </InputGroup>
                            </div>
                            <div className={styles.formcomp}>
                                <Form.Label className={styles.formlabel}>Message</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={values.message}
                                        name="message"
                                        placeholder="type a message"
                                        onChange={handleChange}
                                        isValid={touched.message && !errors.message}
                                        isInvalid={!!errors.message}
                                    />
                                    {/* <Form.Control.Feedback type="invalid">
                                        <p>{errors.deviceAmount}</p>
                                    </Form.Control.Feedback> */}
                                </InputGroup>
                            </div>
                            <div className={styles.buttondiv}>
                                {
                                    loader ?
                                        <Button className={styles.createbtn} variant="custom" disabled type="submit">Sending...</Button> :
                                        <Button className={styles.createbtn} variant="custom" type="submit">Send Email</Button>
                                }
                            </div>

                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

export default EmailModal;
