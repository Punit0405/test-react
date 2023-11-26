import { Button, Image } from "react-bootstrap";
import Style from "./ClientSelect.module.css";
import Select, { components } from "react-select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

export const ClientSelect = ({ setQuestionnariesData, client }: any) => {
    const options = client.map((clientData: any) => {
        return {
            ...clientData,
            value: clientData?.id,
            label: clientData?.name,
        };
    });

    const [selectedOption, setSelectedOption]: any = useState(null);
    const [filteredOptions, setFilteredOptions] = useState(options);

    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption);
    };

    function selectClient() {
        setQuestionnariesData({
            email: selectedOption?.email,
            clientId: selectedOption?.id,
        });
    }

    const handleInputChange = (inputValue: any) => {
        const filtered = options.filter((option: any) =>
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
                            Who is the new Questionnaire for?
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
                                onClick={selectClient}
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
    );
};
