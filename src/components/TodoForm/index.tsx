import * as React from "react"
import { Form, Input, Button, Col, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./TodoForm.css";

type Props = {
  saveTodo: (todo: Todo | any) => void
}

const TodoForm: React.FC<Props> = ({ saveTodo }) => {
  const [todo, setTodo] = React.useState<Todo | {}>()

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewTodo = (e: React.FormEvent) => {
    console.log("clicked", e);
    saveTodo(todo)
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={addNewTodo}
    >
      <Form.Item >
        <Row >
          <Col span={12} offset={5}>
            <Form.Item
              name="todoText"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input id="text" onChange={handleArticleData} type="text" placeholder="Texto" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button htmlType="submit" disabled={todo === undefined || null ? true : false} id="button" type="primary">Button</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  )
}

export default TodoForm