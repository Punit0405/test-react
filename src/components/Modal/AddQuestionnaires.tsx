import { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./AddQuestionnaires.module.css";
import EmailModal from "./EmailModal";
import EmailConfirmModal from "./EmailConfirmModal";
import Questionnaries from "./Components/Questionnaries";
import { ClientSelect } from "./Components/ClientSelect";
import StudioClientSevice from "../../api/StudioClient/StudioClient";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import { useNavigate } from "react-router-dom";

function AddQuestionnaires(props: any) {
    const [modalShow, setModalShow] = useState(false);
    const [confirmShow, setConfirmShow] = useState(false);
    const [questionnariesData, setQuestionnariesData] = useState(null);
    const navigate = useNavigate();

    async function confirmSend(data: any) {
        try {
            const clientRes = await StudioClientSevice.addQuestionnaries(data);
            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                props?.getQuestionnariesList && props?.getQuestionnariesList();
                setConfirmShow(true);
                setTimeout(() => {
                    setConfirmShow(false);
                    props.onHide();
                    setQuestionnariesData(null);
                }, 3000);
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                NotificationWithIcon(
                    "error",
                    MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG
                );
                navigate("/");
            } else {
                NotificationWithIcon(
                    "error",
                    err?.data?.error?.message ||
                        VALIDATIONS.SOMETHING_WENT_WRONG
                );
            }
        }
    }

    function handleBack() {
        if (questionnariesData) {
            setQuestionnariesData(null);
        } else {
            props.onHide();
        }
    }

    return (
        <Modal fullscreen={true} {...props}>
            <button className={styles.backdiv} onClick={handleBack}>
                <i className="fa-solid fa-chevron-left"></i>
                <span>Back</span>
            </button>
            <Modal.Body className={styles.testdiv}>
                {questionnariesData ? (
                    <Questionnaries
                        setModalShow={setModalShow}
                        setQuestionnariesData={setQuestionnariesData}
                        questionnariesData={questionnariesData}
                    />
                ) : (
                    <ClientSelect
                        client={props?.client}
                        setQuestionnariesData={setQuestionnariesData}
                    />
                )}
            </Modal.Body>
            <EmailModal
                questionnariesData={questionnariesData}
                show={modalShow}
                onHide={() => setModalShow(false)}
                confirm={confirmSend}
                setQuestionnariesData={setQuestionnariesData}
            />
            <EmailConfirmModal
                show={confirmShow}
                onHide={() => setConfirmShow(false)}
            />
        </Modal>
    );
}

export default AddQuestionnaires;
