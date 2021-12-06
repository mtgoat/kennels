import React, {useState} from "react"
import ReactDOM from 'react-dom';

//useState() is what the React team calls a hook. It is used to store data about the component. "My component has its own state to maintain. Therefore, I will use the State hook to store it." Every time state is updated, the component will re-render. 

export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(0)

  const handleClick = () => {
 //good practice:
    //make a copy of state, modifiy it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)

  } 

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick ={(handleClick)}> Click me</button>
    </>
  )
}

////props = properties, Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen. props name and 


//{/*<PropsAndState yourName={"Aki"}/> in Kennel.js. Aki is the prop   and the parent component is <PropAndState yourName={"Aki"}> and the child component is in PropsAndState.js //

//this is the same as the PropsAndState where the ReactDOM emement is a parent and fuction is a child component//
 function Welcome (props) {
  return <h3>Hello {props.name} </h3>
}

const element = <Welcome name="Aki"/>
ReactDOM.render(
  element, document.getElementById('rootTwo'))