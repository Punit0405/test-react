import { useState } from "react";
import styles from './Questionnaires.module.css'
import ClientList from "./ClientList";
import AddNewClientModal from "../Modal/AddNewClientModal";
import QuestionnairesList from "./QuestionnairesList";

const Questionnaires: any = () => {

    const [modalShow, setModalShow] = useState(false);
    const [search, setSearch] = useState("");

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
            <AddNewClientModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )

}

export default Questionnaires