import "./NotFound.css"
import { useNavigate } from "react-router"

export default function NotFound () {
    const navigate = useNavigate()

    return (
        <div className="not-found-container">
            <h1>Sorry! We did not find the page that you accesed</h1>
            <h2>Try other link or go back here</h2>
            <button onClick={() => navigate(-1)}>Go Back!</button>
        </div>
    )
}