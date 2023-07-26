import { Col, Image, Row, Table } from 'react-bootstrap';
import styles from './Client.module.css'
import DashboardUpcoming from './DashboardUpcoming';
import ClientDocument from './ClientDocument';
import { Link, useNavigate, useParams ,NavLink} from "react-router-dom";
import { useState,useEffect } from "react";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import StudioClientSevice from "../../api/StudioClient/StudioClient"
import Moment from "react-moment";
import ClientLoader from "../Loader/ClientLoader"

const Client: any = () => {

    const { clientId } = useParams()
    const navigate = useNavigate();
    const[client,setClient]:any=useState({})
    const[loader,setLoader]=useState(true)
    useEffect(()=>{
        getClientDetails()
    },[])

    const getClientDetails=async()=>{
        try {
            const clientRes=await StudioClientSevice.getClientDetails(clientId);
            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                setLoader(false);
                setClient(clientRes?.result)
            }     
        } catch (err:any) {
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
            {
                loader === true ?
                <ClientLoader />:
                <>
                <div className={styles.dashboard}>Clients</div>
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
                                 <td className={styles.tableData}>
                                     <div className={styles.tableDiv}>
                                     <Moment format="MMMM  Do, YYYY">{client.createdAt}</Moment>
                                     </div>
                                 </td>
                             </tr>
                         </tbody>
                     </Table>
                     <Row className={styles.clientpayment}>
                         <Col xl={8} lg={8}>
                             <h6 className={styles.titlemain}>Payments</h6>
                             <div className={styles.upcomingmain}>
                                 <h6 className={styles.datetitle}>Total Received</h6>
                                 <h6 className={styles.amount}>R0.00</h6>
                             </div>
                             <h6 className={styles.titlemain}>Documents</h6>
                             <div className={styles.upcomingmain1}>
                                 <ClientDocument />
                             </div>
                         </Col>
                         <Col xl={4} lg={4}>
                             <h6 className={styles.titlemain}>Upcoming Sessions</h6>
                             <DashboardUpcoming />
                         </Col>
                     </Row>
                </>
            }
            

        </div>
    )
}

export default Client;