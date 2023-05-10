import React from "react";
// Styles
import { Wrapper } from "./ForgotPassword.styles";
import { Link } from "react-router-dom";
import Button from "../Button";
import Error from "../Error";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema_forgot } from "./../../utils/authShema";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Input from "../Input";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_forgot),
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
          <h2>Forgot Password?</h2>
          <h3>No worries, we’ll send you reset instructions</h3>
        </div>
        <div className="formGroup">
          {errors?.email?.message && <Error>{errors.email.message}</Error>}
          <Input
            type="email"
            className="form-input"
            placeholder={"Email"}
            name={"email"}
            // value={loginInfo.email}
            schema={{ ...register("email") }}
            required
            // callFunc={onChangeValue}
          />
        </div>
        <div className="formFooter">
          <Button
            type="submit"
            className="btnPurple"
            title={"Send instructions"}
            mW={"268px"}
            align="center"
          />
          <Link to="/login">
            <Button
              type="submit"
              className="btnWhite"
              title={"Back to log in"}
              mW={"268px"}
              align="center"
            />
          </Link>
          <div className="formAsk">
            <span>Dont have account? </span>
            <Link to="/register">Sign up</Link>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default ForgotPassword;
