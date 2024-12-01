import React from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import InputComponet from "../InputComponent/InputComponent";

const ButtonInputsearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "#fff",
    colorButton = "#000", // Đặt màu chữ mặc định là đen
  } = props;

  return (
    <div style={{ display: "flex" }}>
      <Input
        size={size}
        placeholder={placeholder}
        style={{
          borderRadius: "8px 0 0 8px", // Thay đổi hình dạng góc của border
          backgroundColor: backgroundColorInput,
          border: "none",
          borderRight: "1px solid #d9d9d9",
        }}
      />

      <Button
        size={size}
        icon={<SearchOutlined />}
        style={{
          borderRadius: "0px 8px 8px 0px",
          background: backgroundColorButton,
          border: !bordered ? "none" : "1px solid #d9d9d9", // Kiểm tra thuộc tính bordered
          color: colorButton,
          transition: "background-color 0.3s", // Hiệu ứng chuyển màu
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#f0f0f0")
        } // Màu nền khi hover
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = backgroundColorButton)
        } // Khôi phục màu nền
      >
        {textButton}
      </Button>
    </div>
  );
};

export default ButtonInputsearch;
