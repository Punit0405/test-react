import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import styles from "./DeleteConfirmation.module.css";

function DeleteConfirmation(props: any) {
    return (
        <Modal
            show={props.show} onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className={styles.maincomp}>
                <div className={styles.maintitlediv}>
                    <p className={styles.maintitle}>{props.modaltext}</p>
                </div>
                <div className={styles.buttondiv}>

                    <Button className={styles.createbtn} onClick={props.handledeletefiles} variant="custom" type="submit">Delete</Button>
                    <Button className={styles.cancelbtn} onClick={props.onHide} variant="custom" type="submit">Cancel</Button>
                </div>

            </Modal.Body>
        </Modal>
    );
}

export default DeleteConfirmation;
