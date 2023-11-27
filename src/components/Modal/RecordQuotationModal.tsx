import { ChangeEventHandler, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import styles from "./RecordInvoiceModal.module.css";
import { Formik } from "formik";
import {
    assetDeviceValidation,
    recordInvoiceValidation,
    recordQuotationValidation,
} from "../../Utils/validations";
import AssetRegistryService from "../../api/asset-registry/assetRegistry";
import { STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import StudioClientSevice from "../../api/StudioClient/StudioClient";

function RecordQuotationModal(props: any) {
    let formInitialValues = {
        status: props?.status ? props?.status : ("" as string),
    };

    const invoiceId = props?.id;

    const [loader, setLoader] = useState<boolean>(false);

    const handleSubmit = async (values: any) => {
        try {
            setLoader(true);
            const clientRes = await StudioClientSevice.updateQuotationDetails(
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
                NotificationWithIcon("success", "Status Changed.");
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
                    <p className={styles.maintitle}>Record Quotation</p>
                </div>
                <Formik
                    initialValues={formInitialValues}
                    onSubmit={handleSubmit}
                    validationSchema={recordQuotationValidation}
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
                                    <option value="Accepted" title="Accepted">
                                        Accepted
                                    </option>
                                    <option value="Cancelled" title="Cancelled">
                                        Cancelled
                                    </option>
                                    <option
                                        value="InProgress"
                                        title="InProgress"
                                    >
                                        In Progress
                                    </option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    <p></p>
                                </Form.Control.Feedback>
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

export default RecordQuotationModal;
