import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import styles from "./AddNewSpecialityModal.module.css";
import { Formik } from "formik";
import { addSpecilityValidation } from "../../Utils/validations";
import { STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";

function AddNewSpeciality(props: any) {

    let formInitialValues = {
        name: props?.details?.name ? props?.details?.name : "" as string,
    }

    const [loader, setLoader] = useState<boolean>(false);

    const handleSubmit = async (values: any) => {
        try {
            if (props?.createnew) {
                setLoader(true);
            } else {
                props.updateDevice(values)
            }
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
        >
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
                        <Form className={styles.formdiv} onSubmit={handleSubmit}>
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
                            <Form.Group controlId="formFileLg" className="mb-3">
                                <Form.Label>Select photo</Form.Label>
                                <Form.Control type="file" accept="image/*" required />
                            </Form.Group>
                            <div className={styles.buttondiv}>
                                <Button className={styles.cancelbtn} onClick={props.onHide} variant="custom">Cancel</Button>
                                {
                                    loader ?
                                        <Button className={styles.createbtn} variant="custom" disabled type="submit">Adding...</Button> :
                                        props.createnew ?
                                            <Button className={styles.createbtn} variant="custom" type="submit">Add</Button> :
                                            <Button className={styles.createbtn} variant="custom" type="submit">Save</Button>
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
