import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Col, Image, Row, Table } from 'react-bootstrap';
import styles from './Client.module.css'

function Media() {
  return (
    <Grid container wrap="nowrap" >
      <Skeleton variant="rectangular" sx={{ marginRight: 10, my: 1, marginBottom: 1, paddingBottom: 1 }} style={{ width: '20vw', height: '25vw' }} />
      <Skeleton variant="rectangular" sx={{ marginRight: 1, my: 1, marginBottom: 1, paddingBottom: 1 }} style={{ width: '20vw', height: '25vw' }} />
    </Grid>
  );
}

const ClientLoader = () => {
  return (
    <div className={styles.maindiv}>
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
                                     </div>
                                 </td>
                                 <td className={styles.tableData}>
                                     <div className={styles.tableDiv}></div>
                                 </td>
                                 <td className={styles.tableData}>
                                     <div className={styles.tableDiv}></div>
                                 </td>
                                 <td className={styles.tableData}>
                                     <div className={styles.tableDiv}>
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
                                 <h6 className={styles.amount}>
                                    <Skeleton variant="rectangular" sx={{ marginRight: 10, my: 1, marginBottom: 1, paddingBottom: 1 }} style={{ width: '50vw', height: '4vw' }} />
                                 </h6>
                             </div>
                             <h6 className={styles.titlemain}>Documents</h6>
                             <div className={styles.upcomingmain1}>
                                 <Skeleton variant="rectangular" sx={{ marginRight: 10, my: 1, marginBottom: 1, paddingBottom: 1 }} style={{ width: '50vw', height: '4vw' }} />
                                 <Skeleton variant="rectangular" sx={{ marginRight: 10, my: 1, marginBottom: 1, paddingBottom: 1 }} style={{ width: '50vw', height: '4vw' }} />
                             </div>
                         </Col>
                         <Col xl={4} lg={4}>
                             <h6 className={styles.titlemain}>Upcoming Sessions</h6>
                             <div className={styles.upcomingmain}>
                             <Skeleton variant="rectangular" sx={{ marginRight: 10, my: 1, marginBottom: 1, paddingBottom: 1 }} style={{ width: '25vw', height: '4vw' }} />
                             <Skeleton variant="rectangular" sx={{ marginRight: 10, my: 1, marginBottom: 1, paddingBottom: 1 }} style={{ width: '25vw', height: '4vw' }} />

                             <Skeleton variant="rectangular" sx={{ marginRight: 10, my: 1, marginBottom: 1, paddingBottom: 1 }} style={{ width: '25vw', height: '4vw' }} />
                             <Skeleton variant="rectangular" sx={{ marginRight: 10, my: 1, marginBottom: 1, paddingBottom: 1 }} style={{ width: '25vw', height: '4vw' }} />

                             </div>
                         </Col>
                     </Row>
        </div>
  );
}

export default ClientLoader