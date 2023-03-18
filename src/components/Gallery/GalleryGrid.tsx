import { FunctionComponent, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CollectionService from "../../api/Collection/collection";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import Loader from "../Loader/Loader";
import SimpleLoader from "../Loader/SimpleLoader";
import styles from "./GalleryGrid.module.css";
import GalleryGridCard from "./GalleryGridCard";


const GalleryGrid: FunctionComponent = () => {

    const [loader, setLoader] = useState<boolean>(true);
    const [collection, setCollection] = useState([]);
    const navigate = useNavigate();

    const getCollectionList = async () => {
        try {
            const res = await CollectionService.getCollection()
            if (res && res?.code === STATUS_CODE.SUCCESS) {
                setCollection(res?.result)
                setLoader(false);
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                setLoader(false);
                NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
                navigate('/');
            } else {
                setLoader(false);
                NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
            }
        }

    }

    useEffect(() => {
        getCollectionList();
    }, [])
    return (
        <>
            {loader && <SimpleLoader />}
            <div className={styles.collectioncount}>
                <p className={styles.collectioncountdis}>
                    6 collections
                </p>
            </div>
            <Row className={styles.maincomp}>
                {
                    collection && collection.map((singleCollection: any) => (
                        <GalleryGridCard collectionData={singleCollection} key={singleCollection?.id} />
                    ))
                }

            </Row>
        </>
    );
};

export default GalleryGrid;
