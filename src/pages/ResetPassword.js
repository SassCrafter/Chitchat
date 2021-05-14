import React from "react";
import {
	ResetPasswordForm,
	Logo,
	LeftPage,
	RightPage,
	PageContainer,
	PageAnimation,
} from "../components/";

function ResetPassword() {
	return (
		<PageContainer>
			<LeftPage className="p-2">
				<Logo size="big" className="mb-2" />
				<ResetPasswordForm />
			</LeftPage>
			<RightPage>
				<PageAnimation />
			</RightPage>
		</PageContainer>
	);
}

export default ResetPassword;
