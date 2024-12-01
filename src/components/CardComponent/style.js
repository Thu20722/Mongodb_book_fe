import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
  width: 260px;

   /* Chọn ảnh bìa bên trong Card và căn giữa */
  & > .ant-card-cover {
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
  }

 & > .ant-card-cover img {
    width: 90%;
    height: 95%; 
    object-fit: cover; 
    border-radius: 8px; /* Bo tròn cho ảnh */
  }
`;

export const StyleNameProduct = styled.div` 
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: rgb(56, 56, 61);
`;

export const WrapperReporText = styled.div`
  font-size: 11px;
  color: rgb(128, 128, 137);
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const WrapperPriceText = styled.div`
  color: #454545;
  font-size: 15px;
  font-weight: 500;
`;

export const WrapperDiscountText = styled.span`
  color: #b7070a;
  font-size: 13px;
  font-weight: 400;
  text-decoration: line-through;
  margin-left: 8px;
`;

export const WrapperStyleTextSell = styled.span`
    font-size: 14px;
    line-height: 24px;
    color: #7a7a7a;
`
