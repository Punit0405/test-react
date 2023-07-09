import Modal from 'react-bootstrap/Modal';
import styles from './EmailConfirmModal.module.css'

function EmailConfirmModal(props: any) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className={styles.maindiv}>
                <i className="fa-regular fa-check emailcorrect"></i>
                <h4 className={styles.title}>Your questionnaire has been sent!</h4>
                <p className={styles.subtitle}>
                    Your emailed questionnaires can be viewed under ‘Documents’.
                </p>
            </Modal.Body>
        </Modal>
    );
}

export default EmailConfirmModal;