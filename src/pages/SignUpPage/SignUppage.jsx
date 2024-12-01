import React, { useEffect, useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputForm from "../../components/InputFrom/InputFrom";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from "../../assets/images/login.jpg";
import { Divider, Flex, Image } from "antd";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingCombonent/Loading";
import * as message from "../../components/Message/Message";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoadingLocal, setIsLoadingLocal] = useState(false);

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };

  const mutation = useMutationHooks((data) => UserService.signupUser(data));

  const { data, isLoading, isSuccess, isError } = mutation;

  useEffect(() => {
    if (isSuccess) {
      message.success();
      handleNavigateSignIn();
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError]);

  const handleOnchangePassword = (value) => {
    setPassword(value);
  };
  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };
  const handleNavigateSignIn = () => {
    navigate("/sign-in");
  };

  const handleSignUp = () => {
    mutation.mutate({ email, password, confirmPassword });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}>
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "8px",
          background: "#fff",
          display: "flex",
        }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p style={{ fontSize: "16px" }}>Đăng nhập vào tài khoản</p>
          <InputForm
            style={{ marginBottom: "12px" }}
            placeholder="abc@gmail.com"
            value={email}
            onChange={handleOnchangeEmail}
          />
          <InputForm
            style={{ marginBottom: "12px" }}
            placeholder="password"
            type="password"
            value={password}
            onChange={handleOnchangePassword}
          />
          <InputForm
            placeholder="comfirm-password"
            type="password"
            value={confirmPassword}
            onChange={handleOnchangeConfirmPassword}
          />
          {data?.status == "ERR" && (
            <span style={{ color: "red" }}>{data?.message}</span>
          )}
          <Loading isLoading={isLoadingLocal}>
            <ButtonComponent
              disabled={
                !email.length ||
                !password.length ||
                !confirmPassword.length ||
                isLoadingLocal
              }
              onClick={handleSignUp}
              bordered={false}
              size={40}
              styleButton={{
                background: "#000",
                height: "40px",
                width: "100%",
                border: "1px solid #000",
                borderRadius: "8px",
                margin: "26px 0 10px",
              }}
              textButton={"Đăng ký"}
              styleTextButton={{ color: "#fff" }}></ButtonComponent>
          </Loading>
          {/* <p>
            <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
          </p> */}
          <p style={{ fontSize: "12px" }}>
            Bạn đã có tài khoản?{" "}
            <WrapperTextLight
              style={{ fontWeight: "500" }}
              onClick={handleNavigateSignIn}>
              Đăng nhập
            </WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="image-logo"
            height="220px"
            width="220px"
            style={{ borderRadius: "150px" }}
          />
          <h4>Khám phá điều thú vị của sách tại BOOKSTORE</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpPage;
