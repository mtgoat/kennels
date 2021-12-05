//props = properties, Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen. props name and 

import React from "react"

export const PropsAndState = ({ yourName }) => {

  return (
    <>
      <h3>Welcome, {yourName} </h3>
    </>
  )
}
