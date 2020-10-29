import React, { useState } from 'react'
import { Layout } from "antd";
import { Dispatch } from "redux"

export const Dashboard: React.FC = () => {

    const { Header, Footer, Sider, Content } = Layout;

    return (
        <React.Fragment>
            <Layout>
                Dash
            </Layout>
        </React.Fragment>
    )
}

