import { FunctionComponent, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import PortfolioService from "../../api/Portfolio/portfolio";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import  AddPortfolio from "./AddPortfolio";
import { useDispatch } from 'react-redux'
import { portfolioAction } from "../../redux/actions/portfolioAction";
import GalleryLoader from "../Loader/GalleryLoader";
import PortFolioFilesSevice from "../../api/Portfoliofiles/files";
import AddPhotosNavPortfolio from "./AddPhotosNavPortfolio";
import PortfolioView from "./PortfolioView";

const Portfolio: FunctionComponent = () => {

    const { portfolioId } = useParams()
    const [loader, setLoader] = useState(true);
    const [files, setFiles]: any = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const getPortfolioList = async () => {
        try {
            if (portfolioId) {
                console.log(portfolioId , "portfolioID")

                const portfolioRes = await PortfolioService.getPortfolioById(portfolioId as string)
                if (portfolioRes && portfolioRes?.code === STATUS_CODE.SUCCESS) {
                    dispatch(portfolioAction({ portfolio: portfolioRes.result }))
                }
                const res = await PortFolioFilesSevice.getFiles(portfolioId)
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
        getPortfolioList();
    }, [])

    return (
        <>
            <Container fluid >
                <AddPhotosNavPortfolio/>
                {
                    loader ? <GalleryLoader /> :
                        files && files?.length ?
                            <PortfolioView
                                portfolioData={files}
                                refreshFunction={getPortfolioList}
                            /> :
                            <AddPortfolio />
                }
            </Container>
        </>
    );
};

export default Portfolio;
