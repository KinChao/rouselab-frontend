import { Card, Form, Input, Typography, Button } from 'antd'

const SignUpPage = () => {
  const [form] = Form.useForm()
  const handleFinish = (value) => {}

  return (
    <div className="grid place-content-center h-screen">
      <Card>
        <div className="grid place-content-center">
          <Typography.Title>Sign Up</Typography.Title>
        </div>
        <Form form={form} onFinish={handleFinish}>
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Confirm Password" name="confirmpassword">
            <Input.Password />
          </Form.Item>
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

export default SignUpPage