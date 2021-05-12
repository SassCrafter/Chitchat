import gsap from "gsap";

export const transition = (el, configObj) => {
  const config = configObj || {};
  gsap.to(el, config);
};

export const translateX = (
  el,
  x = "+=50",
  duration = 1,
  ease = "none",
  yoyo = true,
  repeat = -1
) => {
  gsap.to(el, {
    x,
    duration,
    ease,
    yoyo,
    repeat,
  });
};
