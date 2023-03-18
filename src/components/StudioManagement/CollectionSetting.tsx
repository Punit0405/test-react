import { FunctionComponent, useState } from "react";
import { Button, Collapse, Form, InputGroup } from "react-bootstrap";
import styles from "./CollectionSetting.module.css"

const CollectionSetting: FunctionComponent = () => {

    const [name, setName] = useState(false);

    const [formdata, setFormData] = useState({
        name: ""
    })

    const initialValue = {
        name: ""
    }

    const handleChange = (event: any) => {
        setFormData({ ...formdata, [event.target.name]: [event.target.value] })
        if (formdata.name !== initialValue.name) {
            console.log("----inside---------");
            setName(false)
        }
    }

    return (
        <>
            <div className={styles.maincomponent}>
                <Form>
                    <Form.Label className={styles.sidemaintitle}>Collection Settings</Form.Label>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Collection Name</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formdata.name}
                                onChange={handleChange}
                            />
                            <Collapse in={name} dimension="width">
                                <>
                                    <Button variant="outline-secondary">Cancel</Button>
                                    <Button variant="outline-secondary">Save</Button>
                                </>
                            </Collapse>
                        </InputGroup>
                        <Form.Label className={styles.helpbox} muted>
                            Pick something short and sweet. Imagine choosing a title for a photo album cover.
                        </Form.Label>
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Event Date</Form.Label>
                        <Form.Control type="date" placeholder="" />
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Collection Url</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        <Form.Label className={styles.helpbox} muted>
                            Give your collection a unique url. Your client will be using this URL to access your Collection.
                        </Form.Label>
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Collection Status</Form.Label>
                        <Form.Select>
                            <option>Publihsed</option>
                            <option>Hidden</option>
                        </Form.Select>
                        <Form.Label className={styles.helpbox} muted>
                            Collections with Preview status can only be seen by you. Publish your collection to make it publicly accessible.
                        </Form.Label>
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Collection Tags</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        <Form.Label className={styles.helpbox} muted>
                            What kind of collection is this? Separate your tags with a comma. e.g. wedding, outdoor, summer.
                        </Form.Label>
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Social Sharing Buttons</Form.Label>
                        <Form.Select>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Select>                        <Form.Label className={styles.helpbox} muted>
                            Snape gives your clients the ability to share your work everywhere.
                            Your work will be seen by as many as possible along with your brand.
                        </Form.Label>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default CollectionSetting;
