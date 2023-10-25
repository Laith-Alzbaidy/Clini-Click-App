import React from "react";

const Light = ({additionalStyles}) => {
  const defaultStyles = {
    width: "100%",
    border: "solid 1px #E8F3F1",
  }
  const mergedStyles = { ...defaultStyles, ...additionalStyles };
  return (
    <div
    style={mergedStyles}></div>
  )
}

export default Light