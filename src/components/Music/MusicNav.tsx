import { FunctionComponent } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./MusicNav.module.css"

const MusicNav: FunctionComponent = () => {
    return (
        <>
            <div className={styles.maincomp}>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="&#61442;"
                        className={styles.mainLoginInput}
                        aria-label="Search"
                    />
                    <Button variant="custom" className={styles.navbtnsort}>
                        <p>Sort By</p>
                        <i className="fa-regular fa-arrow-right-arrow-left"></i>
                    </Button>
                    <Button variant="custom" className={styles.navbtndown}>
                        <p>Downloads</p>
                        <i className="fa-sharp  fa-regular fa-arrow-down-to-line"></i>
                    </Button>
                    <Button variant="custom" className={styles.navbtncollection}>
                        <p>Collections</p>
                        <i className="fa-regular  fa-pen-to-square"></i>
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default MusicNav;
