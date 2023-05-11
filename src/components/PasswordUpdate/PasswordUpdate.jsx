import React from "react";
// Styles
import { Wrapper } from "./PasswordUpdate.styles";
import { passUpdate } from "../Image/Image";
import { ImgWrapper } from "./../Image/Image.styles";
import Button from "../Button";
const PasswordUpdate = () => {
  return (
    <Wrapper>
      <ImgWrapper
        src={passUpdate}
        alt="bgForgot"
        width={"auto"}
        height={"auto"}
        objectFit={"contain"}
        maxWidth={"102px"}
        loading={"lazy"}
        center
      />
      <h2>Password Updated</h2>
      <h3>Your password has been updated!</h3>
      <Button
        type="submit"
        className="btnPurple"
        title={"Login"}
        mW={"268px"}
        align="center"
      />
    </Wrapper>
  );
};

export default PasswordUpdate;
