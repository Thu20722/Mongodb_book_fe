// import React from "react";
// import { Button } from "antd";

// const ButtonComponent = ({
//   size,
//   styleButton,
//   styleTextButton,
//   textButton,
//   ...rests
// }) => {
//   return (
//     <Button size={size} style={styleButton} {...rests}>
//       <span style={styleTextButton}>{textButton}</span>
//     </Button>
//   );
// };

// export default ButtonComponent;

import React from "react";
import { Button } from "antd";

const ButtonComponent = ({
  size,
  styleButton,
  styleTextButton,
  textButton,
  bordered,
  disabled,
  ...rests
}) => {
  const mergedStyle = {
    ...styleButton,
    border: bordered ? "1px solid #000" : undefined,
    background: disabled ? "#5C5B5B" : styleButton.background,
  };

  return (
    <Button size={size} style={mergedStyle} disabled={disabled} {...rests}>
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  );
};

export default ButtonComponent;
