import React from "react";
// Styles
import { Wrapper } from "./CreatePassword.styles";
import { Link } from "react-router-dom";
import Button from "../Button";
import Error from "../Error";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema_resetPass } from "./../../utils/authShema";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Input from "../Input";

const CreatePassword = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_resetPass),
  });

  const submitForm = (data) => {
    console.log("data :", data);
    // dispatch(userLogin(data));
    // TokenService.setUser(data);
    // Demonstration
    // navigate(fromPage, { replace: true });
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="formTitle">
          <h2>Create Password</h2>
          <h3>Please enter your new password</h3>
        </div>
        <div className="formWrapper">
          <div className="formGroup">
            {errors?.password?.message && (
              <Error>{errors.password.message}</Error>
            )}
            <Input
              type="password"
              className="form-input"
              name={"password"}
              // value={loginInfo.password}
              placeholder={"Password"}
              schema={{ ...register("password") }}
              required
              // callFunc={onChangeValue}
            />
          </div>
          <div className="formGroup">
            {errors?.confirmPwd?.message && (
              <Error>{errors.confirmPwd.message}</Error>
            )}
            <Input
              type="password"
              className="form-input"
              name={"confirmPwd"}
              // value={loginInfo.password}
              placeholder={"Confirm New password"}
              schema={{ ...register("confirmPwd") }}
              required
              // callFunc={onChangeValue}
            />
          </div>
        </div>
        <div className="formFooter">
          <Button
            type="submit"
            className="btnPurple"
            title={"Reset password"}
            mW={"268px"}
            align="center"
          />
        </div>
      </form>
    </Wrapper>
  );
};

export default CreatePassword;
