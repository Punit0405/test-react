import { Modal } from "react-bootstrap";
import Style from "./Components/ClientSelect.module.css";
import Select, { components } from "react-select";
import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
];

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
                <Image src="../../../../profile.png" />
            </div>
            <div className={Style.labelItem}>{label}</div>
        </div>
    </div>
);

function AddNewInvoice(props: any) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [filteredOptions, setFilteredOptions] = useState(options);
    const navigate = useNavigate();

    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption);
    };

    const handleInputChange = (inputValue: any) => {
        const filtered = options.filter((option) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        if (inputValue && filtered.length === 0) {
            filtered.push(options[0]);
        }
        setFilteredOptions(filtered);
    };

    const createInvoice = () => {
        navigate("5");
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
                                    Who is the new invoice for?
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
                                    >
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

export default AddNewInvoice;
