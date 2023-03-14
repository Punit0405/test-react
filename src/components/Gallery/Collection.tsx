import { FunctionComponent, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import CollectionService from "../../api/Collection/collection";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
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
    const navigate = useNavigate();

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
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                setLoader(false);
                NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
                navigate('/login');
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
