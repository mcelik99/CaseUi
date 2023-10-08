import React from 'react';
import {List, Card, Button} from 'antd';
import {Link} from 'react-router-dom';

const Products = () => {
    const products = [
        {id: 1, name: 'Ürün 1', price: 10},
        {id: 2, name: 'Ürün 2', price: 20},
        {id: 3, name: 'Ürün 3', price: 30},
    ];

    return (
        <div>
            <h1>Ürünler</h1>
            <Link to="/create">
                <Button type="primary">Ürün Oluştur</Button>
            </Link>
            <List
                itemLayout="vertical"
                dataSource={products}
                renderItem={(product) => (
                    <List.Item>
                        <Card title={product.name}>
                            <p>Fiyat: {product.price} TL</p>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Products;