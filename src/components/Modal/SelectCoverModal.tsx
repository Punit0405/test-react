import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "./ChangeCoverModal.module.css";

function SelectCoverModal(props: any) {
    const [fullscreen, setFullscreen]: any = useState(true);
    const [show, setShow] = useState(false);

    return (
        <>
            <Modal  {...props} fullscreen={true}>
                <Modal.Header closeButton>
                    <Modal.Title className={styles.headingtitle}>Change Cover</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default SelectCoverModal;
