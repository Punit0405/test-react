import React, { FunctionComponent } from "react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Dashboard', '1', <i className="fa-regular fa-house"></i>),
    getItem('Clients', '2', <i className="fa-regular fa-user"></i>),
    getItem('Documents', 'sub1', <i className="fa-regular fa-file fa-rotate-180"></i>, [
        getItem('Invoices', '3'),
        getItem('Quotations', '4'),
        getItem('Questionnaires', '5'),
        getItem('Contracts', '6'),
    ]),
    getItem('Bookings', 'sub2', <i className="fa-regular fa-calendar"></i>,
        [getItem('Speciality', '7'),
        getItem('Calender', '8')]
    ),
    getItem('Payments', '9', <i className="fa-regular fa-circle-dollar"></i>),
    getItem('Templates', '10', <i className="fa-regular fa-grid-2"></i>)
];

const StudioManagementSide: FunctionComponent = () => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="demo-logo-vertical" />
            <Menu
                id="studio-sidebar"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={items}
            />
        </Sider>
    );
};

export default StudioManagementSide;