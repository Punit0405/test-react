import { Image, Ratio, Table } from "react-bootstrap"
import styles from './ClientList.module.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import Moment from "react-moment";

const ClientList: any = ({clientList}:any) => {

    const navigate = useNavigate();

    return (
        <div>
            <Table striped className="mt-4" size="md" responsive="md">
                <thead>
                    <tr className={styles.tableheading}>
                        <td>Client Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Created</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientList && clientList.map((client:any,index:any)=>(
                        <tr className={styles.tableRow} onClick={()=>{navigate("1")}} key={index}>
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
                            <div className={styles.tableDiv}> {client.email}</div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}> {client.phone}</div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>
                            <Moment format="MMMM  Do, YYYY">{client.createdAt}</Moment>
                            </div>
                        </td>
                    </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    )

}

export default ClientList