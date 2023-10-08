import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    sessionStorage.setItem('MY_PROJECT_TOKEN',true);
    
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Kullanıcı adınızı giriniz!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Kullanıcı Adı"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Parolanızı giriniz!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Parola"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Beni Hatırla</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>
            Giriş
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;