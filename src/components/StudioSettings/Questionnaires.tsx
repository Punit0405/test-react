import { useEffect, useState } from "react";
import styles from './Questionnaires.module.css'
import AddQuestionnaires from "../Modal/AddQuestionnaires";
import { useNavigate } from "react-router-dom";
import StudioClientSevice from "../../api/StudioClient/StudioClient";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import StudioClientLoader from "../Loader/StudioClientLoader";
import { Table } from "react-bootstrap";
import QuestionnariesTable from "./QuestionnariesTable";

const Questionnaires: any = () => {

    useEffect(() => {
        getQuestionnariesList()
    }, [])

    const [modalShow, setModalShow] = useState(false);
    const [questionnaries, setQuestionnaries]: any = useState([]);
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();

    const getQuestionnariesList = async () => {
        try {
            const clientRes = await StudioClientSevice.getQuestionnariesList();
            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                setLoader(false);
                setQuestionnaries(clientRes?.result?.data?.questionnarires)
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                setLoader(false);
                NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
                navigate('/');
            } else {
                setLoader(false);
                NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
            }
        }
    }

    const deleteQuestionnaries = async (id: any) => {
        try {
            const updatedQuestionnaries = questionnaries.filter(
                (questionnarie: any) => questionnarie.id !== id);
            setQuestionnaries(updatedQuestionnaries)
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                setLoader(false);
                NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
                navigate('/');
            } else {
                setLoader(false);
                NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
            }
        }
    }

    return (
        <div className={styles.maindiv}>
            <div className={styles.assetnavbar}>
                <div className={styles.dashboard}>Questionnaires</div>
                <div className={styles.frameParent}>
                    <button className={styles.addNewDevice} onClick={() => setModalShow(true)}>
                        New Questionnaires
                    </button>
                </div>
            </div>
            {
                loader === true ?
                    <StudioClientLoader />
                    :
                    questionnaries && questionnaries.length ?
                        <Table striped className="mt-4" size="md" responsive="md">
                            <thead>
                                <tr className={styles.tableheading}>
                                    <td>Name</td>
                                    <td>Client</td>
                                    <td>Created</td>
                                    <td>Status</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    questionnaries && questionnaries.length &&
                                    questionnaries.map((questionnarie: any, index: any) => (
                                        <QuestionnariesTable questionnarie={questionnarie} key={index} deleteQuestionnaries={deleteQuestionnaries} />
                                    ))
                                }
                            </tbody>
                        </Table>
                        :
                        <div className={styles.noclient}>
                            <div>
                                <h6>No Questionnaries</h6>
                                <p>When you add Questionnaries, Your Questionnaries will be listed here.</p>
                            </div>
                        </div>
            }
            <AddQuestionnaires
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )

}

export default Questionnaires