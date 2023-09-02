import React, { useState } from 'react'
import styles from './QuestionnairesList.module.css'
import { useNavigate } from "react-router-dom";
import { Image, Ratio, Table } from "react-bootstrap"
import Moment from "react-moment";
import DeleteConfirmation from '../Modal/DeleteConfirmation';
import StudioClientSevice from '../../api/StudioClient/StudioClient';
import { MESSAGE, STATUS_CODE, VALIDATIONS } from '../../Utils/constants';
import { NotificationWithIcon } from '../../Utils/helper';

function QuestionnariesTable({ questionnarie, deleteQuestionnaries }: any) {

    const navigate = useNavigate();
    const [modalDelete, setDeleteShow] = useState(false);

    const deleteFiles = async () => {
        try {
            const clientRes = await StudioClientSevice.deleteQuestionnaires(questionnarie?.id);
            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                deleteQuestionnaries(questionnarie?.id)
                setDeleteShow(false)
                NotificationWithIcon("success", "Questionnarie deleted successfully.")
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
                navigate('/');
            } else {
                NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
            }
        }
    }

    return (
        <tr className={styles.tableRow} >
            <td className={styles.tableData} onClick={() => { navigate(String(questionnarie.id)) }}>
                <div className={styles.tableDiv}>
                    {questionnarie.name}
                </div>
            </td>
            <td className={styles.tableData} onClick={() => { navigate(String(questionnarie.id)) }}>
                <div className={styles.nameDiv}>
                    <Image
                        className={styles.imgStyle}
                        alt="customer img"
                        src={questionnarie?.clientId?.profileUrl}
                    />
                    {questionnarie?.clientId?.name}
                </div>
            </td>
            <td className={styles.tableData} onClick={() => { navigate(String(questionnarie.id)) }}>
                <div className={styles.tableDiv}>
                    <Moment format="MMMM  Do, YYYY">{questionnarie.createdAt}</Moment>
                </div>
            </td>
            <td className={styles.tableData} onClick={() => { navigate(String(questionnarie.id)) }}>
                <div className={styles.tableDiv}>
                    <div
                        className={
                            questionnarie.status === "AWAITING RESPONSE" ?
                                styles.awaitingstatus : styles.completestatus
                        }
                    >
                        {questionnarie.status}
                    </div>
                </div>
            </td>
            <td className={styles.tableData} onClick={() => setDeleteShow(true)}>
                <i className="fa-regular fa-trash setcolorgallery"></i>
            </td>
            <DeleteConfirmation
                show={modalDelete}
                handledeletefiles={deleteFiles as any}
                modaltext={"Are you sure you want to delete questionnarie ?"}
                onHide={() => setDeleteShow(false)}
            />
        </tr>
    )
}

export default QuestionnariesTable