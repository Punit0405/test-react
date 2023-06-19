import { useState } from "react";
import styles from './ClientDashboard.module.css'
import { Button } from "react-bootstrap";
import ClientList from "./ClientList";

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
                    <Button className={styles.addNewDevice}>
                        New Client
                    </Button>
                </div>
            </div>
            <ClientList />
        </div>
    )

}

export default ClientDashboard