import React from 'react'
import { Button } from 'react-bootstrap';
import Style from './invoice.module.css';

export const InvoiceOption = () => {
    return (
        <><div>
            <Button variant='custom' className={Style.invoiceBack}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                    <path d="M9 1L1 9L9 17" stroke="#EC1A25" />
                </svg> Back
            </Button>
        </div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '30%' }}>

                <div className={Style.invoiceTitle}>
                    <h6>Who is the new invoice for?</h6>
                </div>
                <input className={Style.invoiceInput} placeholder='Type client name or email address'></input>
                <div className={Style.invoiceClient}>
                    <Button variant='custom' size='lg'><svg style={{ marginRight: '21px', height: '24px', width: '24px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 4V20M20 12L4 12" stroke="#EC1A25" stroke-width="2" stroke-linecap="round" />
                    </svg>    Add new client</Button>
                </div>
                <div className={Style.invoiceClient}>
                    <Button variant='custom' size='lg'><svg style={{ marginRight: '18px', height: '30px', width: '30px' }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <circle cx="15" cy="15" r="15" fill="#F9B91B" />
                    </svg>  Sample Client</Button>
                </div>
            </div></>
    )
}
