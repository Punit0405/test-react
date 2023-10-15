import { Col, Image, Row, Table } from 'react-bootstrap';
import styles from './ClientQuestionnaries.module.css'
import { Link, useNavigate, useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import StudioClientSevice from "../../api/StudioClient/StudioClient"
import Moment from "react-moment";
import QuestionnariesResponse from './QuestionnariesResponse';
import QueResponseLoader from '../Loader/QueResponseLoader';

const ClientQuestionnaries: any = () => {

    const { questionnariesId } = useParams()
    const navigate = useNavigate();
    const [client, setClient]: any = useState({})
    const [loader, setLoader] = useState(true)
    const [questionnaire, setQuestionnaire] = useState({})
    const [status, setStatus] = useState("AWAITING RESPONSE")
    useEffect(() => {
        getClientDetails()
    }, [])

    const getClientDetails = async () => {
        try {
            const clientRes = await StudioClientSevice.getQuestionnariesDetails(questionnariesId);
            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                setQuestionnaire(clientRes?.result?.data?.questionnarires?.template)
                setStatus(clientRes?.result?.data?.questionnarires?.status)
                setLoader(false);
                setClient(clientRes?.result?.data?.questionnarires?.clientId)
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
        <div className={styles.maindiv}>
            {
                loader === true ?
                    <QueResponseLoader /> :
                    <>
                        <div className={styles.dashboard}>Questionnaries</div>
                        <Table striped className="mt-4" size="md" responsive="md">
                            <thead>
                                <tr className={styles.tableheading}>
                                    <td>Client Name</td>
                                    <td>Email</td>
                                    <td>Phone</td>
                                    <td>Status</td>
                                    <td>Created</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.tableRow}>
                                    <td className={styles.tableData}>
                                        <div className={styles.nameDiv}>
                                            <Image
                                                className={styles.imgStyle}
                                                alt="customer img"
                                                src={client.profileUrl}
                                            />
                                            {client.name}
                                        </div>
                                    </td>
                                    <td className={styles.tableData}>
                                        <div className={styles.tableDiv}>{client.email}</div>
                                    </td>
                                    <td className={styles.tableData}>
                                        <div className={styles.tableDiv}>{client.phone}</div>
                                    </td>
                                    <td className={styles.tableData} >
                                        <div className={styles.tableDiv}>
                                            <div
                                                className={
                                                    status === "AWAITING RESPONSE" ?
                                                        styles.awaitingstatus : styles.completestatus
                                                }
                                            >
                                                {status}
                                            </div>
                                        </div>
                                    </td>
                                    <td className={styles.tableData}>
                                        <div className={styles.tableDiv}>
                                            <Moment format="MMMM  Do, YYYY">{client.createdAt}</Moment>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <h6 className={styles.titlemain}>Questionnaire Details</h6>
                        <QuestionnariesResponse initialValue={questionnaire} />
                    </>
            }


        </div>
    )
}

export default ClientQuestionnaries;