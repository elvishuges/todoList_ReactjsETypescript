import React, { ReactElement } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom';

import { Layout, Menu, Button } from "antd";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import { Home } from './../../pages/home';

interface SiderProps {
    collapsed: boolean,
    clickHandler: (e: any) => any;
}


const Sider: React.FC<SiderProps> = (props) => {

    const { Sider } = Layout;
    const { collapsed, clickHandler } = props
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item onClick={clickHandler} key="1" icon={<UserOutlined />}>
                    <Link to='/todo'>Account Settings</Link>
                </Menu.Item>
                <Menu.Item onClick={clickHandler} key="2" icon={<VideoCameraOutlined />}>
                    <Link to='/dashboard'>Dash</Link>
                </Menu.Item>
                <Menu.Item onClick={clickHandler} key="3" icon={<UploadOutlined />}>
                    nav 3
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Sider
