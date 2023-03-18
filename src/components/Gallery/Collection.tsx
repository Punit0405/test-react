import { FunctionComponent, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import FilesSevice from "../../api/Files/files";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import SimpleLoader from "../Loader/SimpleLoader";
import AddCollection from "./AddCollection";
import AddPhotosNav from "./AddPhotosNav";
import CollectionView from "./CollectionView";


const Collection: FunctionComponent = () => {

    const { collectionId } = useParams()
    const [loader, setLoader] = useState(true);
    const [files, setFiles]: any = useState([]);
    const navigate = useNavigate();

    const getCollectionList = async () => {
        try {
            if (collectionId) {
                const res = await FilesSevice.getFiles(collectionId)
                if (res && res?.code === STATUS_CODE.SUCCESS) {
                    setLoader(false);
                    setFiles(res?.result)
                }
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
            <Container fluid >
                <AddPhotosNav />
                {
                    files && files?.length ?
                        <CollectionView collectionData={files} /> : <AddCollection />
                }
            </Container>
        </>
    );
};

export default Collection;
