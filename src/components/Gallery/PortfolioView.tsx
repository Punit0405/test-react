import { useEffect } from "react";
import { Button, Container, Dropdown, DropdownButton } from "react-bootstrap";
import styles from "./Collection.module.css";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import DeleteConfirmation from "../Modal/DeleteConfirmation";PortfolioImageView
import { NotificationWithIcon } from "../../Utils/helper";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { useNavigate, useParams } from "react-router-dom";
import PortfolioService from "../../api/Portfolio/portfolio";
import ImageGallery from 'react-image-gallery';
import { portfolioAction } from "../../redux/actions/portfolioAction";
import { saveAs } from 'file-saver'
import FileRenameModal from "../Modal/FileRenameModal";
import { storageAction } from "../../redux/actions/dashboardAction";
import PortfolioImageView from "./PortfolioImageView";
import PortFolioFilesSevice from "../../api/Portfoliofiles/files";
interface Props {
    portfolioData: any,
    refreshFunction: any
}

const PortfolioView = ({ portfolioData, refreshFunction }: Props) => {
    const dispatch = useDispatch()
    const { portfolioId } = useParams()
    const navigate = useNavigate();
    const myState = useSelector((state: any) => state.changePortfolio);
    const photosLength = myState.portfolio.photos < 9 ? '0' + myState.portfolio.photos : myState.portfolio.photos
    const videosLength = myState.portfolio.videos < 9 ? '0' + myState.portfolio.videos : myState.portfolio.videos
    const [count, setCount] = useState(0);
    const [galleryPhotos, setGalleryPhotos] = useState<any>([]);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [allFileName, setAllFilesName] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const setSelection = () => {
        setCount(selectedImages.length)
    }

    useEffect(() => {
        getFileNames()
    }, [])

    const handleSelect = () => {
        const fileArr = portfolioData.map((file: any) => file.id);
        setSelectedImages(fileArr);
        setCount(portfolioData.length)
    }

    const handleClear = () => {
        setSelectedImages([]);
        setCount(0);
    }
    const blurFunc = () => {
        setIsViewOpen(false)
    }

    const handleDeleteFiles = () => {
        setModalShow(true);
    }
    const showPhotos = () => {
        console.log("dsffafa")
        const photosData = [];
        for (const photo of selectedImages) {
            const arr = portfolioData.filter((image: any) => image.id === photo);
            photosData.push(arr[0]);
        }
        setGalleryPhotos(photosData);
        setIsViewOpen(true);
    }
    const deleteFiles = async () => {
        try {
            if (myState.portfolio.id) {
                const deleteRes = await PortfolioService.deletePortfolioFiles(myState?.portfolio?.id, { ids: selectedImages })
                if (deleteRes && deleteRes?.code === STATUS_CODE.SUCCESS) {
                    dispatch(storageAction({ storage: deleteRes?.result }))
                    refreshFunction()
                    setSelectedImages([])
                    setCount(0)
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
    const handleChange = (value: any) => {

    }

    

    async function getFileNames() {
        try {
            if (portfolioId) {
                const fileRes = await PortFolioFilesSevice.getFileName(portfolioId)
                if (fileRes && fileRes?.code === STATUS_CODE.SUCCESS) {
                    setAllFilesName(fileRes.result)
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


    const getDetailsFromId = async (portfolioId: any) => {
        const [fullData] = portfolioData.filter((image: any) => image.id === portfolioId);
        return fullData
    }

    const handleDownload = async () => {
        try {
            if (selectedImages && selectedImages.length) {
                const fullData = await getDetailsFromId(selectedImages[0])
                saveAs(fullData?.url, fullData?.name)
                setSelectedImages([])
                setCount(0)
            }
        } catch (error) {
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
                                    <Button variant="custom" className={styles.btnset} onClick={showPhotos}> <i className="fa-solid selecticon fa-magnifying-glass"></i></Button>
                                    <Button variant="custom" className={styles.btnset} onClick={handleDeleteFiles}><i className="fa-solid selecticon fa-trash-can"></i></Button>
                                    <DropdownButton
                                        id="dropdown-basic-button"
                                        className={styles.dropbtnset}
                                        title={<i className="fa-solid selecticon fa-ellipsis"></i>}
                                        variant="custom"
                                    >
                                        <Dropdown.Item className={styles.dropitem}
                                            disabled={count > 1 ? true : false}
                                            onClick={() => handleDownload()}>
                                            <i className="fa-solid navselecticon fa-download"></i> Download
                                        </Dropdown.Item>
                                    </DropdownButton>
                                    <DropdownButton
                                        id="dropdown-basic-button"
                                        className={styles.dropbtnset}
                                        title={<i className="fa-solid selecticon fa-arrow-up-arrow-down"></i>}
                                        variant="custom"
                                    >
                                        <Dropdown.Item className={styles.navmain}>Sort by</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item className={styles.dropitem}
                                            onClick={() => handleChange("?sort=name&order=ASC")}>Name: A - Z</Dropdown.Item>
                                        <Dropdown.Item className={styles.dropitem}
                                            onClick={() => handleChange("?sort=name&order=DESC")}>Name: Z - A</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </div>
                    }

                    <div className={styles.collectionoutermain}>
                        {
                            portfolioData && portfolioData.length &&
                            portfolioData.map((file: any) => (
                                <PortfolioImageView isSelect={selectedImages.includes(file?.id as never)} selectedFiles={selectedImages} setSelectedImages={setSelectedImages} setSelect={setSelection} fileId={file?.id} imageUrl={file?.url} key={file?.id} />
                            ))
                        }

                    </div>
                    <DeleteConfirmation
                        show={modalShow}
                        handledeletefiles={deleteFiles as any}
                        modaltext={"Are you sure want to delete selected files ?"}
                        onHide={() => setModalShow(false)}
                    />
                    <div className={styles.imageGalleryDiv} onBlur={blurFunc} style={{ display: isViewOpen ? "block" : "none" }}>
                        <i className="fa-sharp fa-regular fa-circle-xmark fa-2xl cancelImageBtn" onClick={blurFunc} style={{ cursor: "pointer" }}></i>
                        <div className={styles.imageGalleyPadding}>
                            <ImageGallery items={galleryPhotos.map((image: any) => {
                                return {
                                    original: image.url,
                                    thumbnail: image.url
                                }
                            })} showThumbnails={false} showNav showFullscreenButton={false} showBullets={false} showPlayButton={false} showIndex={true} />
                        </div>
                    </div>
                </Container >
               
            </div >
        </>
    );
};

export default PortfolioView;
