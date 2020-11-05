
import React, { useState } from 'react'
import { Card, Col, Row, Layout, Progress } from 'antd';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
export const NotFoundPage: React.FC = () => {

    const { Header, Footer, Sider, Content } = Layout;

    return (
        <React.Fragment>

            <div className="error-page">
                <Result
                    status="403"
                    title="403"
                    subTitle="Sorry, you are not authorized to access this page."
                    extra={<Link to="/login"><Button type="primary">Back Home</Button></Link>}
                />
            </div>
        </React.Fragment>
    )
}

