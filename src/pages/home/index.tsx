import './index.css';
import 'antd/dist/antd.css';
import React from 'react'
import { Switch, Route, Link, BrowserRouter, useLocation } from "react-router-dom";
import { Layout } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UploadOutlined,
    OrderedListOutlined,
    DashboardFilled,
    LogoutOutlined
} from '@ant-design/icons';


import { Drawer, Button, Radio, Space, Menu } from 'antd';

import Sider from "./../../components/Sider";
import { Dashboard } from '../dashboard';
import Todo from '../todo';


const style = {
    fontSize: "30px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

type ComponentType = {
    [k: number]: JSX.Element
}

const components: ComponentType = {
    1: <div style={style}>Página 1</div>,
    2: <div style={style}>Página 2</div>,
    3: <div style={style}>Página 3</div>,
};

const state = { visible: false, placement: 'left' };


export const Home: React.FC<{}> = () => {

    const { Header, Footer, Content } = Layout;
    const [collapsed, setCollapsed] = React.useState<boolean>(true)
    const [visible, setVisible] = React.useState<boolean>(false)
    const [render, updateRender] = React.useState<any>(1)
    let location = useLocation();

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }
    const showDrawer = () => {
        setVisible(!visible);
    };
    const getActiveItem = ({ key }: any) => {
        console.log('oiii', key);
        updateRender(key);
    };

    return (
        <React.Fragment>
            <Drawer
                title="Basic Drawer"
                placement='left'
                closable={false}
                onClose={showDrawer}
                visible={visible}
                key='left'
            >
                <Menu mode="inline" defaultSelectedKeys={[location.pathname]}>
                    <Menu.Item key="/dashboard" icon={<DashboardFilled />}>
                        <Link to='/dashboard'>Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="/todo" icon={<OrderedListOutlined />}>
                        <Link to='/todo'>Todo list</Link>
                    </Menu.Item>
                    <Menu.Item key="/login" icon={<LogoutOutlined />}>
                        <Link to='/login'>Logout</Link>
                    </Menu.Item>
                </Menu>
            </Drawer>
            <Route>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: showDrawer,
                        })}
                    </Header>
                    <Content >
                        {/*{components[render]}*/}
                        <Switch>
                            <Route path="/todo" component={Todo} />
                            <Route path="/dashboard" component={Dashboard} />
                        </Switch>
                    </Content>
                </Layout>
            </Route>
        </React.Fragment>
    )
}


