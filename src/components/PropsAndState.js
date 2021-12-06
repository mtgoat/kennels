//props = properties, Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen. props name and 

import React from "react"
import ReactDOM from 'react-dom';
export const PropsAndState = ({ yourName }) => {

  return (
    <>
      <h3>Welcome, {yourName} </h3>
    </>
  )
}

// {/*<PropsAndState yourName={"Aki"}/> in Kennel.js. Aki is the prop   and the parent component is <PropAndState yourName={"Aki"}> and the child component is in PropsAndState.js //

//this is the same as the PropsAndState where the ReactDOM emement is a parent and fuction is a child component//
 function Welcome (props) {
  return <h3>Hello {props.name} </h3>
}

const element = <Welcome name="Aki"/>
ReactDOM.render(
  element, document.getElementById('rootTwo'))