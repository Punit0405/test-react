import { FunctionComponent, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CollectionService from "../../api/Collection/collection";
import { STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import Loader from "../Loader/Loader";
import styles from "./GalleryGrid.module.css";
import GalleryGridCard from "./GalleryGridCard";


const GalleryGrid: FunctionComponent = () => {

    const [loader, setLoader] = useState<boolean>(true);
    const [collection, setCollection] = useState([]);

    const getCollectionList = async () => {
        try {
            const res = await CollectionService.getCollection()
            if (res && res?.code === STATUS_CODE.SUCCESS) {
                setCollection(res?.result)
                setLoader(false);
            }
        } catch (err: any) {
            setLoader(false);
            NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
        }

    }

    useEffect(() => {
        getCollectionList();
    }, [])
    return (
        <>
            {loader && <Loader />}
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
