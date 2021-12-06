import React from "react";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import "./Kennel.css"

//As mentioned above, Kennel is a container component. It renders no HTML itself. It simply contains other components that are responsible for the presentation and behavior of the application. In the case of our Kennel, it contains two different kinds of components.

export const Kennel = () => (

    <>
        <NavBar />
        <ApplicationViews />

        </>
)

