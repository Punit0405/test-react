import { FunctionComponent } from "react";
import Layout from "../components/Layout";
import PortfolioGrid from "../components/Gallery/PortfolioGrid";

const Portfolio: FunctionComponent = () => {
    return (
        <Layout>
            <>
                <PortfolioGrid/>
            </>
        </Layout>
    );
};

export default Portfolio;
