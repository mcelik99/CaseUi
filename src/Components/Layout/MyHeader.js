import React from 'react';
import {Button, Layout, Menu} from 'antd';
import {
    LaptopOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const {Header} = Layout;

function MyHeader() {
    const logout = () => {
        sessionStorage.removeItem("MY_PROJECT_TOKEN");
        window.location.href = "/login";
    }

    return (
        <Header className="custom-header">
            <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<HomeOutlined/>}>
                    <Link to="/">Ana Sayfa</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<LaptopOutlined/>}>
                    <Link to="/products">Ürünler</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<LaptopOutlined/>}>
                    <Button onClick={logout}>Çıkış Yap</Button>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default MyHeader;