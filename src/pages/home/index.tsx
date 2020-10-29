import './index.css';
import 'antd/dist/antd.css';
import React from 'react'
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

import Sider from "./../../components/Sider";


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


export const Home: React.FC<{}> = () => {

    const { Header, Footer, Content } = Layout;
    const [collapsed, setCollapsed] = React.useState<boolean>(true)
    const [render, updateRender] = React.useState<any>(1)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }
    const getActiveItem = ({ key }: any) => {
        console.log('oiii', key);
        updateRender(key);
    };

    return (
        <React.Fragment>
            <BrowserRouter>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsed={collapsed} clickHandler={getActiveItem} />
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: toggleCollapsed,
                            })}
                        </Header>
                        <Layout>
                            <Content
                                className="site-layout-background"
                                style={{
                                    margin: '24px 16px',
                                    padding: 24,
                                    minHeight: 280,
                                }}
                            >
                                {/*{components[render]}*/}
                                <Switch>
                                    <Route exact path="/todo" />
                                    <Route exact path="/dashboard" />
                                </Switch>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </BrowserRouter>
        </React.Fragment>
    )
}


