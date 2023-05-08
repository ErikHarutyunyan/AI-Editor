import React from "react";
// Styles
import { DefaultWrapper } from "./Input.styles";

const Input = ({
  style = "default",
  type = "",
  place = "",
  val = "",
  nam = "",
  schema = null,
  className = "",
  callFunc = () => {},
}) => {
  if (style === "default")
    return (
      <DefaultWrapper>
        <input
          className={className}
          type={type}
          placeholder={place}
          // value={val}
          name={nam}
          {...schema}
          // onChange={callFunc}
        />
      </DefaultWrapper>
    );
};

export default Input;
