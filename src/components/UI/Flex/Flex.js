import React from "react";
import classes from "./Flex.module.scss";

// function Flex(props) {
//   return (
//     <div
//       className={props.className}
//       style={{
//         display: props.container ? "flex" : "block",
//         justifyContent: props.justifyContent || "flex-start",
//         flexDirection: props.flexDirection || "row",
//         flexGrow: props.flexGrow || 0,
//         flexBasis: props.flexBasis || "auto",
//         flexShrink: props.flexShrink || 1,
//         flexWrap: props.flexWrap || "nowrap",
//         flex: props.flex || "0 1 auto",
//         alignItems: props.alignItems || "stretch",
//         margin: props.margin || "0",
//         padding: props.padding || "0",
//         width: props.width || "auto",
//         height: props.height || "auto",
//         maxWidth: props.maxWidth || "none",
//       }}
//     >
//       {props.children}
//     </div>
//   );
// }

function Flex({ children }) {
  return <div className={classes.Container}>{children}</div>;
}

Flex.Row = function FlexRow({ children, className, ...restProps }) {
  return (
    <div className={`${classes.Row} ${className || ""}`} {...restProps}>
      {children}
    </div>
  );
};

Flex.Column = function FlexColumn({ children, className, ...restProps }) {
  return (
    <div className={`${classes.Column} ${className || ""}`} {...restProps}>
      {children}
    </div>
  );
};

export default Flex;
