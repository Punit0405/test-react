import { useState } from "react";
import { Button, Form, Image, InputGroup, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router";
import styles from "./AddQuestionnaires.module.css";
import { STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import EmailModal from "./EmailModal";
import EmailConfirmModal from "./EmailConfirmModal";

function AddQuestionnaires(props: any) {

    const [modalShow, setModalShow] = useState(false);
    const [confirmShow, setConfirmShow] = useState(false);

    function confirmSend() {
        setConfirmShow(true)
        setTimeout(() => {
            setConfirmShow(false)
        }, 3000)
    }

    return (
        <Modal
            fullscreen={true}
            {...props}
        >
            <button className={styles.backdiv} onClick={props.onHide}>
                <i className="fa-solid fa-chevron-left"></i><span>Back</span>
            </button>
            <Modal.Body className={styles.testdiv}>
                <div className={styles.maincomp}>
                    <p className={styles.maintitle}>
                        What kind of questionnaire do you want to send to your client?
                    </p>
                    <p className={styles.subtitle}>
                        Questionnaires allow you to ask your clients more specific and detailed questions about a session they have booked you for.
                    </p>
                    <Table className="mt-4" size="md" responsive="md">
                        <thead><tr><td></td><td></td></tr></thead>
                        <tbody>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableData}>
                                    <div className={styles.tableDiv}>
                                        <Image
                                            className={styles.imgStyle}
                                            alt="customer img"
                                            src={`../../../studio-camera.svg`}
                                        />
                                        Photography Questionnaire
                                    </div>
                                </td>
                                <td className={styles.tableData}>
                                    <div className={styles.tableDiv}>
                                        <i className="fa-regular fa-pen quepen"></i>
                                        <span className={styles.videoname}> Edit Questionnaire</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className={styles.tableRow}>
                                <td className={styles.tableData}>
                                    <div className={styles.tableDiv}>
                                        <Image
                                            className={styles.imgStyle}
                                            alt="customer img"
                                            src={`../../../studio-video.svg`}
                                        />
                                        Videography Questionnaire
                                    </div>
                                </td>
                                <td className={styles.tableData}>
                                    <div className={styles.tableDiv}>
                                        <i className="fa-regular fa-pen quepen"></i>
                                        <span className={styles.videoname}>Edit Questionnaire</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button className={styles.createbtn} onClick={() => setModalShow(true)} size="lg" variant="custom" type="submit">
                        Email Questionnaire
                    </Button>
                </div>
            </Modal.Body>
            <EmailModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                confirm={confirmSend}
            />
            <EmailConfirmModal
                show={confirmShow}
                onHide={() => setConfirmShow(false)}
            />
        </Modal>
    );
}

export default AddQuestionnaires;
