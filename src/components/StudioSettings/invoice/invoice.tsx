import React, { useState } from "react";
import Style from "./invoice.module.css";
import { Button, Image } from "react-bootstrap";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { InvoiceTable } from "./invoiceTable";
import TextArea from "antd/es/input/TextArea";
import { InvoicePayment } from "./invoicePayment";
import { Calender } from "./calender";

export const Invoice = () => {
    const items: MenuProps["items"] = [
        {
            label: "1st menu item",
            key: "1",
        },
    ];

    const paymentDates = [
        {
            placeholder: "7 March 2023",
            name: "dateFormat",
        },
        {
            placeholder: "Due on Receipt",
            name: "receipt",
        },
    ];

    const handleMenuClick: MenuProps["onClick"] = (e) => {
        console.log("click", e);
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return (
        <div style={{ marginLeft: "20px" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "32px",
                }}
            >
                <div>
                    <text className={Style["bill-text"]}>Bill To</text>
                </div>
                <div>
                    <text className={Style["header-text"]}>Invoice #1001</text>
                </div>
                <div>
                    <Button variant="custom" className={Style["draft-text"]}>
                        Save as Draft
                    </Button>
                    <Button className={Style["email-invoice-button"]}>
                        Email Invoice
                    </Button>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "3%",
                }}
            >
                <Image
                    className={Style.imgStyle}
                    alt="customer img"
                    src={`../../../../sample2.jpg`}
                />
                <label className={Style["client-label"]}>Sample Client</label>
            </div>
            <label className={Style.currency}>Currency</label>
            <div>
                <Dropdown menu={menuProps}>
                    <Button variant="custom" className={Style.dropdown}>
                        South African Rand (ZAR)
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M17.625 8.81177L11.7505 14.6863L5.87597 8.81177"
                                stroke="#080B23"
                            />
                        </svg>
                    </Button>
                </Dropdown>
            </div>
            <label className={Style.currency}>Subject</label>
            <div>
                <input
                    className={Style["subject-input"]}
                    placeholder="Let the client know what this invoice is for"
                ></input>
            </div>
            <label className={Style.currency}>Items</label>
            <InvoiceTable />
            <label className={Style.notes}>Notes</label>
            <div>
                <TextArea
                    className={Style["notes-textarea"]}
                    placeholder="Thank you for you business."
                ></TextArea>
            </div>
            <InvoicePayment />
            <Calender paymentDates={paymentDates} />
        </div>
    );
};
