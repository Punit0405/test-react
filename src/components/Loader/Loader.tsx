import { Spinner } from "react-bootstrap";
import { Alert, Space, Spin } from 'antd';
import { Backdrop } from '@mui/material';

const Loader = () => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <Space direction="vertical" style={{ width: '100%' }}>
                <Spin tip="Loading" size="large">
                    <div className="content" />
                </Spin>
            </Space>
        </Backdrop>
    );
};

export default Loader;
