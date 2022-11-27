import React from "react";
import { CarDetails } from "./CarDetails";

export function App() {
    return (
        <div>
            <CarDetails initialData = {{ model: "500", year: 2014, color: "green"}}/>
        </div>
    )
}