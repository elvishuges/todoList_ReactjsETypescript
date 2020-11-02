import React, { ReactElement } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useLocation
} from 'react-router-dom';

import { Layout, Menu, Button } from "antd";
import {
    UploadOutlined,
    OrderedListOutlined,
    DashboardFilled,
    LogoutOutlined
} from '@ant-design/icons';

import { Home } from './../../pages/home';

interface SiderProps {
    collapsed: boolean,
    clickHandler: (e: any) => any;
}


const Sider: React.FC<SiderProps> = (props) => {

    const { Sider } = Layout;
    const { collapsed, clickHandler } = props
    let location = useLocation();

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
                <Menu.Item onClick={clickHandler} key="/dashboard" icon={<DashboardFilled />}>
                    <Link to='/dashboard'>Dashboard</Link>
                </Menu.Item>
                <Menu.Item onClick={clickHandler} key="/todo" icon={<OrderedListOutlined />}>
                    <Link to='/todo'>Todo list</Link>
                </Menu.Item>
                <Menu.Item onClick={clickHandler} key="/login" icon={<LogoutOutlined />}>
                    <Link to='/login'>Logout</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Sider
