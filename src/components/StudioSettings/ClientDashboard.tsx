import { useState } from "react";
import styles from './ClientDashboard.module.css'
import ClientList from "./ClientList";
import AddNewClientModal from "../Modal/AddNewClientModal";

const ClientDashboard: any = () => {
 
    const [modalShow, setModalShow] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <div className={styles.maindiv}>
            <div className={styles.assetnavbar}>
                <div className={styles.dashboard}>Clients</div>
                <div className={styles.frameParent}>
                    <input
                        className={styles.frameChild}
                        type="text"
                        placeholder="Search Client or Email"
                        value={search}
                    // onChange={handleSearchValue}
                    />
                    <button className={styles.addNewDevice} onClick={() => setModalShow(true)}>
                        New Client
                    </button>
                </div>
            </div>
            <ClientList />
            <AddNewClientModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )

}

export default ClientDashboard