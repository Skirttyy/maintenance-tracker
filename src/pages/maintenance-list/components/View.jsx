import { useState } from "react"
import "./View.css"
import Search from "./Search"
import Card from "./Card"
import useFetch from "../hooks/useFetch"
import ViewCard from "./ViewCard"

export default function View () {
    const url = "http://192.168.100.4:9090/api/maintenances/get/"

    const [empty, setEmpty] = useState(true)
    const [viewCard, setViewCard] = useState(null)
    const [page, setPage] = useState(0)
    const [params, setParams] = useState({ type: "risk-level", content: "low", page: page, size: 10 });
    const { data, loading, error } = useFetch(url, params.type, params.content, params.page, params.size);

    function handleSearch (searchText, searchType) {
        if (searchText !== "") {
            setEmpty(false)
            setParams({type: searchType, content: searchText, page: page, size: 10})
            console.log(data)
        } else {
            setEmpty(true)
        }
    }

    function handleView (data) {
        setViewCard(data)
    }

    function handleExitView () {
        setViewCard(null)
    }

    function handlePageMove (type) {
        switch (type) {
            case "next":
                setPage(page+1)
                setParams({...params, page: page+1})
                break
            case "prev":
                setPage(page-1)
                setParams({...params, page: page-1})
                break
        }
    }

    return (
        <div className="view-maintenance-container">
            <div className="view-maintenance-search-container">
                <Search handleSearch={handleSearch}/>
            </div>
            <div className={loading ? "view-maintenance-loading" : "hidden"}>Loading...</div>
            <div className={error && !loading? "view-maintenance-error" : "hidden"}>{error}</div>
            <div className={data?.empty && error == null && !empty && !loading? "view-maintenance-not-found" : "hidden"}>Nu exista asa rezultate...</div>
            <div className={empty && !loading ? "view-maintenance-empty" : "hidden"}>Nu ai pus inca nimic in cautare!</div>
            {viewCard && <ViewCard data={viewCard} handleExitView={handleExitView}/>}
            <div className="view-maintenance-cards-container">
                {data?.content?.map((item) => {
                    console.log(data.content)
                    return <Card key={item.id} data={item} handleView={() => handleView(item)}/>
                })}
            </div>
            <div className="view-maintenance-pages-selector">
                <button className={page <= 0 ? "page-btn-locked" : "page-btn-unlocked"}
                onClick={() => handlePageMove("prev")}>Prev</button>
                <p>Pagina curenta este: {page}</p>
                <button className={page >= data?.totalPages? "page-btn-locked" : "page-btn-unlocked"}
                onClick={() => handlePageMove("next")}>Next</button>
            </div>
        </div>
    )
}