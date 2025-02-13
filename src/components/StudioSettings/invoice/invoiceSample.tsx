import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Style from './invoice.module.css';

export const InvoiceSample = () => {
    const [ client, setClient ] = useState('');
  return (
    <><div>
<Button variant='custom' className={Style.invoiceBack}>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
            <path d="M9 1L1 9L9 17" stroke="#EC1A25" />
          </svg> Back
        </Button>
    </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '30%' }}>
              <div className={Style.invoiceTitle}>
                  <h6>Who is the new invoice for?</h6>
              </div>
              <input className={Style.invoiceInput} placeholder='Type client name or email address'
                  value={client}
                  name='client'
                  onChange={(event) => setClient(event.target.value)}
              ></input>
              <div style={{ marginTop: '42px' }}>
                  <Button className={Style.nextButton} size='lg'>Next</Button>
              </div>
          </div></>
  )
}
