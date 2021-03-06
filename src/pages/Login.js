import React from "react";
import {
  LoginForm,
  Logo,
  LeftPage,
  RightPage,
  PageContainer,
  PageAnimation,
} from "../components/";

function Login() {
  return (
    <PageContainer>
      <LeftPage className="p-2">
        <Logo size="big" className="mb-2" />
        <LoginForm />
      </LeftPage>
      <RightPage>
        <PageAnimation />
      </RightPage>
    </PageContainer>
  );
}

export default Login;
