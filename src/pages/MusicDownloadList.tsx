import {  Col,  Row } from "react-bootstrap";
import FullMusicNav from "../components/Music/FullMusicNav";


const MusicDownloadList = () => {
  return (
                 <Row className="mx-0">
                    <Col md={12} lg={12} >
                        <FullMusicNav/>
                        {/* <AllMusic /> */}
                    </Col>
                </Row>
  )
}

export default MusicDownloadList