import React from "react";
// Styles
import { Wrapper } from "./Marquee.styles";
const Marquee = ({ text, className = "" }) => {
  return (
    <Wrapper className={className}>
      <div className="marquee">
        <div className="track">
          {[...new Array(20)].map((item, index) => (
            <div className="content" key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none">
                <circle cx="3" cy="3" r="3" fill="white" />
              </svg>
              {text}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Marquee;
