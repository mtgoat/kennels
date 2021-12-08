import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

//You’ve likely performed data fetching, subscriptions, or manually changing the DOM from React components before. We call these operations “side effects” (or “effects” for short) because they can affect other components and can’t be done during rendering.The Effect Hook, useEffect, adds the ability to perform side effects from a function component.

export const AnimalList = () => {
  //The useContext hook allows you to use data structures and functions that a parent provider component exposes.
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)

  //The useEffect hook allows the component to reach out into the world for anything that cannot be handled during render. In this case, it is the API call for the animals.
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getAnimals()

  }, [])
//What is that empty array bracket?

// The dependency array. Logic within functions only occur when a function is invoked. Within a React component, useEffect is a function. After the return, useEffect is automatically invoked and since the dependency array is empty, it only runs the first time the component renders.

// You can include dependencies in the array to cause the useEffect to run additional times.

// Be careful setting state within the useEffect. State changes cause a re-render. Re-render can invoke useEffect (depending on the dependency array values). This would result in an infinate loop.

  return (
    <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {//Use the .map() array method to iterate the array of animals and generate HTML for each one by invoking the AnimalCard component function.
        animals.map(animal => {
          return <AnimalCard key={animal.id} animal={animal} />
        })
      }
      {console.log("animal map", animals.map)}
    </div>
  )
}
//Note that even though it looks like you are specifying an HTML component, you are actually invoking a function. Also, the key and animal arguments look like HTML attributes here, but they actually become properties on an object that gets passed as an argument.

//It is the equivalent of writing the following vanilla JS code.
// const properties = {
//   key: animal.id,
//   animal: animal
// }

// Animal(properties)