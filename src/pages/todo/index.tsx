import { ReactComponent } from '*.svg';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import React, { useState } from 'react'
import { Layout, Row, Col, Card, Menu, Dropdown } from "antd";
import { SettingOutlined, DownOutlined, PlusCircleFilled } from '@ant-design/icons';
import TodoList from './../../components/TodoList';
import ModalFormTodo from '../../components/ModalFormTodo';
import "./index.css";
import { Dispatch } from "redux"
import { addTodo, togleTodo } from './../../store/actionsCreators';

interface e {
    e: boolean
}

const Drop = () => {
    const [visible, setVisible] = React.useState<boolean>(false)
    const [modalVisible, setModalVisible] = React.useState<boolean>(true)

    const handleMenuItemModal = ({ e }: e) => {
        setModalVisible(e)
    }

    const handleVisibleChange = () => {
        setVisible(!visible);
    };

    const menu = (
        <Menu  >
            <Menu.Item onClick={() => handleMenuItemModal({ e: true })} key="1">Adicionar</Menu.Item>
            <Menu.Item key="2">Atualizar</Menu.Item>
        </Menu>
    );
    return (
        <div>
            <ModalFormTodo visible={modalVisible} clickHandler={handleMenuItemModal} />
            <Dropdown onVisibleChange={handleVisibleChange} overlay={menu} visible={visible}>
                <a onClick={e => e.preventDefault()}>
                    <PlusCircleFilled />
                </a>
            </Dropdown>
        </div>

    )
}

const Todo: React.FC = () => {

    const todos: Todo[] = useSelector(
        (state: TodoState) => state.todos,
        shallowEqual
    )

    const dispatch: Dispatch<any> = useDispatch()
    const saveTodo = React.useCallback(
        (todo: Todo) => dispatch(addTodo(todo)),
        [dispatch]
    )
    const togleTodos = React.useCallback(
        (todo: Todo) => dispatch(togleTodo(todo)),
        [dispatch]
    )

    return (
        <React.Fragment>
            <div className="todoList-card-wrapper">
                <Layout>
                    <Row gutter={12}>
                        <Col span={8} xs={24}>
                            <Card title="Tarefas" extra={Drop()} >
                                <TodoList togleTodo={togleTodos} todoList={todos} />
                            </Card>
                        </Col>
                    </Row>
                </Layout>
            </div>
        </React.Fragment>
    )
}

export default Todo;