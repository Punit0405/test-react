import { useNavigate } from "react-router-dom";
import styles from "../AddQuestionnaires.module.css";
import { Button, Form, Image, InputGroup, Modal, Table } from "react-bootstrap";

function Questionnaries({
    setModalShow,
    setQuestionnariesData,
    questionnariesData,
}: any) {
    const navigate = useNavigate();
    function handleSelect(type: any) {
        setQuestionnariesData({
            ...questionnariesData,
            name: type,
            type: type,
        });
    }

    return (
        <div>
            {" "}
            <div className={styles.maincomp}>
                <p className={styles.maintitle}>
                    What kind of questionnaire do you want to send to your
                    client?
                </p>
                <p className={styles.subtitle}>
                    Questionnaires allow you to ask your clients more specific
                    and detailed questions about a session they have booked you
                    for.
                </p>
                <Table className="mt-4" size="md" responsive="md">
                    <thead>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles.tableRow}>
                            <td
                                className={styles.tableData}
                                onClick={() => handleSelect("Photography")}
                            >
                                <div className={styles.tableDiv}>
                                    <Image
                                        className={styles.imgStyle}
                                        alt="customer img"
                                        src={`../../../studio-camera.svg`}
                                    />
                                    Photography Questionnaire
                                </div>
                            </td>
                            <td
                                className={styles.tableData}
                                onClick={() =>
                                    navigate(
                                        "/studiomanagement/templates/edit-template?type=Photography"
                                    )
                                }
                            >
                                <div className={styles.tableDiv}>
                                    <i className="fa-regular fa-pen quepen"></i>
                                    <span className={styles.videoname}>
                                        {" "}
                                        Edit Questionnaire
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr className={styles.tableRow}>
                            <td
                                className={styles.tableData}
                                onClick={() => handleSelect("Videography")}
                            >
                                <div className={styles.tableDiv}>
                                    <Image
                                        className={styles.imgStyle}
                                        alt="customer img"
                                        src={`../../../studio-video.svg`}
                                    />
                                    Videography Questionnaire
                                </div>
                            </td>
                            <td
                                className={styles.tableData}
                                onClick={() =>
                                    navigate(
                                        "/studiomanagement/templates/edit-template?type=Videography"
                                    )
                                }
                            >
                                <div className={styles.tableDiv}>
                                    <i className="fa-regular fa-pen quepen"></i>
                                    <span className={styles.videoname}>
                                        Edit Questionnaire
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                {questionnariesData?.type ? (
                    <Button
                        className={styles.createbtn}
                        onClick={() => setModalShow(true)}
                        size="lg"
                        variant="custom"
                        type="submit"
                    >
                        Email Questionnaire
                    </Button>
                ) : (
                    <Button
                        disabled
                        className={styles.createbtn}
                        onClick={() => setModalShow(true)}
                        size="lg"
                        variant="custom"
                        type="submit"
                    >
                        Email Questionnaire
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Questionnaries;
