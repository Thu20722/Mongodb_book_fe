import React from "react";

const InputComponet = (size, placeholder, bordered, style, ...rests) => {
  return (
    <Input
      size={size}
      placeholder={placeholder}
      bordered={bordered}
      style={style}
      {...rests}
    />
  );
};

export default InputComponet;
