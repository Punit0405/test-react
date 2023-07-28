import { FunctionComponent, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PortfolioService from "../../api/Portfolio/portfolio";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";
import styles from "./GalleryGrid.module.css";
import GalleryGridCard from "./GalleryGridCard";
import GalleryNav from "./GalleryNav";
import CollectionLoader from "../Loader/CollectionLoader";
import PortfolioNav from "./PortfolioNav";
import PortfolioGridCard from "./PortfolioGridCard";

const PortfolioGrid: FunctionComponent = () => {

    const [loader, setLoader] = useState<boolean>(true);
    const [portfolio, setPortfolio] = useState([]);
    const navigate = useNavigate();

    const getPortfolioList = async () => {
        try {
            const res = await PortfolioService.getPortfolio()
            if (res && res?.code === STATUS_CODE.SUCCESS) {
                console.log(res.result , "result")
                setPortfolio(res?.result)
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
        getPortfolioList();
    }, [])
    return (
        <>
            <PortfolioNav setCollectionSort={setPortfolio} setButtonText="Create Portfolio" setLoaderSort={setLoader} />
            {loader ?
                <CollectionLoader /> :
                <Row className={styles.maincomp}>
                    {
                        portfolio && portfolio.length ? portfolio.map((singlePortfolio: any) => (
                            <PortfolioGridCard
                                portfolioData={singlePortfolio}
                                refreshFunction={getPortfolioList}
                                key={singlePortfolio?.id}
                            />
                        )) :
                            <div className={styles.nocollection}>
                                This section is for you to create your own portfolio which we will show to potential clients. Ensure you create multiple categories which align to your specialty and try to upload a show reel too
                            </div>
                    }

                </Row>
            }
        </>
    );
};

export default PortfolioGrid;
