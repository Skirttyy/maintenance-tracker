import "./Header.css"
import logo from "@/assets/logo.png"

export default function Header ({selectedPage, setPageHandler, name, photo}) {
    return (
        <div className="header-container">
            <img src={logo}></img>
            <p className={selectedPage === "add" ? "active" : ""} onClick={() => setPageHandler("add")}>Add Maintenance</p>
            <p className={selectedPage === "view" ? "active" : ""} onClick={() => setPageHandler("view")}>View Maintenances</p>
            <span className="header-spacer" />
            <div className="user-container">
                <img src={photo}></img>
                <p>{name}</p>
                <p>Log out</p>
            </div>
        </div>
    )
}
