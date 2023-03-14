import { FunctionComponent, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CollectionService from "../../api/Collection/collection";
import { STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import LayoutWithSideBar from "../LayoutWithSideBar";
import SimpleLoader from "../Loader/SimpleLoader";
import AddCollection from "./AddCollection";
import AddPhotosNav from "./AddPhotosNav";
import CollectionView from "./CollectionView";


const Collection: FunctionComponent = () => {

    const { collectionId } = useParams()
    const [loader, setLoader] = useState(true);
    const [collection, setCollection]: any = useState([]);

    const getCollectionList = async () => {
        try {
            if (collectionId) {
                const res = await CollectionService.getCollectionById(collectionId as string)
                if (res && res?.code === STATUS_CODE.SUCCESS) {
                    setLoader(false);
                    setCollection(res?.result)
                }
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
        <LayoutWithSideBar>
            <>
                {loader && <SimpleLoader />}
                <Container fluid >
                    <AddPhotosNav />
                    {
                        collection && collection?.photos && collection?.videos ?
                            <CollectionView /> : <AddCollection />
                    }
                </Container>
            </>
        </LayoutWithSideBar>
    );
};

export default Collection;
