import React from "react";
import {
  SignupForm,
  Logo,
  LeftPage,
  RightPage,
  PageContainer,
  PageAnimation,
} from "../components";

function Signup() {
  return (
    <PageContainer>
      <LeftPage className="p-2">
        <Logo size="big" className="mb-2" />
        <SignupForm />
      </LeftPage>
      <RightPage>
        <PageAnimation />
      </RightPage>
    </PageContainer>
  );
}

export default Signup;
