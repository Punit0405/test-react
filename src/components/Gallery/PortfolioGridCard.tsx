import { useState } from "react";
import { Image, Col, Ratio, NavDropdown } from "react-bootstrap";
import CreatePortfolioModal from "../Modal/CreatePortfolioModal";
import { useNavigate } from "react-router-dom";
import styles from "./GalleryGrid.module.css";
import Moment from "react-moment";
import 'moment-timezone';
import { useDispatch } from 'react-redux'
import DeleteConfirmation from "../Modal/DeleteConfirmation";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import GetDirectLinkModal from "../Modal/GetDirectLinkModal";
import { portfolioAction } from "../../redux/actions/portfolioAction";
import PortfolioService from "../../api/Portfolio/portfolio";

const PortfolioGridCard = ({ portfolioData, refreshFunction }: any) => {
    const [portfolio, setPortfolio] = useState({
        name: portfolioData?.name || "",
        eventDate: portfolioData?.eventDate || "",
        url: portfolioData?.url || "",
        downloadPin: portfolioData?.downloadPin || ""
    })
    const dispatch = useDispatch()

   

    const [deleteModalShow, setDeleteModalShow] = useState(false);

    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(portfolioAction({ portfolio: portfolioData }))
        navigate(`/portfolio/${portfolioData?.id}`)
    }
    const deletePortfolio = async () => {
        try {
            if (portfolioData?.id) {
                const deleteRes = await PortfolioService.deletePortfolio(portfolioData?.id)
                if (deleteRes && deleteRes?.code === STATUS_CODE.SUCCESS) {
                    refreshFunction()
                    setDeleteModalShow(false);
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
        <Col xl={3} lg={4} sm={6} className={styles.imgblock1} >
            <div className={styles.imgblock}>
                <Ratio aspectRatio='16x9' onClick={handleClick} className={styles.imgdivpoint}>
                    <Image className={styles.myimage} src={portfolioData.coverPhoto} />
                </Ratio>
                <div className={styles.outertitle}>
                    <p className={styles.title}>{portfolio.name}</p>
                    <NavDropdown
                        align="end"
                        title={<i className="fa-regular fa-ellipsis setcolorgallery galleryicon"></i>}
                        className={styles.navdropdown} id="collasible-nav-dropdown gallerydropdown">    
                        <NavDropdown.Item onClick={() => setDeleteModalShow(true)}>
                            <div className={styles.navicons}>
                                <i className="fa-solid navicons fa-trash-can"></i>
                                <div className={styles.navtags}>Delete Portfolio</div>
                            </div>
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
                <div className={styles.outerdetails}>
                    {portfolio.eventDate && 
                    <p className={styles.details}>
                        <Moment format="MMMM  Do, YYYY">{portfolio.eventDate}</Moment>
                    </p>}
                    <p className={styles.details}>{portfolioData?.photos} Photos</p>
                    <p className={styles.details}>{portfolioData?.videos} Videos</p>
                    <p className={styles.details}>{
                        portfolioData && portfolioData?.status === "HIDDEN" ? "Hidden" : "Published"
                    }</p>
                </div>
            </div>
            <DeleteConfirmation
                show={deleteModalShow}
                modaltext={"Are you sure want to delete portfolio?"}
                onHide={() => setDeleteModalShow(false)}
                handledeletefiles={deletePortfolio as any}
            />
        </Col>
    )
}

export default PortfolioGridCard