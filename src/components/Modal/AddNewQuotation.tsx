import { Modal, Spinner } from "react-bootstrap";
import Style from "./Components/ClientSelect.module.css";
import Select, { components } from "react-select";
import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StudioClientSevice from "../../api/StudioClient/StudioClient";
import { MESSAGE, STATUS_CODE, VALIDATIONS } from "../../Utils/constants";
import { NotificationWithIcon } from "../../Utils/helper";

const CustomMenuList = (props: any) => {
    const navigate = useNavigate();

    const { options, children, getValue } = props;
    const hasOptions = options && options.length > 0;

    return (
        <div className={Style.optionMain}>
            <button
                className={Style.defaultBtn}
                onClick={() => {
                    navigate("/studiomanagement/clients");
                }}
            >
                <i className={`fa-regular fa-plus fa-xl ${Style.addBtn}`}></i>
                <span>Add new client</span>
            </button>
            {hasOptions ? (
                <div className={Style.optionList}>
                    <span className={Style.optname}>{children}</span>
                </div>
            ) : (
                <div>No options available</div>
            )}
        </div>
    );
};

const CustomOption = ({ innerProps, label, data }: any) => (
    <div {...innerProps}>
        <div className={Style.labelDiv}>
            <div className={Style.photoDiv}>
                <Image src={data.profileUrl} className={Style.photoSize} />
            </div>
            <div className={Style.labelItem}>{label}</div>
        </div>
    </div>
);

function AddNewQuotation(props: any) {
    const options = props?.client.map((clientData: any) => {
        return {
            ...clientData,
            value: clientData?.id,
            label: clientData?.name,
        };
    });
    const [loader, setLoader] = useState(false);
    const [selectedOption, setSelectedOption]: any = useState(null);
    const [filteredOptions, setFilteredOptions] = useState(options);
    const navigate = useNavigate();

    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption);
    };

    const handleInputChange = (inputValue: any) => {
        const filtered = options.filter((option: any) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        if (inputValue && filtered.length === 0) {
            filtered.push(options[0]);
        }
        setFilteredOptions(filtered);
    };

    const createInvoice = async () => {
        try {
            setLoader(true);
            const clientRes = await StudioClientSevice.addQuotation({
                clientId: selectedOption?.id,
            });
            if (clientRes && clientRes?.code === STATUS_CODE.SUCCESS) {
                setLoader(false);
                navigate(`/studiomanagement/quotations/${String(clientRes?.result?.data?.invoice?.id)}`);
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

    return (
        <Modal fullscreen={true} {...props}>
            <button className={Style.backdiv} onClick={() => props.onHide()}>
                <i className="fa-solid fa-chevron-left"></i>
                <span>Back</span>
            </button>
            <Modal.Body>
                <>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            height: "75vh",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <div>
                                <h6 className={Style.invoiceTitle}>
                                    Who is the new quotation for?
                                </h6>
                            </div>
                            <Select
                                value={selectedOption}
                                className={Style.invoiceInput}
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={filteredOptions}
                                components={{
                                    MenuList: CustomMenuList,
                                    Option: CustomOption,
                                }}
                            />
                            <div>
                                {selectedOption ? (
                                    <Button
                                        variant="custom"
                                        className={Style.invoiceButton}
                                        size="lg"
                                        onClick={createInvoice}
                                        disabled={loader}
                                    >
                                        {loader && (
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                        )}
                                        Next
                                    </Button>
                                ) : (
                                    <Button
                                        variant="custom"
                                        className={Style.invoiceButtonDisable}
                                        size="lg"
                                    >
                                        Next
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            </Modal.Body>
        </Modal>
    );
}

export default AddNewQuotation;
