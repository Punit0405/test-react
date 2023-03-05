import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import styles from "./CreateCollectionModal.module.css";

function CreateCollectionModal(props: any) {

    const navigate = useNavigate()
    const createCollection = () => {
        navigate("/gallery/newcollection")
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
                    <p className={styles.maintitle}>Create New Collection</p>
                </div>
                <Form className={styles.formdiv}>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Give your collection a name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>What is the date of the event</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type="date"
                                name="duedate"
                                placeholder="Due date"
                            />
                        </InputGroup>
                    </div>
                    <div className={styles.buttondiv}>
                        <Button className={styles.cancelbtn} onClick={props.onHide} variant="custom">Cancel</Button>
                        <Button className={styles.createbtn} onClick={createCollection} variant="custom">Create</Button>
                    </div>

                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default CreateCollectionModal;
