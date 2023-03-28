import { FunctionComponent } from "react";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import GalleryNav from "../components/Gallery/GalleryNav";
import Layout from "../components/Layout";

const Gallery: FunctionComponent = () => {
    return (
        <Layout>
            <>
                <GalleryGrid />
            </>
        </Layout>
    );
};

export default Gallery;
