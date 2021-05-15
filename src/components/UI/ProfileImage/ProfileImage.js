import React from "react";
import classes from "./ProfileImage.module.scss";

function ProfileImage({ src, alt, size = "small", ...restProps }) {
	const sizeClasses = {
		small: classes.Small,
		big: classes.Big,
	};
	return (
		<div className={`${classes.Container} ${sizeClasses[size]}`}>
			<img src={src} alt={alt} />
		</div>
	);
}

export default ProfileImage;
