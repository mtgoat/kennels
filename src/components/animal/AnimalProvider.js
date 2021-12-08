import React, { useState, createContext } from "react"//The purpose of the provider is to establish AnimalContext that has each fetch calls as a value of AnimalContext.  The Animal Provider has a state hook with the kay and value paire - the key name is animal and value is a data from api.  getanimals and addanimals will update the value for the animal key.   And at ApplicationViews, any children compoment has an access to inside the AnimalProvider - children component is a prop and line 45 let the children have an access to the AnimalContext's content i.e. fetch calls  

// In the React library, there is a feature called the Context API. This API provides you with two critical functions.

// createContext() - Create the context to be used by other components that need data.
// useContext() - Used by UI components that need data stored in the context, and exposed by the provider component.




// The context is imported and used by individual components that need data
export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=location")
        .then(res => res.json())
        .then(setAnimals)
    }

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}
