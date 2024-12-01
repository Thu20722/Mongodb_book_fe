import React from "react";
import {
  StyleNameProduct,
  WrapperReporText,
  WrapperPriceText,
  WrapperDiscountText,
  WrapperCardStyle,
  WrapperStyleTextSell,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import item1 from "../../assets/images/item1.png";
const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      styles={{
        header: { width: "200px", height: "200px" }, // Thay headStyle thành styles.header
        body: { padding: "10px" }, // Thay bodyStyle thành styles.body
      }}
      style={{ width: 260 }}
      cover={<img alt="example" src={item1} />}>
      <StyleNameProduct>Everybody’s somewhere</StyleNameProduct>
      <WrapperReporText>
        <span style={{ marginRight: "4px" }}>
          <span>4.5</span>
          <StarFilled
            style={{ fontSize: "12px", color: "yellow", padding: "5px" }}
          />
        </span>
        <WrapperStyleTextSell>Đã bán 500+</WrapperStyleTextSell>
      </WrapperReporText>
      <WrapperPriceText>
        250.000d
        <WrapperDiscountText
          style={{ textDecoration: "line-through", marginLeft: "8px" }}>
          300.000d
        </WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
