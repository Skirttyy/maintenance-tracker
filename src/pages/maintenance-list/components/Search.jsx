import { useRef } from "react"
import maintenanceTypes from "../data/maintenanceTypes.json"
import "./Search.css"

export default function Search ({handleSearch}) {
    const inputRef = useRef(null)
    const selectRef = useRef(null)

    return (
        <div className="search-container">
            <input ref={inputRef} placeholder="Search any outage name..."></input>
            <button onClick={() => handleSearch(inputRef.current.value, selectRef.current.value)}>SEARCH</button>
            <select ref={selectRef}>
                {maintenanceTypes.map((type) => {
                    return <option value={type.value}>{type.label}</option>
                })}
            </select>
        </div>
    )
}