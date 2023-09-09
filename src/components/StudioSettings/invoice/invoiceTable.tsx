import Table from 'react-bootstrap/Table';
import Style from './invoice.module.css';

export const InvoiceTable = () => {

    return (
        <div>
            {/* <Table dataSource={data}>
                <Column className={Style['item-column']} title="Item Name" dataIndex="itemName" key="itemName" />
                <Column className={Style['item-column']} title="Hours" dataIndex="hours" key="hours" />
                <Column className={Style['item-column']} title="Price" dataIndex="price" key="price" />
                <Column className={Style['item-column']} title="Amount" dataIndex="amount" key="amount" />
            </Table> */}
            <Table >
                <thead>
                    <tr>
                        <th className={Style['item-heading']}>Item Name</th>
                        <th className={Style['item-heading']}>Hours</th>
                        <th className={Style['item-heading']}>Price</th>
                        <th className={Style['item-heading']}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Style['item-column']} >
                            <div className={Style['tableDiv']}>
                                <input type='text' className={Style['table-div']} style={{ width: '25vw' }} />
                            </div>
                        </td>
                        <td className={Style['item-column']}>
                            <div className={Style['tableDiv']}>
                                <input type='text' className={Style['table-div']} style={{ width: '10vw' }} />
                            </div>
                        </td>
                        <td className={Style['item-column']}>
                            <div className={Style['tableDiv']}>
                                <input type='text' className={Style['table-div']} style={{ width: '10vw' }} />
                            </div>                        </td>
                        <td className={Style['item-column']}>
                            <div className={Style['tableDiv']}>
                                <input type='text' className={Style['table-div']} style={{ width: '10vw' }} />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
