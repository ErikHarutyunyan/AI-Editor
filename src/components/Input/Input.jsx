import React from "react";
// Styles
import {CheckWrapper, DefaultWrapper} from "./Input.styles";

const Input = ({
                 styleInput = "default",
                 type = "",
                 placeholder = "",
                 value = "",
                 name = "",
                 schema = null,
                 className = "",
                 id = "",
                 text = "",
                 callFunc = () => {
                 },
               }) => {
  if (styleInput === "default")
    return (
      <DefaultWrapper>
        <input
          className={className}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          {...schema}
          onChange={callFunc}
        />
      </DefaultWrapper>
    );
  if (styleInput === "check")
    return (
      <CheckWrapper>
        <label className="container" htmlFor={id}>
          <input type={type} id={id} name={name} className={className} onChange={callFunc} aria-label="check"/>
          {text}
        </label>
      </CheckWrapper>
    );
};

export default Input;
