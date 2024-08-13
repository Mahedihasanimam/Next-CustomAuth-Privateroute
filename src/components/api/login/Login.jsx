'use client';

import React from 'react';
import { Button, Checkbox, Form, Input, Typography, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Login = () => {
  const [form] = Form.useForm();
  const router=useRouter()
  const onFinish = async (values) => {
    try {
      // Fetch all users from the API
      const response = await fetch('http://localhost:3000/login/api');
      const users = await response.json();
      
      // Check if the user exists and the password matches
      const user = users.find(user => user.email === values.email && user.password === values.password);
      
      if (user) {
        message.success('Login successful');
        localStorage.setItem('user',user.email)
        router.push('/')
      } else {
        message.error('Invalid email or password');
      }
      
      form.resetFields(); 
    } catch (error) {
      console.log('Error:', error);
      message.error('Something went wrong');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="bg-[#1F2937] flex flex-col items-center justify-center h-screen">
      <div className="border p-12 mx-2 rounded-md text-white min-w-96">
        <Typography.Title style={{color:'white'}} className="font-bold text-4xl my-4">Log In</Typography.Title>
        <Form
          form={form} 
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={<Typography.Title level={5} style={{color:"white"}}>Email</Typography.Title>}
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input type='Email' placeholder="your email" style={{ width: '100%' }} />
          </Form.Item>
          

          <Form.Item
             label={<Typography.Title level={5} style={{color:"white"}}>Password</Typography.Title>}
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
                whitespace: true,
              },
            ]}
          >
            <Input.Password placeholder="password" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="text-white text-xl">Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Log In
            </Button>
          </Form.Item>
        </Form>
        <Link href={'/register'}>Don't have an account? Register</Link>
      </div>
    </div>
  );
};

export default Login;
