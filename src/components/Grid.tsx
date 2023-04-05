import { FunctionComponent } from "react";
import { Button, Container, Row, Col, Nav, NavItem } from "react-bootstrap";
import NavBarComponent from "./NavbarComponent";
import TopBarComponent from "./TopBarComponent";
import styles from "./Layout.module.css";
import Gallery from "react-photo-gallery";


interface Props {
    children: JSX.Element;
}

const Grid = (props:any) => {
    const images = props.imagesArr ? props.imagesArr:[];
    const newData = [];
    for(const image of images){
        newData.push({
            src:image.url,
            height:image.height,
            width:image.width
        })
    }
    return (
        <div className={styles.maincomp}>
            <Gallery photos={newData} columns={4} margin={props.gridSpacing === "large" ? 8:3}  direction={props.gridStyle} />
        </div>
    );
};

export default Grid;
