import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./InvoiceNav.module.css";

const activetab = {
    borderTop: "2px solid #EC1A25",
};

function InvoiceNav() {
    const [active, setActive] = useState(1);

    return (
        <Nav
            id="invoice"
            navbar
            variant="tabs"
            defaultActiveKey="all"
            className={`${styles.navpadding}`}
        >
            <Nav.Link
                className={styles.navname}
                style={active === 1 ? activetab : {}}
                onClick={() => setActive(1)}
            >
                All Invoices
            </Nav.Link>
            <Nav.Link
                className={styles.navname}
                style={active === 2 ? activetab : {}}
                onClick={() => setActive(2)}
            >
                Draft
            </Nav.Link>
            <Nav.Link
                className={styles.navname}
                style={active === 3 ? activetab : {}}
                onClick={() => setActive(3)}
            >
                Paid
            </Nav.Link>
            <Nav.Link
                className={styles.navname}
                style={active === 4 ? activetab : {}}
                onClick={() => setActive(4)}
            >
                Outstanding
            </Nav.Link>
            <Nav.Link
                className={styles.navname}
                style={active === 5 ? activetab : {}}
                onClick={() => setActive(5)}
            >
                Past Due
            </Nav.Link>
            <Nav.Link
                className={styles.navname}
                style={active === 6 ? activetab : {}}
                onClick={() => setActive(6)}
            >
                Cancelled
            </Nav.Link>
        </Nav>
    );
}

export default InvoiceNav;
