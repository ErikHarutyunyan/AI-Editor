import React, { useEffect } from "react";
// Styles
import { Wrapper } from "./Register.styles";
// Hooks
import useMediaQuery from "../../hooks/useMediaQuery";
// Components
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import { ImgWrapper } from "../../components/Image/Image.styles";
import { bgAuth, shapeReg1, shapeReg2 } from "../../components/Image/Image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema_signUp } from "../../utils/authShema";

import Input from "../../components/Input";
import Error from "../../components/Error";
import Button from "../../components/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { size } from "../../themes/Breakpoints";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../app/features/user/userActions";
import { Shape } from "../../themes/GlobalStyle";

const LeftScreen = () => {
  return (
    <ImgWrapper
      src={bgAuth}
      alt="bgAuth"
      width={"100%"}
      height={"100%"}
      objectFit={"cover"}
      loading={"lazy"}
    />
  );
};
const RightScreen = () => {
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema_signUp) });

  console.log("errors :", errors);
  const submitForm = (data) => {
    console.log("data :", data);
    debugger;
    // if (
    //   loginInfo.email !== "" &&
    //   loginInfo.password !== "" &&
    //   loginInfo.isChecked
    // ) {
    //   const { email, password, isChecked } = loginInfo;
    //   localStorage.setItem(
    //     "userRemember",
    //     JSON.stringify({
    //       email,
    //       password,
    //       isChecked,
    //     })
    //   );
    // }
    dispatch(registerUser(data));
    // TokenService.setUser(data);
    // Demonstration
    navigate("/login", { replace: true });
  };
  // useEffect(() => {
  //   if (userInfo) {
  //     navigate("/login", { replace: true });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [navigate, userInfo]);
  return (
    <Wrapper>
      <Shape position={"absolute"} right={"0"} top={"0px"}>
        <ImgWrapper
          src={shapeReg1}
          alt="bgAuth"
          width={"auto"}
          height={"auto"}
          objectFit={"contain"}
          loading={"lazy"}
        />
      </Shape>
      <Shape position={"absolute"} left={"0"} bottom={"0px"}>
        <ImgWrapper
          src={shapeReg2}
          alt="bgAuth"
          width={"auto"}
          height={"auto"}
          objectFit={"contain"}
          loading={"lazy"}
        />
      </Shape>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="formTitle">
          <h2>Welcome to Lethia</h2>
          <h3>Reach more fans with stunning video content</h3>
        </div>
        <div className="formWrapper">
          <div className="formGroup">
            {errors?.first_name?.message && (
              <Error>{errors.first_name.message}</Error>
            )}
            <Input
              type="text"
              className="form-input"
              placeholder={"First Name"}
              name={"firstName"}
              // value={loginInfo.email}
              schema={{ ...register("first_name") }}
              required
              // callFunc={onChangeValue}
            />
          </div>
          <div className="formGroup">
            {errors?.last_name?.message && (
              <Error>{errors.last_name.message}</Error>
            )}
            <Input
              type="text"
              className="form-input"
              placeholder={"Last Name"}
              name={"Last Name"}
              // value={loginInfo.email}
              schema={{ ...register("last_name") }}
              required
              // callFunc={onChangeValue}
            />
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
        </div>
        <div className="formFooter">
          <Button
            type="submit"
            className="btnPurple"
            disabled={loading}
            title={"Sign up"}
            mW={"268px"}
            align="center"
          />
          <div className="formAsk">
            <span>Already have an account? </span>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

const Register = () => {
  const isDesktop = useMediaQuery(`(min-width: ${size.tablet})`);
  return (
    <Wrapper>
      <SplitScreen leftWidth={isDesktop ? 5 : 0} rightWidth={6} h={"100vh"}>
        <LeftScreen />
        <RightScreen />
      </SplitScreen>
    </Wrapper>
  );
};

export default Register;
