import { InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleNameProduct = styled.h2`
    color: #111111; /* Thay thế bằng mã màu hợp lệ */
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    word-break: break-word;
    margin: 10px 0px;
`;

export const WrapperStyleTextSell = styled.span`
    font-size: 14px;
    line-height: 24px;
    color: #7a7a7a;
`;

export const WrapperPriceText = styled.h2`
    color: #454545;
    font-size: 34px;
    font-weight: 400;
    margin:15px 0px;
`;

export const WrapperDiscountText = styled.span`
    color: #b7070a;
    font-size: 22px;
    font-weight: 400;
    text-decoration: line-through;
    margin-left: 8px;
`;

export const WrapperAddressProduct = styled.div`
    span.address {
        color: #313131;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }
    span.change-address {
        color: #3285f4;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        margin-left: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-decoration: underline;
    }
`;

export const WrapperQualityProduct = styled.div`
   display: flex;
   gap: 2px;
   align-items: center;
   border-radius: 2px;
   border: 1px solid #ccc;
   width: fit-content; 
   background: #fff;
`;

export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number {
        width: 40px;
        border: none;
        
        /* Remove outline and shadow */
        &:focus-visible,
        &:focus,
        &:hover,
        &.ant-input-number-focused {
            outline: none !important;
            box-shadow: none !important;
            border-color: transparent !important;
        }
    }

    .ant-input-number-handler-wrap {
        display: none;
    }

    input {
        outline: none !important;
        box-shadow: none !important;
        text-align: center; /* Căn giữa ngang */
        padding: 0;
        height: 100%; /* Đảm bảo input bao phủ toàn bộ chiều cao */
    }
`;

export const WrapperDescriptionText = styled.div`
    span.title {
        color: #454545;
        font-size: 16px;
        font-weight: 600;
        margin:15px 0px;
        display: block
    }
    span.content {
        color: #737373;
        font-size: 14px;
        font-weight: 400;
        margin:15px 0px;
    }
`