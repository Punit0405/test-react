import { Image, Ratio, Table } from "react-bootstrap"
import styles from './QuestionnairesList.module.css'
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

const QuestionnairesList: any = ({ questionnaries }: any) => {

    const navigate = useNavigate();

    return (
        <div>
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
                            <tr className={styles.tableRow} key={index}>
                                <td className={styles.tableData} onClick={() => { navigate(String(questionnarie.id)) }}>
                                    <div className={styles.tableDiv}>
                                        {questionnarie.email}
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
                                <td className={styles.tableData}>
                                    <i className="fa-regular fa-ellipsis setcolorgallery"></i>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )

}

export default QuestionnairesList