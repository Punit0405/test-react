import { ChangeEventHandler, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import styles from "./RecordInvoiceModal.module.css";
import { Formik } from "formik";
import {
    assetDeviceValidation,
    recordInvoiceValidation,
} from "../../Utils/validations";
import AssetRegistryService from "../../api/asset-registry/assetRegistry";
import { STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import StudioClientSevice from "../../api/StudioClient/StudioClient";

function RecordInvoiceModal(props: any) {
    let formInitialValues = {
        status: props?.status ? props?.status : ("" as string),
        currentOutstanding: props?.currentOutstanding
            ? (props?.currentOutstanding as number)
            : 0,
    };

    const invoiceId = props?.id;

    const [loader, setLoader] = useState<boolean>(false);

    const handleSubmit = async (values: any) => {
        try {
            setLoader(true);
            const clientRes = await StudioClientSevice.updateInvoiceDetails(
                invoiceId,
                {
                    ...values,
                    sendMail: false,
                }
            );
            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                setLoader(false);
                props?.setAllInvoicesList(clientRes?.data);
                props?.onHide();
                NotificationWithIcon("success", "Changes successfully done.");
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
        >
            <Modal.Body className={styles.maincomp}>
                <div className={styles.maintitlediv}>
                    <p className={styles.maintitle}>Record Invoice</p>
                </div>
                <Formik
                    initialValues={formInitialValues}
                    onSubmit={handleSubmit}
                    validationSchema={recordInvoiceValidation}
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
                                <Form.Select
                                    placeholder="Status"
                                    value={values.status}
                                    onChange={handleChange}
                                    name="status"
                                    isValid={touched.status && !errors.status}
                                    isInvalid={!!errors.status}
                                >
                                    <option value="Draft" title="Draft">
                                        Draft
                                    </option>
                                    <option value="Paid" title="Paid">
                                        Paid
                                    </option>
                                    <option
                                        value="Outstanding"
                                        title="Outstanding"
                                    >
                                        Outstanding
                                    </option>
                                    <option value="PastDue" title="PastDue">
                                        PastDue
                                    </option>
                                    <option value="Cancelled" title="Cancelled">
                                        Cancelled
                                    </option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    <p></p>
                                </Form.Control.Feedback>
                            </div>
                            {values.status === "Outstanding" && (
                                <div className={styles.formcomp}>
                                    <Form.Label className={styles.formlabel}>
                                        OutStanding Amount
                                    </Form.Label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            type="input"
                                            value={values.currentOutstanding}
                                            name="currentOutstanding"
                                            placeholder="Amount"
                                            onChange={handleChange}
                                            isValid={
                                                touched.currentOutstanding &&
                                                !errors.currentOutstanding
                                            }
                                            isInvalid={
                                                !!errors.currentOutstanding
                                            }
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            <p>{errors.currentOutstanding}</p>
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </div>
                            )}

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
                                        Saving...
                                    </Button>
                                ) : (
                                    <Button
                                        className={styles.createbtn}
                                        variant="custom"
                                        type="submit"
                                    >
                                        Save
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

export default RecordInvoiceModal;
