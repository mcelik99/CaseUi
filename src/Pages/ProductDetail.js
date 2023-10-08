import React, {useState, useEffect} from 'react';
import {Breadcrumb, Row, Col, Carousel, Button} from 'antd';
import {Link} from "react-router-dom";
import {ArrowLeftOutlined} from "@ant-design/icons";

const ProductDetail = () => {

    const [product, setProduct] = useState({
        name: "İphone 15",
        price: "150",
        stock: "85",
        pictureList: [
            {
                id: 1,
                uri: "https://source.unsplash.com/random/1500x400"
            },
            {
                id: 2,
                uri: "https://source.unsplash.com/collection/190727/1500x400"
            },
            {
                id: 3,
                uri: "https://source.unsplash.com/user/erondu/1500x400"
            },
            {
                id: 4,
                uri: "https://source.unsplash.com/WLUHO9A_xik/1500x400"
            }
        ]
    });

    useEffect(() => {
        //const dataProduct = {};
        //setProduct(dataProduct)
    }, []);


    const contentStyle = {
        height: "160px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79"
    }
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>Anasyafa</Breadcrumb.Item>
                <Breadcrumb.Item>Ürün Listesi</Breadcrumb.Item>
                <Breadcrumb.Item>Ürün Detay</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col span={12}>
                    <h1>Ürün :{product.name}</h1>
                </Col>
                <Col span={12}>
                    <Link type="default" to="/products" style={{float: "right"}} icon={<ArrowLeftOutlined/>}>
                        Geri
                    </Link>
                </Col>
            </Row>
            <h2>Ürün Fiyat : {product.price} TL</h2>
            <h2>Ürün Stok : {product.stock}</h2>
            <h2>Resim Listesi : </h2>
            <Carousel>
                {product.pictureList.map(img => (
                    <div key={img.id} style={contentStyle}>
                        <img src={img.uri} alt=""/>
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default ProductDetail;