import React, { useState } from 'react';
import {Form, Input, InputNumber, Button, Upload, message, Breadcrumb, Row, Col} from 'antd';
import {ArrowLeftOutlined, UploadOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

const ProductCreate = () => {
  const [form] = Form.useForm();
  const [imageList, setImageList] = useState([]);

  const onFinish = (values) => {
    console.log('Ürün bilgileri:', values);
    console.log('Ürün resimleri:', imageList);
    
  };

  const handleChange = (info) => {
    if (info.file.status === 'done') {
      
      setImageList([...imageList, info.file.response.url]);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} yüklenirken hata oluştu.`);
    }
  };

  return (
    <div>
        <Breadcrumb>
          <Breadcrumb.Item>Anasyafa</Breadcrumb.Item>
          <Breadcrumb.Item>Ürün Listesi</Breadcrumb.Item>
          <Breadcrumb.Item>Ürün Oluştur</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col span={12}>
            <h1>Ürün Oluştur</h1>
          </Col>
          <Col span={12}>
            <Link type="default" to="/products" style={{float: "right"}} icon={<ArrowLeftOutlined/>}>
              Geri
            </Link>
          </Col>
        </Row>

      <Form
        form={form}
        name="product_create"
        onFinish={onFinish}
      >
        <Form.Item
          label="Ürün Adı"
          name="productName"
          rules={[{ required: true, message: 'Ürün adını giriniz!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Stok"
          name="stock"
          rules={[{ required: true, message: 'Stok miktarını giriniz!' }]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Fiyat"
          name="price"
          rules={[{ required: true, message: 'Ürün fiyatını giriniz!' }]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Ürün Resimleri"
          name="images"
          valuePropName="fileList"
          getValueFromEvent={(e) => e.fileList}
        >
          <Upload
            action="/api/upload" // Resim yükleme işlemi için API bağlantısı
            listType="picture-card"
            onChange={handleChange}
          >
            <div>
              <UploadOutlined />
              <div style={{ marginTop: 8 }}>Resim Yükle</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Kaydet
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductCreate;