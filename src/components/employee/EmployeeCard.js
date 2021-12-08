import React from "react"
import "./Employee.css"

export const EmployeeCard = ({employee}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <p className="employee__workLocation__name">{employee.location.name}</p>
        <p className="employee__workLocation__add">{employee.location.address}</p>
    </section>
)


