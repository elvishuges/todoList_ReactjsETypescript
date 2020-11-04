import React, { useState } from 'react'
import { Card, Col, Row, Layout } from 'antd';
import { Dispatch } from "redux"

export const Dashboard: React.FC = () => {

    const { Header, Footer, Sider, Content } = Layout;


    return (
        <React.Fragment>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8} lg={8} xs={12}>
                        <Card hoverable={true} title="Card title" bordered={true}>
                            Card content
                            </Card>
                    </Col>
                    <Col span={8} lg={8} xs={12}>
                        <Card hoverable={true} title="Card title" bordered={true}>
                            Card content
                            </Card>
                    </Col>
                    <Col span={8} lg={8} xs={24}>
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

