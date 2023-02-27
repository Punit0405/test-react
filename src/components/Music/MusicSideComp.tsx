import { FunctionComponent } from "react";
import { Button, Container, Form } from "react-bootstrap";
import styles from "./MusicSideComp.module.css"

const MusicSideComp: FunctionComponent = () => {
    return (
        <>
            <Container>
                <Form>
                    <Button variant="custom">Filters</Button>
                    <Form.Check type="checkbox" label="Acoustic" />
                    <Form.Check type="checkbox" label="Ambient" />
                    <Form.Check type="checkbox" label="Blues" />
                    <Form.Check type="checkbox" label="Children" />
                </Form>
            </Container>
        </>
    );
};

export default MusicSideComp;
