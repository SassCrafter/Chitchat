import React from "react";
import classes from "./PageAnimation.module.scss";
import { Image, AnimatedImage } from "../../index";

function PageAnimation() {
  const animationConfig = {
    ease: "sine.out",
    duration: 30,
    yoyo: true,
    repeat: -1,
  };
  return (
    <div className={classes.Container}>
      <div className={classes.MainCircle}></div>
      <div className={classes.TopCircle}></div>
      <div className={classes.RightTopCircle}></div>
      <Image
        className={classes.Login}
        src="/images/icons/login_message.png"
        alt="login icon"
      />
      <Image
        className={classes.Boy}
        src="/images/icons/boy.png"
        alt="boy icon"
      />
      <Image
        className={classes.Girl}
        src="/images/icons/girl.png"
        alt="girl icon"
      />
      <AnimatedImage
        className={classes.Heart}
        src="/images/icons/heart.png"
        alt="heart icon"
        config={{
          ...animationConfig,
          scale: 1.2,
          duration: 1.2,
        }}
      />
      <Image
        className={classes.Hash}
        src="/images/icons/hash.png"
        alt="hash icon"
      />
      <Image
        className={classes.HashTwo}
        src="/images/icons/hash.png"
        alt="hash icon"
      />
      <AnimatedImage
        className={classes.CloudOne}
        src="/images/icons/cloud_1.png"
        alt="cloud icon"
        config={{
          ...animationConfig,
          x: "+= 30vw",
          duration: 40,
        }}
      />
      <AnimatedImage
        className={classes.CloudTwo}
        src="/images/icons/cloud_2.png"
        alt="cloud icon"
        config={{
          ...animationConfig,
          x: "+= 40vw",
          duration: 80,
        }}
      />
      <AnimatedImage
        className={classes.CloudThree}
        src="/images/icons/cloud_3.png"
        alt="cloud icon"
        config={{
          ...animationConfig,
          x: "+= 10vw",
          duration: 20,
        }}
      />
    </div>
  );
}

export default PageAnimation;
