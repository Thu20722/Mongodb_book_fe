import React from "react";
import {
  WrapperLableText,
  WrapperTextValue,
  WrapperContent,
  WrapperTextPrice,
} from "./style";
import { Checkbox, Rate } from "antd";

const NavbarComponent = () => {
  const onChange = () => {};

  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option, index) => (
          <WrapperTextValue key={index}>{option}</WrapperTextValue>
        ));
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}>
            {options.map((option, index) => (
              <Checkbox
                key={index}
                style={{ marginLeft: 0 }}
                value={option.value}>
                {option.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option, index) => (
          <div key={index} style={{ display: "flex", gap: "8px" }}>
            <Rate style={{ fontSize: "12px" }} disabled defaultValue={option} />
            <span style={{ fontSize: "12px" }}>{`từ ${option} sao`}</span>
          </div>
        ));
      case "price":
        return options.map((option, index) => (
          <WrapperTextPrice key={index}>{option}</WrapperTextPrice>
        ));
      default:
        return null;
    }
  };

  return (
    <div>
      <WrapperLableText>Label</WrapperLableText>
      <WrapperContent>
        {renderContent("text", ["Other", "North Parade", "Quarto"])}
      </WrapperContent>
    </div>
  );
};

export default NavbarComponent;
