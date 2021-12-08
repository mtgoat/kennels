//In the ApplicationViews component, you will define how your application will respond when the URL matches each of those patterns. When a user clicks on one of the hyperlinks in the navigation bar, this code dictates which component should be rendered.

import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerCard } from "./customer/CustomerCard"
import { EmployeeCard } from "./employee/EmployeeCard"
import { LocationCard } from "./location/LocationCard"


export const ApplicationViews = () => {
    return (
      <AnimalProvider> 
        <Routes>
            {/* Render the location list when http://localhost:3000/ */}
            <Route path="/" element={<Home />} />
             {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="animals/*" element={<AnimalList />} />
            <Route path="customers/*" element={<CustomerCard />} />
            <Route path="locations/*" element={<LocationCard />} />
            <Route path="employees/*" element={<EmployeeCard />} />
        </Routes>
      </AnimalProvider> 
    )
}

//The <Link/> and the <Route/> JSX elements are complementary to each other. If you add a new Link element in your application with a new URL, then you must create a matching Route element.
//Note that the <AnimalList> component is a child of the <AnimalProvider> component. It is crucial that you wrap components that need data with the provider component that exposes that data in JSX. You can wrap a component in as many providers as needed.