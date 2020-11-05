import React, { ReactElement, useState } from 'react'
import { Form, Input, InputNumber, Button, Modal } from 'antd';
import "./index.css";

interface Props {
    visible: boolean
    clickHandler: (e: any) => any;
}
const ModalFormTodo: React.FC<Props> = (props) => {
    //const [visible, setModalVisible] = useState(true);
    const { visible, clickHandler } = props

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
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
    const onFinish = ({ values }: any) => {
        console.log(values);
    };
    return (
        <div className="modal-form-todo">
            <Modal
                title="Adicionar Tarefa"
                centered
                style={{ alignContent: 'left' }}
                visible={visible}
                onOk={() => clickHandler(false)}
                onCancel={() => clickHandler(false)}
            >
                <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Form.Item name={['user', 'introduction']} label="Descrição">
                        <Input.TextArea />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default ModalFormTodo
