import { Card, Form, Input, Typography, Button } from 'antd'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [form] = Form.useForm()
  const handleFinish = (value) => {}

  return (
    <div className="grid place-content-center h-screen">
      <Card>
        <div className="grid place-content-center">
          <Typography.Title>Login</Typography.Title>
        </div>
        <Form form={form} onFinish={handleFinish}>
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
          <Typography.Text>
            Haven't register? <Link to="/signup">Sign Up</Link>here
          </Typography.Text>
          <Form.Item>
            <div className='grid place-content-center'>
            <Button onClick={form.submit}> Submit</Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default LoginPage
