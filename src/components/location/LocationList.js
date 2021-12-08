import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { LocationContext } from "./LocationDataProvider"
import "./Location.css"
import { Location } from "./Location"

export const LocationList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  const navigate = useNavigate()

  /* This is the equivalent of the following code in Vanilla JavaScript...
  const AnimalList = () => {
      getAnimals()
        .then(()=> {
            const animals=useAnimals()
            redner(animals)
        })
  }

  */
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getLocations()

  }, [])


  return (
    <>
       <div className="locations">
                    {console.log("LocationList: Render", locations)}
                    {
                      locations.map( location => {
                        return <Location key={location.id} location={location} />
                      })
                    }
        </div>
    </>
  )
}
