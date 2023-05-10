import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { userLogin } from "../../app/features/user/userActions";
import { schema_signIn } from "../../utils/authShema";
import TokenService from "../../services/token.service";

// Components
import Input from "../../components/Input";
import Error from "../../components/Error";
import Button from "../../components/Button";
// Images
import { bgAuth, shape1 } from "../../components/Image/Image";
import { ImgWrapper } from "../../components/Image/Image.styles";
// Layout
import SplitScreen from "../../components/SplitScreen/SplitScreen";
// Styles
import { Wrapper } from "./Login.styles.jsx";
// Hooks
import useMediaQuery from "../../hooks/useMediaQuery";
import { size } from "../../themes/Breakpoints";
import { Shape } from "../../themes/GlobalStyle";

// const rememberCheck = JSON.parse(localStorage.getItem("userRemember")) || {
//   email: "",
//   password: "",
//   isChecked: false,
// };

const LeftScreen = () => {
  // const [loginInfo, setLoginInfo] = useState({
  //   ...rememberCheck,
  // });
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_signIn),
  });

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate(fromPage, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, userInfo]);

  const submitForm = (data) => {
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
    dispatch(userLogin(data));
    TokenService.setUser(data);
    // Demonstration
    navigate(fromPage, { replace: true });
  };

  // const onChangeValue = useCallback(
  //   (event) => {
  //     setLoginInfo({
  //       ...loginInfo,
  //       [event.target.name]: event.target.value,
  //     });
  //   },
  //   [loginInfo]
  // );

  // const onChangeCheckbox = useCallback(
  //   (event) => {
  //     setLoginInfo({
  //       ...loginInfo,
  //       isChecked: event.target.checked,
  //     });
  //   },
  //   [loginInfo]
  // );

  return (
    <Wrapper>
      <Shape position={"absolute"} left={"0"} bottom={"38px"}>
        <ImgWrapper
          src={shape1}
          alt="bgAuth"
          width={"auto"}
          height={"auto"}
          objectFit={"contain"}
        />
      </Shape>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="formTitle">
          <h2>Welcome to Lethia</h2>
        </div>
        {error && <Error>{error}</Error>}
        {/*{errors && <Error msg={errors}/>}*/}
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
        <div className="formGroup">
          <Input
            styleInput={"check"}
            type={"checkbox"}
            name={"remember"}
            className="form-input"
            text={"Remember Me"}
            id={"rememberInput"}
            // callFunc={onChangeCheckbox}
          />
        </div>
        <div className="formForgot">
          <Link to={"/forgot"}>Forgot password</Link>
        </div>
        <div className="formFooter">
          <Button
            type="submit"
            className="btnPurple"
            disabled={loading}
            title={"Login"}
            mW={"268px"}
            align="center"
          />
          <div className="formAsk">
            <span>You don't have account? </span>
            <Link to="/register">Sign up</Link>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
const RightScreen = () => {
  return (
    <ImgWrapper
      src={bgAuth}
      alt="bgAuth"
      width={"100%"}
      height={"100%"}
      objectFit={"cover"}
    />
  );
};

const Login = () => {
  const isDesktop = useMediaQuery(`(min-width: ${size.tablet})`);
  return (
    <Wrapper>
      <SplitScreen leftWidth={6} rightWidth={isDesktop ? 5 : 0} h={"100vh"}>
        <LeftScreen />
        <RightScreen />
      </SplitScreen>
    </Wrapper>
  );
};

export default Login;
