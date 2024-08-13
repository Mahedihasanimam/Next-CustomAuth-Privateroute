'use client';

import React from 'react';
import { Button, Checkbox, Form, Input, Typography, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [form] = Form.useForm();
  const router=useRouter()
  const onFinish = async (values) => {
    const allData = {
      ...values,
      role: "user",
    };

    try {
      const res = await fetch(`http://localhost:3000/register/api`, {
        method: "POST",
        body: JSON.stringify(allData),
        headers: {
          "content-type": "application/json"
        }
      });

      if (res.status === 200) {
        // Handle successful response
        message.success('Registration successful!');
        router.push('/login')
      } else {
        // Handle errors
        message.error('Registration failed!');
      }
    } catch (error) {
      // Handle fetch errors
      message.error('An error occurred!');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="bg-[#1F2937] flex flex-col items-center justify-center h-screen">
      <div className="border p-12 mx-2 rounded-md text-white min-w-96">
        <Typography.Title style={{color:'white'}} className="font-bold text-4xl my-4">Register</Typography.Title>
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
            label={<Typography.Title level={5} style={{color:"white"}}>Name</Typography.Title>}
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your Name!',
              },
            ]}
          >
            <Input type='text' placeholder="your Name" style={{ width: '100%' }} />
          </Form.Item>
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
            <Input type='email' placeholder="your email" style={{ width: '100%' }} />
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
              Register
            </Button>
          </Form.Item>
        </Form>

        <Link href={'/login'}>Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default Register;
