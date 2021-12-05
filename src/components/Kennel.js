import React from "react";
import { AnimalCard } from "./animal/AnimalCard";
import "./Kennel.css"
//HTML like code is JSX: Kennel is a compoment and it is a factory fuction, which is a fuction that returns an object  

/* a set of <> and </> within a fuction is a React.Fragment, which wrap the content and returns as one item*/

export const Kennel = () => (

    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
        </>
)

{/* Aminal card is a child component of Kennel as  */}