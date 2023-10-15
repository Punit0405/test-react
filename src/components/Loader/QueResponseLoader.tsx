import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Col, Image, Row, Spinner, Table } from 'react-bootstrap';
import styles from './Client.module.css'

function Media() {
    return (
        <Grid container wrap="nowrap" >
            <Skeleton variant="rectangular" sx={{ marginRight: 10, my: 1, marginBottom: 1, paddingBottom: 1 }} style={{ width: '20vw', height: '25vw' }} />
            <Skeleton variant="rectangular" sx={{ marginRight: 1, my: 1, marginBottom: 1, paddingBottom: 1 }} style={{ width: '20vw', height: '25vw' }} />
        </Grid>
    );
}

const QueResponseLoader = () => {
    return (
        <div className={styles.maindiv}>
            <div className={styles.dashboard}>Clients</div>
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
                            </div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}></div>
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
            <div className={styles.maincomp}>
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column justify-content-center">
                        <Spinner animation="border" style={{ color: "#EC1A25" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QueResponseLoader