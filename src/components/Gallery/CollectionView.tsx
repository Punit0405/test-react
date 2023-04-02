import { FunctionComponent } from "react";
import { Button, Container } from "react-bootstrap";
import styles from "./Collection.module.css";
import CollectionImageView from "./CollectionImage";
import { useState } from 'react';
import { useSelector } from 'react-redux'
import DeleteConfirmation from "../Modal/DeleteConfirmation";
import { NotificationWithIcon } from "../../Utils/helper";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { useNavigate } from "react-router-dom";
import CollectionService from "../../api/Collection/collection";


interface Props {
    collectionData: any,
    refreshFunction:any
}

const CollectionView = ({ collectionData ,refreshFunction }: Props) => {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const myState = useSelector((state: any) => state.changeCollection);
    const photosLength = myState.collection.photos < 9 ? '0' + myState.collection.photos : myState.collection.photos
    const videosLength = myState.collection.videos < 9 ? '0' + myState.collection.videos : myState.collection.videos
    const [count, setCount] = useState(0)
    const [selectAll, setSelectAll] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const setSelection = () => {
        setCount(selectedImages.length)
    }

    const handleSelect = () => {
        const fileArr = collectionData.map((file: any) => file.id);
        setSelectedImages(fileArr);
        setCount(collectionData.length)
    }

    const handleClear = () => {
        setSelectedImages([]);
        setCount(0);
    }

    const handleDeleteFiles = ()=>{
        setModalShow(true);
    }
    const deleteFiles= async()=>{
     try {
        if (myState.collection.id) {
            console.log(myState.collection.id)
            const deleteRes = await CollectionService.deleteCollectionFiles(myState.collection.id, {ids:selectedImages})
            if (deleteRes && deleteRes?.code === STATUS_CODE.SUCCESS) {
                console.log(deleteRes);
                refreshFunction()
                setModalShow(false);
            }
        }
    } catch (err: any) {
        if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
            NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
            navigate('/');
        } else {
            NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
        }
    }
    }

    return (
        <>
            <div className={styles.maincomp}>
                <Container fluid>
                    {
                        count === 0 ?
                            <div className={styles.totalmedia}>
                                <p className={styles.totalcount}>Photos | {photosLength}</p>
                                <p className={styles.totalcount}>Videos | {videosLength}</p>
                            </div> :
                            <div className={styles.selectphotonav}>
                                <div className={styles.totalSelectionDiv}>
                                    <p className={styles.selectCount}>{count} Selected</p>
                                    <p className={styles.selectOption} onClick={handleSelect}>Select all</p>
                                    <p className={styles.selectOption} onClick={handleClear}>Clear Selection</p>
                                </div>
                                <div className={styles.selectbtn}>
                                    <Button variant="custom" className={styles.btnset}><i className="fa-solid selecticon fa-magnifying-glass"></i></Button>
                                    <Button variant="custom" className={styles.btnset}><i className="fa-solid selecticon fa-up-from-bracket"></i></Button>
                                    <Button variant="custom" className={styles.btnset} onClick={handleDeleteFiles}><i className="fa-solid selecticon fa-trash-can"></i></Button>
                                    <Button variant="custom" className={styles.btnset}><i className="fa-solid selecticon fa-ellipsis"></i></Button>
                                    <Button variant="custom" className={styles.btnset}>Sort <i className="fa-solid selecticon fa-arrow-up-arrow-down"></i></Button>
                                </div>
                            </div>
                    }

                    <div className={styles.outermain}>
                        {
                            collectionData && collectionData.length &&
                            collectionData.map((file: any) => (
                                <CollectionImageView isSelect={selectedImages.includes(file?.id as never)} selectedFiles={selectedImages} setSelectedImages={setSelectedImages} setSelect={setSelection} fileId={file?.id} imageUrl={file?.url} key={file?.id} />
                            ))
                        }

                    </div>
                    <DeleteConfirmation
                    show={modalShow}
                    handledeletefiles={deleteFiles as any}
                    modaltext={"Are you sure want to delete selected files ?"}
                    onHide={() => setModalShow(false)}
                    />
                </Container>
            </div>
        </>
    );
};

export default CollectionView;
