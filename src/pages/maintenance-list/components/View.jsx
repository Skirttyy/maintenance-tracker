import { useState } from "react"
import "./View.css"
import Search from "./Search"
import Card from "./Card"
import useFetch from "../hooks/useFetch"

export default function View () {
    const url = "http://localhost:9090/api/maintenances/get/"
    const [params, setParams] = useState({ type: "risk-level", content: "low", page: 0, size: 10 });
    const { data, loading, error } = useFetch(url, params.type, params.content, params.page, params.size);

    function handleSearch (searchText, searchType) {
        setParams({type: searchType, content: searchText, page: 0, size: 10})
    }

    return (
        <div className="view-maintenance-container">
            <div className="view-maintenance-search-container">
                <Search handleSearch={handleSearch}/>
            </div>
            <div className={loading ? "view-maintenance-loading" : "hidden"}>Loading...</div>
            <div className={error ? "view-maintenance-error" : "hidden"}>{error}</div>
            <div className="view-maintenance-cards-container">
                {data?.content?.map((item) => {
                    console.log(data.content)
                    return <Card data={item} handleView={handleSearch}/>
                })}
            </div>
        </div>
    )
}