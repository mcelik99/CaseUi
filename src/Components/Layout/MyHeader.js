import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Sider } = Layout;

const MyHeader = () => {
  return (
    <Header className="custom-header">
      <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Ana Sayfa</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/user">Kullanıcı</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<LaptopOutlined />}>
          <Link to="/products">Ürünler</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<LaptopOutlined />}>
          <Link to="/products">Çıkış Yap</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default MyHeader;