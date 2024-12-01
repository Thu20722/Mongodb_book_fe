import React, { Fragment } from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Row, Pagination, Col } from "antd";
import { WrapperNavBar, WrapperProduct } from "./style";

const TypeProductPage = () => {
  const onChange = () => {};
  return (
    <div style={{ padding: "0 120px", background: "#efefef" }}>
      <Row
        style={{
          flexWrap: "nowrap",
          paddingTop: "10px",
        }}>
        <WrapperNavBar span={5}>
          <NavbarComponent />
        </WrapperNavBar>
        <Col span={18}>
          <WrapperProduct>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProduct>
          <Pagination
            // showQuickJumper
            defaultCurrent={2}
            total={500}
            onChange={onChange}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
