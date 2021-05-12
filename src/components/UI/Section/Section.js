import React from "react";
import classes from "./Section.module.scss";

function Section({
  children,
  fullHeight,
  contentCenter,
  maxWidth,
  noContainer,
  containerClass,
}) {
  const sectionClasses = `${classes.Container} ${
    fullHeight ? classes.FullHeight : ""
  } ${contentCenter ? classes.ContentCenter : ""}`;
  return (
    <section className={sectionClasses}>
      {noContainer ? (
        children
      ) : (
        <div
          className={`container ${containerClass || ""}`}
          style={{ maxWidth }}
        >
          {children}
        </div>
      )}
    </section>
  );
}

export default Section;
