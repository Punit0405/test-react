import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./InvoiceNav.module.css";

const activetab = {
    borderTop: "2px solid #EC1A25",
};

function QuotationNav({ setinvoices, invoices }: any) {
    const [active, setActive] = useState("all");

    const setStatus = async (index: any) => {
        setActive(index);
        if (index !== "all") {
            const filteredInvoice = invoices?.filter(
                (invoice: any) => invoice.status === index
            );
            setinvoices(filteredInvoice);
        } else {
            setinvoices(invoices);
        }
    };

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
                style={active === "all" ? activetab : {}}
                onClick={() => setStatus("all")}
            >
                All Quotations
            </Nav.Link>
            <Nav.Link
                className={styles.navname}
                style={active === "Accepted" ? activetab : {}}
                onClick={() => setStatus("Accepted")}
            >
                Accepted
            </Nav.Link>
            <Nav.Link
                className={styles.navname}
                style={active === "Cancelled" ? activetab : {}}
                onClick={() => setStatus("Cancelled")}
            >
                Cancelled
            </Nav.Link>
            <Nav.Link
                className={styles.navname}
                style={active === "InProgress" ? activetab : {}}
                onClick={() => setStatus("InProgress")}
            >
                In Progress
            </Nav.Link>
            <Nav.Link
                className={styles.navname}
                style={active === "Draft" ? activetab : {}}
                onClick={() => setStatus("Draft")}
            >
                Draft
            </Nav.Link>
        </Nav>
    );
}

export default QuotationNav;
