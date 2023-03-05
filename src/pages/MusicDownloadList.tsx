import {  Col,  Row } from "react-bootstrap";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import FullMusicNav from "../components/Music/FullMusicNav";
import MusicGrid from "../components/Music/MusicGrid";


const MusicDownloadList = () => {
  return (
                 <Row className="mx-0">
                    <Col md={12} lg={12} >
                        <FullMusicNav/>
                        <MusicGrid/>
                    </Col>
                </Row>
  )
}

export default MusicDownloadList