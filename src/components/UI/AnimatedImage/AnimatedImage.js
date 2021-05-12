import React, { useRef, useEffect } from "react";
import classes from "./AnimatedImage.module.scss";
import { transition } from "../../../helpers/animation";

function AnimatedImage({
  className,
  src,
  alt = "image",
  config,
  ...restProps
}) {
  const containerRef = useRef(null);
  useEffect(() => {
    transition(containerRef.current, config);
  }, []);
  return (
    <div
      className={`${classes.Container} ${className || ""}`}
      ref={containerRef}
    >
      <img src={src} alt={alt} />
    </div>
  );
}

export default AnimatedImage;
