import { Table, Tag } from 'antd';
import Style from './invoice.module.css';
const { Column } = Table;

export const InvoiceTable = () => {

    interface DataType {
        key: React.Key;
        itemName: string;
        hours: string;
        price: number;
        amount: string;
    }

    const data: DataType[] = [
        {
            key: '1',
            itemName: 'John',
            hours: 'Brown',
            price: 32,
            amount: 'New York No. 1 Lake Park'
        }
    ];
    return (
        <div>
            <Table dataSource={data}>
                <Column className={Style['item-column']} title="Item Name" dataIndex="itemName" key="itemName" />
                <Column className={Style['item-column']} title="Hours" dataIndex="hours" key="hours" />
                <Column className={Style['item-column']} title="Price" dataIndex="price" key="price" />
                <Column className={Style['item-column']} title="Amount" dataIndex="amount" key="amount" />
            </Table>
        </div>
    )
}
