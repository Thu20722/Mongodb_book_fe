import React from "react";
import { Col, Input } from "antd";
import {
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from "./style";
import ButtonInputsearch from "../ButtonInputSearch/ButtonInputSearch";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };
  console.log("user", user);
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>BOOKSTORE</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputsearch
            size="default"
            textButton="Tìm kiếm"
            placeholder="input search text"
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "24px" }} />
            {user?.name?.trim() ? (
              // Nếu có tên người dùng, hiển thị tên người dùng
              <div style={{ cursor: "pointer" }}>{user.name}</div>
            ) : (
              // Nếu không có tên người dùng (hoặc là chuỗi rỗng), hiển thị đăng nhập/đăng ký
              <div onClick={handleNavigateLogin} style={{ cursor: "pointer" }}>
                <WrapperTextHeaderSmall>
                  Đăng nhập/Đăng ký
                </WrapperTextHeaderSmall>
                <div>
                  <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                  <CaretDownOutlined />
                </div>
              </div>
            )}
          </WrapperHeaderAccount>

          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Badge count={4} size="small">
                <ShoppingOutlined
                  style={{
                    fontSize: "24px",
                    color: "#fff",
                  }}
                />
              </Badge>
              <WrapperTextHeaderSmall style={{ marginLeft: "8px" }}>
                Giỏ hàng
              </WrapperTextHeaderSmall>
            </div>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
