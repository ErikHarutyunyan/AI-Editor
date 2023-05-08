import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { userLogin } from "../../app/features/user/userActions";
import { schema_signIn } from "../../utils/authShema";
import TokenService from "../../services/token.service";

// Images
import { bgAuth } from "../../components/Image/Image";
import { ImgWrapper } from "../../components/Image/Image.styles";
// Layout
import { Wrapper } from "./Login.styles.jsx";
import Input from "../../components/Input";
import SplitScreen from "./../../components/LayoutComponents/SplitScreen";

const LeftScreen = () => {
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
    mode: "onSubmit",
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
    debugger;
    dispatch(userLogin(data));
    TokenService.setUser(data);
    // Demonstration
    navigate(fromPage, { replace: true });
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {error && <p>{error}</p>}
      {/* {errors && <Error msg={errors} />} */}
      <div className="form-group">
        {errors?.email?.message && <p>{errors.email.message}</p>}
        {/*<label htmlFor="email">Email</label>*/}
        <Input
          type="text"
          className="form-input"
          place={"Email"}
          name={"emailUser"}
          schema={{ ...register("email") }}
          required
        />
      </div>
      <div className="form-group">
        {errors?.password?.message && <p>{errors.password.message}</p>}
        {/*<label htmlFor="password">Password</label>*/}
        <Input
          type="password"
          className="form-input"
          name={"passUser"}
          place={"Password"}
          schema={{ ...register("password") }}
          required
        />
      </div>
      <button type="submit" className="button" disabled={loading}>
        Login
      </button>
    </form>
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
  return (
    <Wrapper>
      <SplitScreen leftWidth={6} rightWidth={5} h={"100vh"}>
        <LeftScreen />
        <RightScreen />
      </SplitScreen>
    </Wrapper>
  );
};

export default Login;
