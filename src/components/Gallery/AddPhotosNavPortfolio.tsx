import { FunctionComponent, useEffect, useState } from "react";
import { Button, Container, Navbar, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./AddPhotosNav.module.css";
import DashboardService from "../../api/Dashboard/dashboard";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import AddVideoModal from "../Modal/AddVideoModal";


const AddPhotosNavPortfolio: FunctionComponent = () => {
    const { portfolioId } = useParams()
    const navigate = useNavigate();
    const [storage, setStorage]: any = useState({})
    const [isVideoModel, setIsVideoModel] = useState(false);
    const getUserStorage = async () => {
        try {
            const res = await DashboardService.getUserStorage()
            if (res && res?.code === STATUS_CODE.SUCCESS) {
                setStorage(res?.result)
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

    useEffect(() => {
        getUserStorage()
    }, [])

    const checkStorage = () => {
        if (storage?.remainingSpace >= 10) {
            navigate(`/portfolio/addportfolio/${portfolioId}`)
        } else {
            NotificationWithIcon("error", "You don't have enough storage")
        }
    }

    return (
        <Navbar className={styles.maincomp}>
            <Container fluid className={styles.galleryaddnav}>
                <Navbar.Brand className={styles.mainname}>Gallery</Navbar.Brand>
                <Form className="d-flex">
                    <Button className={styles.collectionbtn} onClick={checkStorage} variant="custom">Add Photos</Button>
                    <Button className={styles.collectionbtn} onClick={()=> setIsVideoModel(true)} variant="custom">Add Videos</Button>
                </Form>
            </Container>
            <AddVideoModal portfolioId={portfolioId} show={isVideoModel} onHide={()=>setIsVideoModel(false)}  />
        </Navbar>
    );
};

export default AddPhotosNavPortfolio;
