import { ChangeEventHandler, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import styles from "./AddNewBooking.module.css";
import { Formik } from "formik";
import {
    assetDeviceValidation,
    bookingValidation,
} from "../../Utils/validations";
import AssetRegistryService from "../../api/asset-registry/assetRegistry";
import { STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import StudioClientSevice from "../../api/StudioClient/StudioClient";

function AddNewBooking(props: any) {
    let formInitialValues = {
        clientId: Number(props?.client[0]?.id) || 0,
        title: props?.details?.title
            ? (props?.details?.nickName as string)
            : ("" as string),
        description: props?.details?.deviceID
            ? (props?.details?.deviceID as string)
            : ("" as string),
        startDate: props?.startTime || ("" as string),
        endDate: props?.endTime || ("" as string),
    };

    const [loader, setLoader] = useState<boolean>(false);

    const handleSubmit = async (values: any) => {
        try {
            setLoader(true);
            const res = await StudioClientSevice.addBooking({
                ...values,
                clientId: Number(values?.clientId),
            });
            if (res && res?.code === STATUS_CODE.SUCCESS) {
                await props?.getBooking();
                setLoader(false);
                NotificationWithIcon("success", "Booking Done");
                props.onHide();
            }
        } catch (err: any) {
            setLoader(false);
            NotificationWithIcon(
                "error",
                err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG
            );
        }
    };

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
                    <p className={styles.maintitle}>Add New Booking</p>
                </div>
                <Formik
                    initialValues={formInitialValues}
                    onSubmit={handleSubmit}
                    validationSchema={bookingValidation}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                        <Form
                            className={styles.formdiv}
                            onSubmit={handleSubmit}
                        >
                            <div className={styles.formcomp}>
                                <Form.Label className={styles.formlabel}>
                                    Client
                                </Form.Label>
                                <Form.Select
                                    placeholder="Client"
                                    value={values.clientId}
                                    onChange={handleChange}
                                    name="clientId"
                                    isValid={
                                        touched.clientId && !errors.clientId
                                    }
                                    isInvalid={!!errors.clientId}
                                >
                                    {props?.client.map(
                                        (item: any, index: any) => (
                                            <option
                                                key={index}
                                                value={Number(item.id)}
                                                title={item.name}
                                            >
                                                {item.name}
                                            </option>
                                        )
                                    )}
                                </Form.Select>
                            </div>
                            <div className={styles.formcomp}>
                                <Form.Label className={styles.formlabel}>
                                    Title
                                </Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="input"
                                        value={values.title}
                                        name="title"
                                        placeholder="Title"
                                        onChange={handleChange}
                                        isValid={touched.title && !errors.title}
                                        isInvalid={!!errors.title}
                                    />
                                </InputGroup>
                            </div>
                            <div className={styles.formcomp}>
                                <Form.Label className={styles.formlabel}>
                                    Description
                                </Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="input"
                                        value={values.description}
                                        name="description"
                                        placeholder="Description"
                                        onChange={handleChange}
                                        isValid={
                                            touched.description &&
                                            !errors.description
                                        }
                                        isInvalid={!!errors.description}
                                    />
                                </InputGroup>
                            </div>
                            <div className={styles.formcomp}>
                                <Form.Label className={styles.formlabel}>
                                    Start Date
                                </Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="datetime-local"
                                        value={values.startDate}
                                        name="startDate"
                                        placeholder="Start Date"
                                        onChange={handleChange}
                                        isValid={
                                            touched.startDate &&
                                            !errors.startDate
                                        }
                                        isInvalid={!!errors.startDate}
                                    />
                                </InputGroup>
                            </div>
                            <div className={styles.formcomp}>
                                <Form.Label className={styles.formlabel}>
                                    End Date
                                </Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="datetime-local"
                                        value={values.endDate}
                                        name="endDate"
                                        placeholder="End Date"
                                        onChange={handleChange}
                                        isValid={
                                            touched.endDate && !errors.endDate
                                        }
                                        isInvalid={!!errors.endDate}
                                    />
                                </InputGroup>
                            </div>
                            <div className={styles.buttondiv}>
                                <Button
                                    className={styles.cancelbtn}
                                    onClick={props.onHide}
                                    variant="custom"
                                >
                                    Cancel
                                </Button>
                                {loader ? (
                                    <Button
                                        className={styles.createbtn}
                                        variant="custom"
                                        disabled
                                        type="submit"
                                    >
                                        Adding...
                                    </Button>
                                ) : (
                                    <Button
                                        className={styles.createbtn}
                                        variant="custom"
                                        type="submit"
                                    >
                                        Add
                                    </Button>
                                )}
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

export default AddNewBooking;
