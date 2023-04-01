import { FunctionComponent, useState, useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Constants from "../../Config/Constants";
import { useParams } from "react-router-dom"
import styles from "./DownloadStatus.module.css"
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import CollectionService from "../../api/Collection/collection";
import { NotificationWithIcon } from "../../Utils/helper";
const passwordGeneator = require('secure-random-password');
import { useSelector, useDispatch } from 'react-redux'
import { collectionAction } from "../../redux/actions/collectionAction";

const DownloadStatus: FunctionComponent = () => {

    const { collectionId } = useParams()
    const [formdata, setFormData] = useState(false)
    const myState = useSelector((state: any) => state.changeCollection)
    const dispatch = useDispatch()

    const getCollectionList = async () => {
        try {
            if (collectionId) {
                const res = myState.collection
                if (Object.keys(res).length !== 0) {
                    setFormData(res.download)
                    setPin(res?.downloadPin || "")
                } else {
                    const res = await CollectionService.getCollectionById(collectionId as string)
                    if (res && res?.code === STATUS_CODE.SUCCESS) {
                        dispatch(collectionAction({ collection: res.result }))
                    }
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
    }, [myState])

    const [pin, setPin] = useState("")

    const handleSave = async (event: any) => {
        try {
            if (collectionId) {
                const values = { download: Boolean(Number(event.target.value)) }
                const updateRes = await CollectionService.updateCollection(collectionId, values)
                if (updateRes && updateRes?.code === STATUS_CODE.SUCCESS) {
                    dispatch(collectionAction({ collection: updateRes.result }))
                    NotificationWithIcon("success", "Setting saved.")
                    setFormData(values.download)
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

    const generatePassword = async () => {
        const userPin = passwordGeneator.randomPassword({ length: 4, characters: [passwordGeneator.digits] })
        try {
            if (collectionId) {
                const values = { downloadPin: userPin }
                const updateRes = await CollectionService.updateCollection(collectionId, values)
                if (updateRes && updateRes?.code === STATUS_CODE.SUCCESS) {
                    NotificationWithIcon("success", "Setting saved.")
                    setPin(userPin)
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

    return (
        <>
            <div className={styles.maincomponent}>
                <Form>
                    <Form.Label className={styles.sidemaintitle}>Download Status</Form.Label>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Gallery Download</Form.Label>
                        <Form.Select name="status" onChange={handleSave} value={formdata ? 1 : 0}>
                            <option value={1} >Yes</option>
                            <option value={0}>No</option>
                        </Form.Select>
                        <Form.Label className={styles.helpbox} muted>
                            Turn on to allow your clients to download from this Colection.
                        </Form.Label>
                    </div>
                    <div className={styles.formcomp}>
                        <Form.Label className={styles.formlabel}>Download Pin</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder=""
                                name="pin"
                                value={pin}
                                aria-label="Password"
                                aria-describedby=""
                                disabled
                            />
                            <Button variant="outline-secondary" id="button-addon2" onClick={generatePassword}>
                                Generate
                            </Button>
                        </InputGroup>
                    </div>

                </Form>
            </div>
        </>
    );
};

export default DownloadStatus;
