import React from 'react';
import {List, Card, Button, Breadcrumb, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import {
    PlusOutlined,
} from '@ant-design/icons';

import {Space, Table, Tag} from 'antd';

const Products = () => {
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Ürün Adı',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Fiyat',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Stok',
            dataIndex: 'stock',
            key: 'stock',
        },


        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="default" onClick={()=>deleteProduct(record.id)}>
                        Sil
                    </Button>
                </Space>
            ),
        },
    ];

    const data = [
        {id: 1, name: 'İphone 15', price: 10, stock: 10},
        {id: 2, name: 'Laptop', price: 20, stock: 15},
        {id: 3, name: 'PlayStation', price: 30, stock: 20},
    ];

    const deleteProduct = (id) => {
        console.log(id);
    }

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>Anasyafa</Breadcrumb.Item>
                <Breadcrumb.Item>Ürün Listesi</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col span={12}>
                    <h1>Ürünler</h1>
                </Col>
                <Col span={12}>
                    <Link to="/create">
                        <Button type="primary" style={{float: "right"}} icon={<PlusOutlined/>}>
                            Ürün Oluştur
                        </Button>
                    </Link>
                </Col>
            </Row>

            <Table columns={columns} dataSource={data}/>
        </div>
    );
};

export default Products;