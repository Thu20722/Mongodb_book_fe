import React from "react";
import { Row, Col, InputNumber, Button } from "antd";
import imageProduct from "../../assets/images/item5.png";
import {
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperAddressProduct,
  WrapperQualityProduct,
  WrapperInputNumber,
  WrapperDescriptionText,
} from "./style";
import {
  StarFilled,
  PlusOutlined,
  MinusOutlined,
  BugOutlined,
  TruckFilled,
} from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent.jsx";

const ProductDetailsComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", background: "#fff", borderRadius: "8px" }}>
      <Col span={7}>
        <img
          src={imageProduct}
          alt="image product"
          preview={false}
          style={{ borderRadius: "8px" }}
        />
      </Col>
      <Col span={10}>
        <WrapperStyleNameProduct>
          Make Believe BelieveBelieveBelieve
        </WrapperStyleNameProduct>
        <div>
          <StarFilled
            style={{ fontSize: "16px", color: "yellow", padding: "5px" }}
          />
          <StarFilled
            style={{ fontSize: "16px", color: "yellow", padding: "5px" }}
          />
          <StarFilled
            style={{ fontSize: "16px", color: "yellow", padding: "5px" }}
          />
          <StarFilled
            style={{ fontSize: "16px", color: "yellow", padding: "5px" }}
          />
          <StarFilled
            style={{ fontSize: "16px", color: "yellow", padding: "5px" }}
          />
          <WrapperStyleTextSell> Đã bán 1000+</WrapperStyleTextSell>
        </div>
        <div>
          <WrapperPriceText>
            200.000d <WrapperDiscountText>250.000d</WrapperDiscountText>{" "}
          </WrapperPriceText>
        </div>
        <WrapperAddressProduct>
          <span style={{ display: "block", marginBottom: "10px" }}>
            Thông tin vận chuyển:
          </span>
          <span className="address">
            <TruckFilled
              style={{
                fontSize: "24px",
                color: "rgb(255, 57, 69)",
                paddingRight: "10px",
              }}
            />
            48 Cao Thắng, Đà Nẵng
          </span>
          <span className="change-address">Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <WrapperDescriptionText>
          <span className="title">Mô tả sản phẩm</span>
          <span className="content">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </span>
        </WrapperDescriptionText>
      </Col>
      <Col
        span={7}
        style={{
          backgroundColor: "#f6f6f6",
          borderRadius: "6px",
          padding: "0px 24px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}>
        <div>
          <div
            style={{
              marginBottom: "12px",
              fontWeight: "500",
              fontSize: "16px ",
            }}>
            Số lượng
          </div>
          <WrapperQualityProduct>
            <MinusOutlined
              style={{
                borderRadius: "4px 0px 0px 4px ",
                borderRight: "1px solid #ccc",
                fontSize: "16px",
                padding: "10px 16px",
                background: "#fff",
                color: "#000",
                transition: "#fff 0.3s", // Hiệu ứng chuyển màu
              }}
            />
            <WrapperInputNumber
              min={1}
              max={10000}
              defaultValue={3}
              onChange={onChange}
              style={{
                border: "none",
              }}
            />
            <PlusOutlined
              style={{
                borderRadius: "0px 4px 4px 0px",
                borderLeft: "1px solid #ccc",
                fontSize: "16px",
                padding: "10px 16px",
                background: "#fff",
                color: "#000",
                transition: "#fff 0.3s", // Hiệu ứng chuyển màu
              }}
            />
          </WrapperQualityProduct>
        </div>
        <div
          style={{
            marginTop: "16px",
            display: "flex",
            justifyContent: "space-between",
          }}>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: "rgb(255, 57, 69)",
              height: "45px",
              width: "160px",
              border: "1px solid rgb(255, 57, 69)",
            }}
            textButton={"Mua ngay"}
            styleTextButton={{ color: "#fff" }}></ButtonComponent>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: "#fff",
              height: "45px",
              width: "160px",
              border: "1px solid rgb(255, 57, 69)",
            }}
            textButton={"Thanh toán sau"}
            styleTextButton={{ color: "rgb(255, 57, 69)" }}></ButtonComponent>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
