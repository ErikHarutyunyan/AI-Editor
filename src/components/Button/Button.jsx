import React from "react";
// Styles
import { Wrapper } from "./Button.styles";
import { Link, NavLink } from "react-router-dom";

const Button = ({
  title = "",
  styleBtn = "default",
  type = "button",
  className = "",
  disabled = false,
  id = "",
  mW = "120px",
  align = "left",
  children,
  paddings = "",
  to = "",
}) => {
  if (to !== "") {
    return (
      <Wrapper styleBtn={styleBtn} mW={mW} align={align} paddings={paddings}>
        <NavLink to={to}>
          <button id={id} type={type} className={className} disabled={disabled}>
            {title}
            {children && children}
          </button>
        </NavLink>
      </Wrapper>
    );
  }

  return (
    <Wrapper styleBtn={styleBtn} mW={mW} align={align} paddings={paddings}>
      <button id={id} type={type} className={className} disabled={disabled}>
        {title}
        {children && children}
      </button>
    </Wrapper>
  );
};

export default Button;
