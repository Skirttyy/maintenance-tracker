import { useEffect, useRef, useState } from "react"
import maintenanceTypes from "../data/maintenanceTypes.json"
import "./Search.css"
import { useSearchParams } from "react-router"

export default function Search ({handleSearch}) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [input, setInput] = useState(searchParams.get("search") || "")
    const [category, setCategory] = useState(searchParams.get("category") || "name")
    const inputRef = useRef(null)
    const selectRef = useRef(null)
    const results = searchParams.get("results")

    useEffect(() => {
        if (results === "yes") {
            handleSearch(inputRef.current.value, selectRef.current.value)
        }
    }, [results])
    
    return (
        <div className="search-container">
            <input ref={inputRef} placeholder="Search any outage name..." value={input} onChange={(e) => {    
            setInput(e.target.value)
            setSearchParams({...Object.fromEntries(searchParams.entries()), search: e.target.value})}}></input>
            <button onClick={() => handleSearch(inputRef.current.value, selectRef.current.value)}>SEARCH</button>
            <select ref={selectRef} value={category} onChange={(e) => {    
            setCategory(e.target.value)
            setSearchParams({...Object.fromEntries(searchParams.entries()), category: e.target.value})}}>
                {maintenanceTypes.map((type) => {
                    return <option value={type.value}>{type.label}</option>
                })}
            </select>
        </div>
    )
}