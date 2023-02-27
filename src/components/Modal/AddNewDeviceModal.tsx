import { ChangeEventHandler, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import styles from "./CreateCollectionModal.module.css";

function AddNewDeviceModal(props: any) {

    const navigate = useNavigate()
    const createCollection = () => {
        navigate("/")
    }
    const [deviceType , setDeviceType] = useState("");
    const deviceTypeOnChange = (e:any) =>{
        setDeviceType(e.target.value);
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
                    <p className={styles.maintitle}>Add New Device</p>
                </div>
                <Form className={styles.formdiv}>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Device Type</Form.Label>
                        <Form.Select placeholder="Device Type" value={deviceType} onChange={deviceTypeOnChange}>
                        <option value="Cell Phone">Cell Phone</option>
                        <option value="Camera">Camera</option>
                        <option value="Screen">Screen</option>
                        <option value="Printer">Printer</option>
                        </Form.Select>
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Device NickName</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type="input"
                                name="devicenickname"
                                placeholder="Device Nick Name"
                            />
                        </InputGroup>
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>IMEI Number</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type="input"
                                name="imeiNumber"
                                placeholder="IMEI Number"
                            />
                        </InputGroup>
                    </div>
                    <div className={styles.buttondiv}>
                        <Button className={styles.cancelbtn} onClick={props.onHide} variant="custom">Cancel</Button>
                        <Button className={styles.createbtn} onClick={createCollection} variant="custom">Add</Button>
                    </div>

                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default AddNewDeviceModal;
