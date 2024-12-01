import { Row } from "antd";
import styled from "styled-components";
import { Input } from "antd";

export const WrapperHeader = styled(Row)`
  padding: 20px 120px;
  background-color: #000;
  align-items: center;
  gap: 20px;
  flex-wrap: nowrap;
`;

export const WrapperTextHeader = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;

export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
`;

export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap; 
`;
