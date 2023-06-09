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
import Icon from "../../components/Icon";

// const rememberCheck = JSON.parse(localStorage.getItem("userRemember")) || {
//   email: "",
//   password: "",
//   isChecked: false,
// };

const Login = () => {
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
    // TokenService.setUser(data);
    // Demonstration
    // navigate(fromPage, { replace: true });
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
      <div className="formWrapper">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="formTitle">
            <h2>Sign In</h2>
          </div>
          {/* {error && <Error>{error}</Error>}
        {errors && <Error msg={errors}/>} */}
          <div className="formGroup">
            {errors?.email?.message && <Error>{errors.email.message}</Error>}
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              className="form-input"
              placeholder={"Insert your email here"}
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
            <label htmlFor="password">Password</label>
            <Input
              id="password"
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
          <div className="formGroup remember">
            <Input
              styleInput={"check"}
              type={"checkbox"}
              name={"remember"}
              className="form-input"
              text={"Remember Me"}
              id={"rememberInput"}
            />

            <div className="formForgot">
              <Link to={"/forgot"}>Forgot password</Link>
            </div>
          </div>

          <div className="formFooter">
            <Button
              type="submit"
              className="btnPurple"
              disabled={loading}
              title={"Log In"}
              mW={"100%"}
              align="center"
            />
            <div className="formAsk">
              <p>Sign in with</p>
              <div className="logSocial">
                <button className="btnSocial">
                  <Icon name="google" />
                </button>
                <button className="btnSocial">
                  <Icon name="facebook" className="socialIcon" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;
