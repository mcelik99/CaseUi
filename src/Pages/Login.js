import React, {useEffect, useState} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

const Login = () => {

    useEffect(() => {
        if (sessionStorage.getItem('MY_PROJECT_TOKEN')) {
            window.location.href = "/home";
        }
    }, []);

    const onFinish = (values) => {
        sessionStorage.setItem('MY_PROJECT_TOKEN', true);
        window.location.href = "/home";
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <Form
                name="login"
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    defaultValue="admin@admin.com"
                    rules={[{required: true, message: 'Kullanıcı adınızı giriniz!'}]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon"/>}
                        placeholder="Kullanıcı Adı"
                    />
                </Form.Item>
                <Form.Item
                    defaultValue="123456"
                    name="password"
                    rules={[{required: true, message: 'Parolanızı giriniz!'}]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Parola"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                        Giriş
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;