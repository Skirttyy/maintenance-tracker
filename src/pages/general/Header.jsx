import { NavLink } from "react-router"
import "./Header.css"
import logo from "@/assets/logo.png"

export default function Header ({name, photo}) {
    return (
        <div className="header-container">
            <img src={logo}></img>
            <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
            <NavLink to="/add/step/1" className={({isActive}) => (isActive ? "active" : "")}>Add Maintenance</NavLink>
            <NavLink to="/view" className={({isActive}) => (isActive ? "active" : "")}>View Maintenances</NavLink>
            <NavLink to="/favorites" className={({isActive}) => (isActive ? "active" : "")}>Favorites</NavLink>
            <span className="header-spacer" />
            <div className="user-container">
                <img src={photo}></img>
                <p>{name}</p>
                <p>Log out</p>
            </div>
        </div>
    )
}
