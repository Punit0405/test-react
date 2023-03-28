import { useState } from 'react';
import { Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CollectionService from '../../api/Collection/collection';
import { MESSAGE, STATUS_CODE, VALIDATIONS } from '../../Utils/constants';
import { NotificationWithIcon } from '../../Utils/helper';
import CreateCollectionModal from '../Modal/CreateCollectionModal';
import styles from "./GalleryNav.module.css";

function GalleryNav(props: any): any {

    const navigate = useNavigate();

    function handleChange(value: any) {
        getCollectionList(value)
    }

    const getCollectionList = async (value: any) => {
        try {
            props.setLoaderSort(true)
            const res = await CollectionService.getCollectionSort(value)
            if (res && res?.code === STATUS_CODE.SUCCESS) {
                props.setCollectionSort(res?.result)
                props.setLoaderSort(false)
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                props.setLoaderSort(false)
                NotificationWithIcon("error", MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG)
                navigate('/');
            } else {
                props.setLoaderSort(false)
                NotificationWithIcon("error", err?.data?.error?.message || VALIDATIONS.SOMETHING_WENT_WRONG)
            }
        }

    }

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Navbar className={styles.maincomp}>
                <Container fluid>
                    <Navbar.Brand className={styles.mainname}>Collections</Navbar.Brand>
                    <Form className="d-flex">
                        <Button className={styles.collectionbtn} onClick={() => setModalShow(true)} variant="custom">New Collection</Button>
                        <Button className={styles.searchbtn} variant="custom">
                            <i className="fa-regular fa-magnifying-glass"></i>
                        </Button>

                        {/* //?sort=name&order=ASC */}
                        <DropdownButton
                            id="dropdown-basic-button"
                            className={styles.sortbtn}
                            align="end"
                            variant="custom"
                            title={<i className="fa-regular fa-arrow-right-arrow-left"></i>}
                        >
                            <Dropdown.Item className={styles.navmain}>Sort by</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className={styles.dropitem}
                                onClick={() => handleChange("?sort=createdAt&order=ASC")}>Created: New - Old</Dropdown.Item>
                            <Dropdown.Item className={styles.dropitem}
                                onClick={() => handleChange("?sort=createdAt&order=DESC")}>Created: Old - New</Dropdown.Item>
                            <Dropdown.Item className={styles.dropitem}
                                onClick={() => handleChange("?sort=eventDate&order=ASC")}>Event Date: New - Old</Dropdown.Item>
                            <Dropdown.Item className={styles.dropitem}
                                onClick={() => handleChange("?sort=eventDate&order=DESC")}>Event Date: Old - New</Dropdown.Item>
                            <Dropdown.Item className={styles.dropitem}
                                onClick={() => handleChange("?sort=name&order=ASC")}>Name: A - Z</Dropdown.Item>
                            <Dropdown.Item className={styles.dropitem}
                                onClick={() => handleChange("?sort=name&order=DESC")}>Name: Z - A</Dropdown.Item>
                        </DropdownButton>
                    </Form>
                </Container>
                <CreateCollectionModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    createNew={true}
                />
            </Navbar>
        </>
    );
}

export default GalleryNav;