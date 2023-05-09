import React from "react";
// Styles
import { Wrapper } from "./Button.styles";

const Button = ({
  title = "Button",
  styleBtn = "default",
  type = "button",
  className = "",
  disabled = false,
  id = "",
  mW = "120px",
  align = "left",
}) => {
  return (
    <Wrapper styleBtn={styleBtn} mW={mW} align={align}>
      <button id={id} type={type} className={className} disabled={disabled}>
        {title}
      </button>
    </Wrapper>
  );
};

export default Button;
