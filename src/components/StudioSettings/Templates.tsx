import { useState } from "react";
import styles from './Templates.module.css'
import { Container, Image, Nav, Navbar, Table } from "react-bootstrap";

const activetab = {
    borderTop: '3px solid var(--color-crimson)'
}

const QuestionnairesContent: any = () => {

    return (
        <div className={styles.maincomp}>
            <p className={styles.titlediv}>
                Questionnaires allow you to ask your clients more specific and detailed questions about a session they have booked you for.
            </p>
            <Table className="mt-4" size="md" responsive="md">
                <thead><tr><td></td><td></td></tr></thead>
                <tbody>
                    <tr className={styles.tableRow}>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>
                                <Image
                                    className={styles.imgStyle}
                                    alt="customer img"
                                    src={`../../../studio-camera.svg`}
                                />
                                Photography Questionnaire
                            </div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>
                                <i className="fa-regular fa-pen quepen"></i>
                                <span className={styles.videoname}> Edit Questionnaire</span>
                            </div>
                        </td>
                    </tr>
                    <tr className={styles.tableRow}>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>
                                <Image
                                    className={styles.imgStyle}
                                    alt="customer img"
                                    src={`../../../studio-video.svg`}
                                />
                                Videography Questionnaire
                            </div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>
                                <i className="fa-regular fa-pen quepen"></i>
                                <span className={styles.videoname}>Edit Questionnaire</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )

}

const ContractContent: any = () => {

    return (
        <div className={styles.maincomp}>
            <p className={styles.titlediv}>
                Download a Word version of a contract to edit and send it to your clients to sign.
            </p>
            <Table className="mt-4" size="md" responsive="md">
                <thead><tr><td></td><td></td></tr></thead>
                <tbody>
                    <tr className={styles.tableRow}>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>
                                <Image
                                    className={styles.imgStyle}
                                    alt="customer img"
                                    src={`../../../studio-camera.svg`}
                                />
                                Photography Questionnaire
                            </div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>
                                <i className="fa-solid fa-arrow-down-to-line quepen"></i>
                                <span className={styles.videoname}> Download Contract</span>
                            </div>
                        </td>
                    </tr>
                    <tr className={styles.tableRow}>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>
                                <Image
                                    className={styles.imgStyle}
                                    alt="customer img"
                                    src={`../../../studio-video.svg`}
                                />
                                Videography Questionnaire
                            </div>
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.tableDiv}>
                                <i className="fa-solid fa-arrow-down-to-line quepen"></i>
                                <span className={styles.videoname}>Download Contract</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )

}

const Templates: any = () => {

    const [active, setActive] = useState(1)

    return (
        <div className={styles.maindiv}>
            <div className={styles.assetnavbar}>
                <div className={styles.dashboard}>Templates</div>
            </div>
            <Navbar className={styles.sidenav} variant="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link
                            className={styles.navname}
                            style={active === 1 ? activetab : {}}
                            onClick={() => setActive(1)}
                        >
                            Questionnaires
                        </Nav.Link>
                        <Nav.Link
                            className={styles.navname}
                            style={active === 2 ? activetab : {}}
                            onClick={() => setActive(2)}
                        >
                            Contracts
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {active === 1 && <QuestionnairesContent />}
            {active === 2 && <ContractContent />}
        </div>
    )

}

export default Templates