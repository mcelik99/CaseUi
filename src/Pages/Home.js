import React from 'react'
import {Card, Col, Row} from "antd";

export default function Home() {
    return (
        <>
            <Row>
                <Col span={12}>
                    <Card size="small" title="Yeni Ürün"  >
                        <h2>
                            İphone 15
                        </h2>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card size="small" title="Ayın En Çok Satan Ürünü" >
                        <h2>
                            Sony Vaio Laptop
                        </h2>
                    </Card>
                </Col>
            </Row>

        </>
    )
}
