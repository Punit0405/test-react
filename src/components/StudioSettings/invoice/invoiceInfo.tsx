import { Button, Image } from "react-bootstrap";
import Style from "./invoice.module.css";
import Select, { components } from "react-select";
import { useState } from "react";

const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
];

const CustomMenuList = (props: any) => {
    const { options, children, getValue } = props;
    const hasOptions = options && options.length > 0;

    console.log(props, "=====props=====");

    return (
        <div className={Style.optionMain}>
            <button className={Style.defaultBtn}>
                <i className={`fa-regular fa-plus fa-xl ${Style.addBtn}`}></i>
                <span>Add new client</span>
            </button>
            {hasOptions ? (
                <div className={Style.optionList}>
                    <div className={Style.photoDiv}>
                        <Image src="../../../../profile.png" />
                    </div>
                    <span className={Style.optname}>{children}</span>
                </div>
            ) : (
                <div>No options available</div>
            )}
        </div>
    );
};

export const InvoiceInfo = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [filteredOptions, setFilteredOptions] = useState(options);

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
    return (
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
                        components={{ MenuList: CustomMenuList }}
                    />
                    <div>
                        <Button
                            variant="custom"
                            className={Style.invoiceButton}
                            size="lg"
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
