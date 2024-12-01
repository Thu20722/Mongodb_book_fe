import styled from "styled-components";
import {Col} from 'antd';

export const WrapperProduct = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    gap: 20px;
`;

export const WrapperNavBar = styled(Col)`
    background: #fff;
    margin-right: 50px;
    padding: 10px;
    border-radius: 6px;
    margin-top: 10px;
    height: fit-content;
`;
