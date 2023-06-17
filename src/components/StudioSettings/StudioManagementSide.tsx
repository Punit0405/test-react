import React, { FunctionComponent } from "react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import type { MenuProps } from 'antd';
import { Link } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";

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
            trigger={null}
        >
            <div className="demo-logo-vertical" />
            <Menu
                id="studio-sidebar"
                mode="inline"
                defaultSelectedKeys={['dashboard']}
            // items={items}
            >
                <Menu.Item key="dashboard">
                    <Link to="dashboard">
                        <i className="fa-regular fa-house ant-menu-item-icon"></i>
                        <span className="ant-menu-title-content">Dashboard</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="clients">
                    <Link to="clients">
                        <i className="fa-regular fa-user ant-menu-item-icon"></i>
                        <span className="ant-menu-title-content">Clients</span>
                    </Link>
                </Menu.Item>
                <SubMenu
                    key="documents"
                    title={
                        <span>
                            <i className="fa-regular fa-file fa-rotate-180 ant-menu-item-icon"></i>
                            <span className="ant-menu-title-content">Documents</span>
                        </span>
                    }
                >
                    <Menu.Item key="invoices">
                        <Link to="invoices">
                            <i className="fa-regular fa-circle-dollar ant-menu-item-icon"></i>
                            <span className="ant-menu-title-content">Invoices</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="quotations">
                        <Link to="quotations">
                            <i className="fa-regular fa-circle-dollar ant-menu-item-icon"></i>
                            <span className="ant-menu-title-content">Quotations</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="questionnaires">
                        <Link to="questionnaires">
                            <i className="fa-regular fa-circle-dollar ant-menu-item-icon"></i>
                            <span className="ant-menu-title-content">Questionnaires</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="contracts">
                        <Link to="contracts">
                            <i className="fa-regular fa-circle-dollar ant-menu-item-icon"></i>
                            <span className="ant-menu-title-content">Contracts</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    key="bookings"
                    title={
                        <span>
                            <i className="fa-regular fa-calendar ant-menu-item-icon"></i>
                            <span className="ant-menu-title-content">Bookings</span>
                        </span>
                    }
                >
                    <Menu.Item key="speciality">
                        <Link to="speciality">
                            <i className="fa-regular fa-circle-dollar ant-menu-item-icon"></i>
                            <span className="ant-menu-title-content">Speciality</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="calender">
                        <Link to="calender">
                            <i className="fa-regular fa-circle-dollar ant-menu-item-icon"></i>
                            <span className="ant-menu-title-content">Calender</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="payments">
                    <Link to="payments">
                        <i className="fa-regular fa-circle-dollar ant-menu-item-icon"></i>
                        <span className="ant-menu-title-content">Payments</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="templates">
                    <Link to="templates">
                        <i className="fa-regular fa-grid-2 ant-menu-item-icon"></i>
                        <span className="ant-menu-title-content">Templates</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default StudioManagementSide;