import React, { ReactElement } from 'react'
import './index.css';
import { Form, Input, Button, Checkbox, Card, Row, Col, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Link } from "react-router-dom";

interface Props {

}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const { Header, Footer, Sider, Content } = Layout;

export default function Login({ }: Props): ReactElement {

    const onFinish = ({ values }: any) => {
        console.log('Success:', values);

    };

    const onFinishFailed = ({ errorInfo }: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Card title="Login">
            <Row justify="center" align="middle" style={{ minHeight: '80vh' }} >
                <Col md={{ span: 12, offset: 0 }} lg={{ span: 8, offset: 0 }}>
                    <Card style={{ textAlign: 'center' }} >
                        <Form

                            style={{ textAlign: 'center' }}
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    Forgot password
        </a>
                            </Form.Item>

                            <Form.Item>
                                <Link to="/dashboard">
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                </Button>
                                </Link>
                                 Or <a href="">register now!</a>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row >
        </Card>
    )
}
