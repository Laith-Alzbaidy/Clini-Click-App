import React from 'react'

const Bold = ({additionalStyles}) => {
  const defaultStyles = {
    width: "100%",
    border: "solid 3px #E2E2E2",
  }
  const mergedStyles = { ...defaultStyles, ...additionalStyles };
  return (
    <div
    style={mergedStyles}></div>
  )
}

export default Bold