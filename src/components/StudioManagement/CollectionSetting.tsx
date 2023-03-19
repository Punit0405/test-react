import { FunctionComponent, useState, useEffect } from "react";
import { Button, Collapse, Form, InputGroup } from "react-bootstrap";
import styles from "./CollectionSetting.module.css"
import { useParams } from "react-router-dom"
import CollectionService from "../../api/Collection/collection";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";

const CollectionSetting: FunctionComponent = () => {

    const { collectionId } = useParams()

    let initialValue = {
        name: "",
        url: "",
        eventDate: "",
        status: "",
        socialSharing: ""
    }

    const getCollectionList = async () => {
        try {
            if (collectionId) {
                const res = await CollectionService.getCollectionById(collectionId as string)
                if (res && res?.code === STATUS_CODE.SUCCESS) {
                    console.log(res.result, '-----result---------');
                    initialValue.name = res?.result?.name || ""
                    initialValue.url = res?.result?.url || ""
                    initialValue.eventDate = res?.result?.eventDate || ""
                    initialValue.status = res?.result?.status || ""
                    initialValue.socialSharing = res?.result?.socialSharing || ""
                    setFormData({
                        name: res?.result?.name || "",
                        url: res?.result?.url || "",
                        eventDate: res?.result?.eventDate || "",
                        status: res?.result?.status || "",
                        socialSharing: res?.result?.socialSharing || "",
                    })

                    // setCollection(res?.result)
                }
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
            } else {
                NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
            }
        }
    }

    useEffect(() => {
        getCollectionList();
    }, [])

    const [name, setName] = useState(false);
    const [url, setUrl] = useState(false);

    const [formdata, setFormData] = useState(initialValue)

    const handleChange = (event: any) => {
        setFormData({ ...formdata, [event.target.name]: event.target.value })
        if (!name && formdata.name !== initialValue.name) {
            setName(true)
        }
        if (!url && formdata.url !== initialValue.url) {
            setUrl(true)
        }
    }

    const handleCancel = (event: any) => {
        if (event.target.name === "name") {
            setFormData({ ...formdata, name: initialValue.name })
            setName(false)
        }
        else if (event.target.name === "url") {
            setFormData({ ...formdata, url: initialValue.url })
            setUrl(false)
        }
    }

    const handleSave = (event: any) => {
        if (event.target.name === "name") {
            console.log(formdata, '------name--------');
            setName(false)
        }
        else if (event.target.name === "url") {
            console.log(formdata.url, '-------url-------');
            setUrl(false)
        }
        else if (event.target.name === "status") {
            console.log(event.target.value, '-------url-------');
        }
        else if (event.target.name === "eventDate") {
            console.log(event.target.value, '-------url-------');
        }
        else if (event.target.name === "socialSharing") {
            console.log(event.target.value, '-------url-------');
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
                            {
                                name ?
                                    <>
                                        <Button variant="outline-danger" name="name" onClick={handleCancel}>Cancel</Button>
                                        <Button variant="danger" name="name" onClick={handleSave}>Save</Button>
                                    </> : <></>
                            }
                        </InputGroup>
                        <Form.Label className={styles.helpbox} muted>
                            Pick something short and sweet. Imagine choosing a title for a photo album cover.
                        </Form.Label>
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Event Date</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder=""
                            name="eventDate"
                            onChange={handleSave}
                        />
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Collection Url</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                name="url"
                                value={formdata.url}
                                onChange={handleChange}
                            />
                            {
                                url ?
                                    <>
                                        <Button variant="outline-danger" name="url" onClick={handleCancel}>Cancel</Button>
                                        <Button variant="danger" name="url" onClick={handleSave}>Save</Button>
                                    </> : <></>
                            }
                        </InputGroup>
                        <Form.Label className={styles.helpbox} muted>
                            Give your collection a unique url. Your client will be using this URL to access your Collection.
                        </Form.Label>
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Collection Status</Form.Label>
                        <Form.Select name="status" onChange={handleSave}>
                            <option value="PUBLISHED">Publihsed</option>
                            <option value="HIDDEN">Hidden</option>
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
                        <Form.Select name="socialSharing" onChange={handleSave} defaultValue="No">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </Form.Select>
                        <Form.Label className={styles.helpbox} muted>
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
