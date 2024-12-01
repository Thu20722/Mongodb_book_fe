import React, { useState, useEffect } from "react";
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
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingCombonent/Loading";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slides/userSlide";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoadingLocal, setIsLoadingLocal] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const mutation = useMutationHooks((data) => UserService.loginUser(data));

  const { isLoading, data, isSuccess } = mutation;

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      localStorage.setItem("access_token", JSON.stringify(data?.access_token));
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        console.log("decode", decoded);
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token);
        }
      }
    }
  }, [isSuccess]);

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };
  const handleNavigateSignUp = () => {
    navigate("/sign-up");
  };
  const handleSignIn = () => {
    mutation.mutate({
      email,
      password,
    });
    console.log("sign-in", email, password);
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
          <p style={{ fontSize: "14px" }}>Đăng nhập vào tài khoản</p>
          <InputForm
            style={{ marginBottom: "12px" }}
            placeholder="abc@gmail.com"
            value={email}
            onChange={handleOnchangeEmail}
          />
          <InputForm
            placeholder="Mật khẩu"
            type="password"
            value={password}
            onChange={handleOnchangePassword}
          />

          {/* <Input.Password placeholder="input password" /> */}
          {data?.status == "ERR" && (
            <span style={{ color: "red" }}>{data?.message}</span>
          )}
          <Loading isLoading={isLoadingLocal}>
            <ButtonComponent
              disabled={!email.length || !password.length || isLoadingLocal}
              onClick={handleSignIn}
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
              textButton={"Đăng nhập"}
              styleTextButton={{ color: "#fff" }}></ButtonComponent>
          </Loading>
          <p>
            <WrapperTextLight style={{ fontWeight: "500" }}>
              Quên mật khẩu?
            </WrapperTextLight>
          </p>
          <p style={{ fontSize: "12px" }}>
            Chưa có tài khoản?{" "}
            <WrapperTextLight
              style={{ fontWeight: "500" }}
              onClick={handleNavigateSignUp}>
              Tạo tài khoản
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

export default SignInPage;
