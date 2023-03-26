import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import styles from "./GetDirectLInk.module.css";

function GetDirectLinkModal(props: any) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className={styles.maincomp}>
                <i className="fa-solid fa-xmark fa-xl cancelModalBtn" onClick={props.onHide}></i>
                <div className={styles.maintitlediv}>
                    <p className={styles.maintitle}>Get Direct Link</p>

                </div>
                <Form className={styles.formdiv}>
                    <div className={styles.formcomp}>
                        <Form.Group className={styles.client} controlId="validationFormik01">
                            <Form.Label className={styles.formlabel}>
                                Url
                            </Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="url"
                                    value={"https://www.snape.app/"}
                                    disabled
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    Copy
                                </Button>
                            </InputGroup>
                            <p className={styles.modalPara}>Share this unique URL for this collection with your client.</p>
                        </Form.Group>
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Group className={styles.client} controlId="validationFormik01">
                            <Form.Label className={styles.formlabel}>
                                Download Pin
                            </Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="download"
                                    value={4563}
                                    disabled
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    Copy
                                </Button>
                            </InputGroup>
                            <p className={styles.modalPara}>Share this 4-digit PIN with your client to allow them to download from the collection. You may turn
                                off this functionality under Download Settings.</p>
                        </Form.Group>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default GetDirectLinkModal;
