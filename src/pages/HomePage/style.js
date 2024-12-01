import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: space-between;
    border-bottom: 1px solid #d9d9d9; 
    height: 44px;
    width: 100%;
`;

export const WrapperTypeProductItem = styled.div`
    padding: 0 16px;
    font-size: 13px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
`;

export const WrapperButtonMore = styled(ButtonComponent)`
    background-color: white;
    width: 100%;
    text-align: center;
    transition: all 0.3s ease; /* Tạo hiệu ứng mượt khi hover */


    &:hover {
        background-color: #f0f0f0; /* Màu nền khi hover */
        border: 1px solid #d9d9d9; /* Đường viền khi hover */
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Hiệu ứng đổ bóng khi hover */
    }
`;

export const WrapperProduct = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    gap: 38px;
`;
