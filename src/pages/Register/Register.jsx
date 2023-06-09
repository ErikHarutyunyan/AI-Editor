import React, { useEffect } from "react";
// Styles
import { Wrapper } from "./Register.styles";
// Hooks
import useMediaQuery from "../../hooks/useMediaQuery";
// Components
import SplitScreen from "../../components/SplitScreen/SplitScreen";
import { ImgWrapper } from "../../components/Image/Image.styles";
import {
  bgAuth,
  regImage3,
  regImage4,
  shapeReg1,
  shapeReg2,
  visual1,
  visual2,
} from "../../components/Image/Image";
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
import { AnimationUpDown, Shape } from "../../themes/GlobalStyle";
import Icon from "../../components/Icon";

const LeftScreen = () => {
  return (
    <div className="leftWrapper">
      <div className="leftContent">
        <div className="title">
          <h2>give your music the art it deserves.</h2>
        </div>
        <div className="sbuTitle">
          <h3>Unleash creativity with Lethia.</h3>
        </div>
        <div className="options">
          <div className="optionsWrapper">
            <Icon name={"checkPurple"} />
            <span>Spotify Canvas</span>
          </div>
          <div className="optionsWrapper">
            <Icon name={"checkPurple"} />
            <span>Music Videos</span>
          </div>
          <div className="optionsWrapper">
            <Icon name={"checkPurple"} />
            <span>Lyric Videos</span>
          </div>
          <div className="optionsWrapper">
            <Icon name={"checkPurple"} />
            <span>Visualizers</span>
          </div>
        </div>
        <div className="imgsWrapper">
          <AnimationUpDown second="1s" down="10px">
            <Shape position="relative">
              <ImgWrapper src={visual2} />
            </Shape>
          </AnimationUpDown>
          <AnimationUpDown second="1.2s" down="12px">
            <Shape position="relative" top="51px" left="-20px">
              <ImgWrapper src={visual1} />
            </Shape>
          </AnimationUpDown>
          <AnimationUpDown second="1.4s" down="14px">
            <Shape position="relative" left="-30px">
              <ImgWrapper src={regImage3} />
            </Shape>
          </AnimationUpDown>
          <AnimationUpDown second="1.6s" down="16px">
            <Shape position="relative" top="51px" left="-40px">
              <ImgWrapper src={regImage4} />
            </Shape>
          </AnimationUpDown>
        </div>
      </div>
    </div>
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
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="formTitle">
          <h2>Create Account</h2>
        </div>
        <div className="regSocial">
          <button className="btnSocial">
            <Icon name="google" width="32px" height="32px" />
            Sign up with Google
          </button>
          <button className="btnSocial">
            <Icon
              name="facebook"
              className="socialIcon"
              width="32px"
              height="32px"
            />
            Sign up with Facebook
          </button>
        </div>
        <div className="or">
          <div className="line"></div>
          <p>OR</p>
          <div className="line"></div>
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
            mW={"100%"}
            align="center"
          />
          <div className="formAsk">
            <span>Already have an account? </span>
            <Link to="/login">Sign In</Link>
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
      <SplitScreen leftWidth={isDesktop ? 6 : 0} rightWidth={6} h={"100vh"}>
        <LeftScreen />
        <RightScreen />
      </SplitScreen>
    </Wrapper>
  );
};

export default Register;
