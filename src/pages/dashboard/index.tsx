
import React, { useState } from 'react'
import { Card, Col, Row, Layout, Progress } from 'antd';
import './index.css';

export const Dashboard: React.FC = () => {

    const { Header, Footer, Sider, Content } = Layout;

    return (
        <React.Fragment>

            <div className="dashboard-card-wrapper">
                <Row gutter={[19, 10]}>
                    <Col span={8} lg={8} sm={12} xs={24}>
                        <Card hoverable={true} title="Progresso" bordered={true}>
                            <Row justify="center" align="middle" >
                                <Col span={8}><Progress type="circle" percent={30} width={60} /></Col>
                                <Col span={8}><Progress type="circle" percent={30} width={60} /></Col>
                                <Col span={8}><Progress type="circle" percent={30} width={60} /></Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={8} lg={8} sm={12} xs={24}>
                        <Card hoverable={true} title="Card title" bordered={true}>
                            Card content
                            </Card>
                    </Col>
                    <Col span={8} lg={8} sm={24} xs={24}>
                        <Card hoverable={true} title="Card title" bordered={true}>
                            Card content
                            </Card>
                    </Col>
                </Row>

                <Row gutter={12}>
                    <Col span={8} xs={24}>
                        <Card title="Estatisticas" bordered={true}>
                            Card content
                            </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

