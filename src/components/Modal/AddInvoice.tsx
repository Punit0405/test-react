import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Style from './AddInvoice.module.css';
import Select, { components } from 'react-select';

const options = [
    { value: 'default', label: 'Type client name or email address', isDefault: true },
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

const CustomOption = ({ innerProps, label, isDefault }: any) => {
    // Add your default button here
    const handleButtonClick = () => {
        // Handle button click here
        console.log("Default Button Clicked");
    };

    return (
        <div {...innerProps}>
            {label}
            {isDefault && (
                <button onClick={handleButtonClick} className="default-button">
                    Default Button
                </button>
            )}
        </div>
    );
};

function AddInvoice(props: any) {

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
        <Modal
            fullscreen={true}
            {...props}
        >
            <button className={Style.backdiv} onClick={props.onHide}>
                <i className="fa-solid fa-chevron-left"></i><span>Back</span>
            </button>
            <Modal.Body className={Style.testdiv}>
                <>
                    <div style={{ display: 'flex', justifyContent: 'center', height: '75vh', alignItems: 'center' }}>
                        <div >
                            <div >
                                <h6 className={Style.invoiceTitle}>Who is the new invoice for?</h6>
                            </div>
                            <Select
                                value={selectedOption}
                                className={Style.invoiceInput}
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={filteredOptions}
                                components={{ Option: CustomOption }}
                            />
                            <div>
                                <Button variant='custom' className={Style.invoiceButton} size='lg'>Next</Button>
                            </div>

                        </div>
                    </div>
                </>
            </Modal.Body>
        </Modal>
    );
}

export default AddInvoice;
