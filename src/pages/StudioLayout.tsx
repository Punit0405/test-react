import { FunctionComponent } from "react";
import AssetLeftContainer from "../components/AssetRegistry/AssetLeftContainer";
import styles from "./AssetRegistry.module.css";
import Layout from "../components/Layout";
import {
    Outlet,
} from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import StudioManagementSide from "../components/StudioSettings/StudioManagementSide";

const StudioLayout: FunctionComponent = () => {
    return (
        <Layout>
            <>
                <Row>
                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                        <StudioManagementSide />
                    </Col>
                    <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                        <Outlet />
                    </Col>
                </Row>

            </>
        </Layout>


    );
};

export default StudioLayout;