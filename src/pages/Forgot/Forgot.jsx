import React from "react";
// Styles
import { Wrapper } from "./Forgot.styles";
import { Shape } from "../../themes/GlobalStyle";
import { shapeForgot } from "../../components/Image/Image";
import { ImgWrapper } from "../../components/Image/Image.styles";
import ForgotPassword from "./../../components/ForgotPassword";
import CreatePassword from "../../components/CreatePassword/CreatePassword";
import PasswordUpdate from "../../components/PasswordUpdate";

const Forgot = () => {
  return (
    <Wrapper>
      <Shape position={"absolute"} right={"0"} top={"0px"}>
        <ImgWrapper
          src={shapeForgot}
          alt="bgForgot"
          width={"auto"}
          height={"auto"}
          objectFit={"contain"}
          loading={"lazy"}
        />
      </Shape>
      <ForgotPassword />
      {/* <CreatePassword /> */}
      {/* <PasswordUpdate /> */}
    </Wrapper>
  );
};

export default Forgot;
