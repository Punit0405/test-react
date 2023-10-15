import Table from "react-bootstrap/Table";
import Style from "./invoice.module.css";
import { Button, Col, Row } from "react-bootstrap";

export const InvoiceTable = () => {
    return (
        <div>
            {/* <Table dataSource={data}>
                <Column className={Style['item-column']} title="Item Name" dataIndex="itemName" key="itemName" />
                <Column className={Style['item-column']} title="Hours" dataIndex="hours" key="hours" />
                <Column className={Style['item-column']} title="Price" dataIndex="price" key="price" />
                <Column className={Style['item-column']} title="Amount" dataIndex="amount" key="amount" />
            </Table> */}
            <Table>
                <thead>
                    <tr>
                        <th className={Style["item-heading"]}>Item Name</th>
                        <th className={Style["item-heading"]}>Hours</th>
                        <th className={Style["item-heading"]}>Price</th>
                        <th className={Style["item-heading"]}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Style["item-column"]}>
                            <div className={Style["tableDiv"]}>
                                <input
                                    type="text"
                                    className={Style["table-div"]}
                                    style={{ width: "25vw" }}
                                />
                            </div>
                        </td>
                        <td className={Style["item-column"]}>
                            <div className={Style["tableDiv"]}>
                                <input
                                    type="text"
                                    className={Style["table-div"]}
                                    style={{ width: "10vw" }}
                                />
                            </div>
                        </td>
                        <td className={Style["item-column"]}>
                            <div className={Style["tableDiv"]}>
                                <input
                                    type="text"
                                    className={Style["table-div"]}
                                    style={{ width: "10vw" }}
                                />
                            </div>{" "}
                        </td>
                        <td className={Style["item-column"]}>
                            <div className={Style["tableDiv"]}>
                                <input
                                    type="text"
                                    className={Style["table-div"]}
                                    style={{ width: "10vw" }}
                                />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div className={Style.subtotalDiv}>
                <Table>
                    <tbody>
                        <tr>
                            <td className={Style["item-column"]}>
                                <div
                                    className={Style["buttonDiv"]}
                                    style={{ width: "25vw" }}
                                >
                                    <Button
                                        variant="custom"
                                        className={Style.addBtn}
                                    >
                                        <i
                                            className={`fa-regular fa-plus ${Style.addBtn}`}
                                        ></i>
                                        <span className={Style.addLabel}>
                                            Add Item
                                        </span>
                                    </Button>
                                </div>
                            </td>
                            <td className={Style["item-column"]}>
                                <div className={Style["tableDiv"]}>
                                    <div style={{ width: "10vw" }}>
                                        Sub Total
                                    </div>
                                </div>
                            </td>
                            <td className={Style["item-column"]}>
                                <div className={Style["tableDiv"]}>
                                    <div style={{ width: "10vw" }}></div>
                                </div>
                            </td>
                            <td className={Style["item-column"]}>
                                <div className={Style["tableDiv"]}>
                                    <div style={{ width: "10vw" }}>
                                        ZAR 500.00
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};
