import React from "react";
// Styles
import { Wrapper } from "./CardCredit.styles";
import Icon from "../Icon";
import Button from "../Button";
const CardCredit = ({ count, price, sale, per }) => {
  return (
    <Wrapper>
      <div className="header">
        <span>{count} </span> <span> Credits</span>
      </div>
      <div className="body">
        <div className="prices">
          <Icon name="dollar" className="d" />
          <h3>{price}</h3>
          <span>{sale}</span>
        </div>
        <div className="perCredit">
          <p>
            $<span>{per}</span>per credit
          </p>
        </div>
        <Button mW="180px" className="btnArrow btnPurpleArrow" to="register">
          <span>Get Now</span>
          <Icon name="arrCirclePurple" />
        </Button>
      </div>
    </Wrapper>
  );
};

export default CardCredit;
