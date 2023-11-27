import React, { useEffect, useState } from "react";
import Style from "./quotation.module.css";
import { Button, Image, Spinner } from "react-bootstrap";
import { Formik, FieldArray, Field, Form } from "formik";
import * as Yup from "yup";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../../Utils/constants";
import { NotificationWithIcon } from "../../../Utils/helper";
import { useNavigate, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import StudioClientSevice from "../../../api/StudioClient/StudioClient";
import TemplateLoader from "../../Loader/TemplateLoader";
import moment from "moment";

export const Quotation = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const [btnLoader, setbtnLoader] = useState(false);
    const { quotationId } = useParams();
    const [invoices, setInvoice]: any = useState();

    useEffect(() => {
        getInvoiceList();
    }, []);

    const getInvoiceList = async () => {
        try {
            const clientRes = await StudioClientSevice.getQuotationDetails(
                quotationId
            );

            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                setInitialValues({
                    currency:
                        clientRes?.result?.data?.quotation?.currency || "R",
                    subject: clientRes?.result?.data?.quotation?.subject || "",
                    invoiceDetails:
                        clientRes?.result?.data?.quotation?.invoiceDetails
                            .length > 0
                            ? clientRes?.result?.data?.quotation?.invoiceDetails
                            : [
                                  {
                                      name: "",
                                      hours: "0",
                                      price: "0",
                                      amount: 0,
                                  },
                              ],
                    subTotalAmount:
                        clientRes?.result?.data?.quotation?.subTotalAmount || 0,
                    totalAmount:
                        clientRes?.result?.data?.quotation?.totalAmount || 0,
                    discount: clientRes?.result?.data?.quotation?.discount || 0,
                    tax: clientRes?.result?.data?.quotation?.tax || 0,
                    notes: clientRes?.result?.data?.quotation?.notes || "",
                    validFor:
                        clientRes?.result?.data?.quotation?.validFor || null,
                });
                setLoader(false);
                setInvoice(clientRes?.result?.data?.quotation);
            }
        } catch (err: any) {
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                setLoader(false);
                NotificationWithIcon(
                    "error",
                    MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG
                );
                navigate("/");
            } else {
                setLoader(false);
                NotificationWithIcon(
                    "error",
                    err?.data?.error?.message ||
                        VALIDATIONS.SOMETHING_WENT_WRONG
                );
            }
        }
    };

    const [initialValues, setInitialValues] = useState({
        currency: "R",
        subject: "",
        invoiceDetails: [
            {
                name: "",
                hours: "0",
                price: "0",
                amount: 0,
            },
        ],
        subTotalAmount: 0,
        totalAmount: 0,
        discount: 0,
        tax: 0,
        notes: "",
        validFor: "",
    });

    const validationSchema = Yup.object().shape({});

    const handleSubmit = async (values: any, status: any) => {
        try {
            setbtnLoader(true);
            const clientRes = await StudioClientSevice.updateQuotationDetails(
                quotationId,
                {
                    status: status,
                    ...values,
                    sendMail: status === "Draft" ? false : true,
                }
            );
            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                setbtnLoader(false);
                NotificationWithIcon(
                    "success",
                    status === "Draft"
                        ? "Draft successfully saved."
                        : "Mail send successfully."
                );
            }
        } catch (err: any) {
            setbtnLoader(false);
            if (err && err?.status === STATUS_CODE.UNAUTHORIZED) {
                NotificationWithIcon(
                    "error",
                    MESSAGE.UNAUTHORIZED || VALIDATIONS.SOMETHING_WENT_WRONG
                );
                navigate("/");
            } else {
                NotificationWithIcon(
                    "error",
                    err?.data?.error?.message ||
                        VALIDATIONS.SOMETHING_WENT_WRONG
                );
            }
        } finally {
        }
    };

    const handleAddField = (push: any) => {
        push({
            name: "",
            hours: "0",
            price: "0",
            amount: 0,
        });
    };

    const handleRemoveField = (remove: any, index: any) => {
        remove(index);
    };

    return (
        <div>
            {loader ? (
                <TemplateLoader />
            ) : (
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, setFieldValue }) => {
                        useEffect(() => {
                            const subTotalAmount = values.invoiceDetails.reduce(
                                (sum, details) => {
                                    const amount = details.amount || 0;
                                    return sum + Number(amount);
                                },
                                0
                            );

                            setFieldValue("subTotalAmount", subTotalAmount);
                            const totalAmount =
                                subTotalAmount -
                                Number(values.discount) +
                                Number(values.tax);
                            setFieldValue(
                                "totalAmount",
                                totalAmount > 0 ? totalAmount : 0
                            );
                        }, [values]);

                        const handleHoursChange = (index: any, value: any) => {
                            const price =
                                values.invoiceDetails[index].price || 0;
                            const hours = value || 0;
                            const amount = Number(price) * Number(hours);
                            setFieldValue(
                                `invoiceDetails.${index}.hours`,
                                hours
                            );
                            if (isNaN(amount)) {
                                setFieldValue(
                                    `invoiceDetails.${index}.amount`,
                                    ""
                                );
                            } else {
                                setFieldValue(
                                    `invoiceDetails.${index}.amount`,
                                    amount
                                );
                            }
                        };

                        const handlePriceChange = (index: any, value: any) => {
                            const hours =
                                values.invoiceDetails[index].hours || 0;
                            const price = value || 0;
                            const amount = Number(price) * Number(hours);
                            setFieldValue(
                                `invoiceDetails.${index}.price`,
                                price
                            );
                            if (isNaN(amount)) {
                                setFieldValue(
                                    `invoiceDetails.${index}.amount`,
                                    ""
                                );
                            } else {
                                setFieldValue(
                                    `invoiceDetails.${index}.amount`,
                                    amount
                                );
                            }
                        };

                        return (
                            <Form>
                                <div className={Style["main-div"]}>
                                    <div>
                                        <text className={Style["bill-text"]}>
                                            Bill To
                                        </text>
                                    </div>
                                    <div>
                                        <text className={Style["header-text"]}>
                                            Quotation #{invoices?.id}
                                        </text>
                                    </div>
                                    <div>
                                        <Button
                                            variant="custom"
                                            className={Style["draft-text"]}
                                            type="button"
                                            disabled={btnLoader}
                                            onClick={() =>
                                                handleSubmit(values, "Draft")
                                            }
                                        >
                                            Save as Draft
                                        </Button>
                                        <button
                                            className={
                                                Style["email-invoice-button"]
                                            }
                                            type="button"
                                            disabled={btnLoader}
                                            onClick={() =>
                                                handleSubmit(
                                                    values,
                                                    "InProgress"
                                                )
                                            }
                                        >
                                            Email Quotation
                                        </button>
                                    </div>
                                </div>
                                <div className={Style.clientDiv}>
                                    <Image
                                        className={Style.imgStyle}
                                        alt="customer img"
                                        src={invoices?.clientId?.profileUrl}
                                    />
                                    <label className={Style["client-label"]}>
                                        {invoices?.clientId?.name}
                                    </label>
                                </div>
                                <label className={Style.currency}>
                                    Currency
                                </label>
                                <div>
                                    <Field
                                        as="select"
                                        name={`currency`}
                                        id={`currency`}
                                        className={Style.dropdown}
                                        placeholder="Select Currency"
                                    >
                                        <option value="R">ZAR</option>
                                        <option value="$">U.S Dollar</option>
                                        <option value="₹">Ruppess</option>
                                        <option value="£">Pounds</option>
                                    </Field>
                                </div>
                                <label className={Style.currency}>
                                    Subject
                                </label>
                                <div>
                                    <Field
                                        type="text"
                                        name={`subject`}
                                        id={`subject`}
                                        placeholder="Enter Subject"
                                        // validate={(value: any) =>
                                        //     !value ? "Subject is required" : ""
                                        // }
                                        className={Style["subject-input"]}
                                    />
                                </div>
                                <label className={Style.currency}>Items</label>
                                <FieldArray name="invoiceDetails">
                                    {({ push, remove }) => (
                                        <div>
                                            <div>
                                                <Table
                                                    style={{ margin: "0px" }}
                                                >
                                                    <thead>
                                                        <tr>
                                                            <th
                                                                className={
                                                                    Style[
                                                                        "item-heading"
                                                                    ]
                                                                }
                                                            >
                                                                Item Name
                                                            </th>
                                                            <th
                                                                className={
                                                                    Style[
                                                                        "item-heading"
                                                                    ]
                                                                }
                                                            >
                                                                Hours
                                                            </th>
                                                            <th
                                                                className={
                                                                    Style[
                                                                        "item-heading"
                                                                    ]
                                                                }
                                                            >
                                                                Price
                                                            </th>
                                                            <th
                                                                className={
                                                                    Style[
                                                                        "item-heading"
                                                                    ]
                                                                }
                                                            >
                                                                Amount
                                                            </th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    {values?.invoiceDetails.map(
                                                        (details, index) => (
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        className={
                                                                            Style[
                                                                                "item-column"
                                                                            ]
                                                                        }
                                                                    >
                                                                        <div
                                                                            className={
                                                                                Style[
                                                                                    "tableDiv"
                                                                                ]
                                                                            }
                                                                        >
                                                                            <Field
                                                                                type="text"
                                                                                name={`invoiceDetails.${index}.name`}
                                                                                id={`invoiceDetails.${index}.name`}
                                                                                placeholder="Enter Item"
                                                                                // validate={(
                                                                                //     value: any
                                                                                // ) =>
                                                                                //     !value
                                                                                //         ? "Item is required"
                                                                                //         : ""
                                                                                // }
                                                                                className={
                                                                                    Style[
                                                                                        "table-div"
                                                                                    ]
                                                                                }
                                                                                style={{
                                                                                    width: "25vw",
                                                                                }}
                                                                            />
                                                                        </div>
                                                                    </td>
                                                                    <td
                                                                        className={
                                                                            Style[
                                                                                "item-column"
                                                                            ]
                                                                        }
                                                                    >
                                                                        <div
                                                                            className={
                                                                                Style[
                                                                                    "tableDiv"
                                                                                ]
                                                                            }
                                                                        >
                                                                            <Field
                                                                                type="text"
                                                                                name={`invoiceDetails.${index}.hours`}
                                                                                id={`invoiceDetails.${index}.hours`}
                                                                                placeholder="Enter Hours"
                                                                                onChange={(
                                                                                    e: any
                                                                                ) =>
                                                                                    handleHoursChange(
                                                                                        index,
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                    )
                                                                                }
                                                                                className={
                                                                                    Style[
                                                                                        "table-div"
                                                                                    ]
                                                                                }
                                                                                style={{
                                                                                    width: "10vw",
                                                                                }}
                                                                            />
                                                                        </div>
                                                                    </td>
                                                                    <td
                                                                        className={
                                                                            Style[
                                                                                "item-column"
                                                                            ]
                                                                        }
                                                                    >
                                                                        <div
                                                                            className={
                                                                                Style[
                                                                                    "tableDiv"
                                                                                ]
                                                                            }
                                                                        >
                                                                            <Field
                                                                                type="text"
                                                                                name={`invoiceDetails.${index}.price`}
                                                                                id={`invoiceDetails.${index}.price`}
                                                                                onChange={(
                                                                                    e: any
                                                                                ) =>
                                                                                    handlePriceChange(
                                                                                        index,
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                    )
                                                                                }
                                                                                placeholder="Enter Price"
                                                                                className={
                                                                                    Style[
                                                                                        "table-div"
                                                                                    ]
                                                                                }
                                                                                style={{
                                                                                    width: "10vw",
                                                                                }}
                                                                            />
                                                                        </div>{" "}
                                                                    </td>
                                                                    <td
                                                                        className={
                                                                            Style[
                                                                                "item-column"
                                                                            ]
                                                                        }
                                                                    >
                                                                        <div
                                                                            className={
                                                                                Style[
                                                                                    "tableDiv"
                                                                                ]
                                                                            }
                                                                        >
                                                                            <Field
                                                                                type="text"
                                                                                name={`invoiceDetails.${index}.amount`}
                                                                                id={`invoiceDetails.${index}.amount`}
                                                                                placeholder="Enter Amount"
                                                                                readonly
                                                                                disabled
                                                                                className={
                                                                                    Style[
                                                                                        "table-div"
                                                                                    ]
                                                                                }
                                                                                style={{
                                                                                    width: "10vw",
                                                                                }}
                                                                            />
                                                                        </div>
                                                                    </td>
                                                                    <td
                                                                        className={
                                                                            Style[
                                                                                "item-column"
                                                                            ]
                                                                        }
                                                                    >
                                                                        <div
                                                                            className={
                                                                                Style[
                                                                                    "tableDiv"
                                                                                ]
                                                                            }
                                                                            style={{
                                                                                color: "#ec1a25",
                                                                            }}
                                                                            onClick={() =>
                                                                                handleRemoveField(
                                                                                    remove,
                                                                                    index
                                                                                )
                                                                            }
                                                                        >
                                                                            <i className="fa-solid selecticon fa-trash-can"></i>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        )
                                                    )}
                                                </Table>
                                            </div>
                                            <div className={Style.subtotalDiv}>
                                                <Table borderless>
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                className={
                                                                    Style[
                                                                        "item-column"
                                                                    ]
                                                                }
                                                            >
                                                                <div
                                                                    className={
                                                                        Style[
                                                                            "buttonDiv"
                                                                        ]
                                                                    }
                                                                    style={{
                                                                        width: "25vw",
                                                                    }}
                                                                >
                                                                    <Button
                                                                        variant="custom"
                                                                        className={
                                                                            Style.addBtn
                                                                        }
                                                                        onClick={() =>
                                                                            handleAddField(
                                                                                push
                                                                            )
                                                                        }
                                                                    >
                                                                        <i
                                                                            className={`fa-regular fa-plus ${Style.addBtn}`}
                                                                        ></i>
                                                                        <span
                                                                            className={
                                                                                Style.addLabel
                                                                            }
                                                                        >
                                                                            Add
                                                                            Item
                                                                        </span>
                                                                    </Button>
                                                                </div>
                                                            </td>
                                                            <td
                                                                className={
                                                                    Style[
                                                                        "item-column"
                                                                    ]
                                                                }
                                                            >
                                                                <div
                                                                    className={
                                                                        Style[
                                                                            "tableDiv"
                                                                        ]
                                                                    }
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "10vw",
                                                                        }}
                                                                    >
                                                                        Sub
                                                                        Total
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td
                                                                className={
                                                                    Style[
                                                                        "item-column"
                                                                    ]
                                                                }
                                                            >
                                                                <div
                                                                    className={
                                                                        Style[
                                                                            "tableDiv"
                                                                        ]
                                                                    }
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "10vw",
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                            </td>
                                                            <td
                                                                className={
                                                                    Style[
                                                                        "item-column"
                                                                    ]
                                                                }
                                                            >
                                                                <div
                                                                    className={
                                                                        Style[
                                                                            "tableDiv"
                                                                        ]
                                                                    }
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "10vw",
                                                                        }}
                                                                    >
                                                                        ZAR{" "}
                                                                        {
                                                                            values?.subTotalAmount
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                className={
                                                                    Style[
                                                                        "item-column"
                                                                    ]
                                                                }
                                                            ></td>
                                                            <td
                                                                className={
                                                                    Style[
                                                                        "item-column"
                                                                    ]
                                                                }
                                                                colSpan={2}
                                                            >
                                                                <div
                                                                    className={
                                                                        Style[
                                                                            "tableDiv"
                                                                        ]
                                                                    }
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "10vw",
                                                                            color: "#ec1a25",
                                                                        }}
                                                                    >
                                                                        Discount
                                                                    </div>
                                                                </div>
                                                            </td>

                                                            <td
                                                                className={
                                                                    Style[
                                                                        "item-column"
                                                                    ]
                                                                }
                                                            >
                                                                <div
                                                                    className={
                                                                        Style[
                                                                            "tableDiv"
                                                                        ]
                                                                    }
                                                                >
                                                                    <div>
                                                                        <Field
                                                                            type="text"
                                                                            name={`discount`}
                                                                            id={`discount`}
                                                                            style={{
                                                                                width: "10vw",
                                                                            }}
                                                                            placeholder="Discount"
                                                                            className={
                                                                                Style[
                                                                                    "subject-input"
                                                                                ]
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td
                                                                className={
                                                                    Style[
                                                                        "item-column"
                                                                    ]
                                                                }
                                                            ></td>
                                                            <td
                                                                className={
                                                                    Style[
                                                                        "item-column"
                                                                    ]
                                                                }
                                                                colSpan={2}
                                                            >
                                                                <div
                                                                    className={
                                                                        Style[
                                                                            "tableDiv"
                                                                        ]
                                                                    }
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "10vw",
                                                                            color: "#ec1a25",
                                                                        }}
                                                                    >
                                                                        Tax
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td
                                                                className={
                                                                    Style[
                                                                        "item-column"
                                                                    ]
                                                                }
                                                            >
                                                                <div
                                                                    className={
                                                                        Style[
                                                                            "tableDiv"
                                                                        ]
                                                                    }
                                                                >
                                                                    <div>
                                                                        <Field
                                                                            type="text"
                                                                            name={`tax`}
                                                                            id={`tax`}
                                                                            style={{
                                                                                width: "10vw",
                                                                            }}
                                                                            placeholder="Tax"
                                                                            className={
                                                                                Style[
                                                                                    "subject-input"
                                                                                ]
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr
                                                            style={{
                                                                borderTop:
                                                                    "1px solid #dee2e6",
                                                            }}
                                                        >
                                                            <td
                                                                className={
                                                                    Style[
                                                                        "item-column"
                                                                    ]
                                                                }
                                                            ></td>
                                                            <td
                                                                className={
                                                                    Style[
                                                                        "item-column"
                                                                    ]
                                                                }
                                                                colSpan={2}
                                                            >
                                                                <div
                                                                    className={
                                                                        Style[
                                                                            "tableDiv"
                                                                        ]
                                                                    }
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "10vw",
                                                                        }}
                                                                    >
                                                                        Total
                                                                    </div>
                                                                </div>
                                                            </td>

                                                            <td
                                                                className={
                                                                    Style[
                                                                        "item-column"
                                                                    ]
                                                                }
                                                            >
                                                                <div
                                                                    className={
                                                                        Style[
                                                                            "tableDiv"
                                                                        ]
                                                                    }
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "10vw",
                                                                        }}
                                                                    >
                                                                        ZAR{" "}
                                                                        {
                                                                            values?.totalAmount
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    )}
                                </FieldArray>
                                <label className={Style.notes}>Notes</label>
                                <div>
                                    <Field
                                        type="text"
                                        as="textarea"
                                        rows="2"
                                        cols="50"
                                        name={`notes`}
                                        id={`notes`}
                                        placeholder="Thank you for you business."
                                        className={Style["notes-textarea"]}
                                    />
                                </div>
                                <label className={Style.payment}>
                                    Valid For
                                </label>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        width: "40vw",
                                    }}
                                >
                                    <Field
                                        as="select"
                                        name={`validFor`}
                                        id={`validFor`}
                                        className={Style.dropdown}
                                        placeholder="Select Validity"
                                    >
                                        <option value="30">30 Days</option>
                                        <option value="60">60 Days</option>
                                        <option value="90">90 Days</option>
                                        <option value="180">180 Days</option>
                                    </Field>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            )}
        </div>
    );
};
