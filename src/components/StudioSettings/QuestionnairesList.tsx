import { Image, Ratio, Table } from "react-bootstrap"
import styles from './QuestionnairesList.module.css'

const QuestionnairesList: any = () => {

    return (
        <div>
            <Table striped className="mt-4" size="md" responsive="md">
                <thead>
                    <tr className={styles.tableheading}>
                        <td>Name</td>
                        <td>Client</td>
                        <td>Created</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.tableRow}>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>sample@gmail.com</div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.nameDiv}>
                                <Image
                                    className={styles.imgStyle}
                                    alt="customer img"
                                    src={`../../../sample2.jpg`}
                                />
                                Sample Client
                            </div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>6 March 2023</div>
                        </td>

                        <td className={styles.tableData}>
                            <i className="fa-regular fa-ellipsis setcolorgallery"></i>
                        </td>

                    </tr>
                    <tr className={styles.tableRow}>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>sample@gmail.com</div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.nameDiv}>
                                <Image
                                    className={styles.imgStyle}
                                    alt="customer img"
                                    src={`../../../special2.png`}
                                />
                                Sample Client
                            </div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>6 March 2023</div>
                        </td>
                        <td className={styles.tableData}>
                            <i className="fa-regular fa-ellipsis setcolorgallery"></i>
                        </td>

                    </tr>
                </tbody>
            </Table>
        </div>
    )

}

export default QuestionnairesList