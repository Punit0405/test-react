import { useState } from "react";
import styles from './Questionnaires.module.css'
import QuestionnairesList from "./QuestionnairesList";
import AddQuestionnaires from "../Modal/AddQuestionnaires";

const Questionnaires: any = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <div className={styles.maindiv}>
            <div className={styles.assetnavbar}>
                <div className={styles.dashboard}>Questionnaires</div>
                <div className={styles.frameParent}>
                    <button className={styles.addNewDevice} onClick={() => setModalShow(true)}>
                        New Questionnaires
                    </button>
                </div>
            </div>
            <QuestionnairesList />
            <AddQuestionnaires
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )

}

export default Questionnaires