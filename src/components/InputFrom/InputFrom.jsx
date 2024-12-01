// import React from "react";
// import { WrapperInputStyle } from "./style";

// const InputForm = (props) => {
//   const { placeholder = "Nhập text", type = "text", ...rests } = props;

//   const handleOnchangeInput = (e) => {
//     props.onChange(e.target.value);
//   };
//   return (
//     <WrapperInputStyle
//       placeholder={placeholder}
//       type={type}
//       valueInput={props.value}
//       {...rests}
//       onChange={handleOnchangeInput}
//     />
//   );
// };

// export default InputForm;

import React from "react";
import { WrapperInputStyle } from "./style";

const InputForm = (props) => {
  const {
    placeholder = "Nhập text",
    type = "text",
    value,
    onChange,
    ...rests
  } = props;

  const handleOnchangeInput = (e) => {
    // Gọi handleOnchange để thông báo giá trị mới cho parent component
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <WrapperInputStyle
      placeholder={placeholder}
      type={type}
      value={value}
      {...rests}
      onChange={handleOnchangeInput}
    />
  );
};

export default InputForm;
