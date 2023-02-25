import { FunctionComponent } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Constants from "../../Config/Constants";
import NavLayoutWithSideBar from "../NavLayoutWithSideBar";
import styles from "./PrivacySetting.module.css"

const PrivacySetting: FunctionComponent = () => {
    return (
        <NavLayoutWithSideBar activeTab={Constants.NavbarTabs.GALLARY}>
            <>
                <div className={styles.maincomponent}>
                    <Form>
                        <Form.Label className={styles.sidemaintitle}>Privacy</Form.Label>
                        <div className={styles.formcomp}>
                            <Form.Label className={styles.formlabel}>Collection Password</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder=""
                                    aria-label="Password"
                                    aria-describedby=""
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    Generate
                                </Button>
                            </InputGroup>
                            <Form.Label className={styles.helpbox} muted>
                                Leave blank to make this collection public. Setting a password will require all guests to use this password in order see this collection.
                            </Form.Label>
                        </div>
                    </Form>
                </div>
            </>
        </NavLayoutWithSideBar>
    );
};

export default PrivacySetting;
