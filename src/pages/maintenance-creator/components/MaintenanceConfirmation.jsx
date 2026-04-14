import { useFormDispatchContext, useFormStateContext } from "../context/FormContext"
import useFetchSend from "../hooks/useFetchSend"
import "./FormStyles.css"
import finalStepImage from "@/assets/final-step.png"

export default function MaintenanceConfirmation () {
    const dispatch = useFormDispatchContext()
    const state = useFormStateContext()
    const { _data, loading, error } = useFetchSend("http://localhost:9090/api/maintenances/add/", state)

    function handleResetButton() {
        dispatch({
            type: "RESET"
        })
    } 

    // need to improve error handling on both server and front

    return (
        <div className="form-step-container">
            <div className={loading === false && error === null ? "form-step-final" : "hidden"}>
                <h1>You finished the form!</h1>
                <h2>Now you can see it in the maintenances list</h2>
                <img src={finalStepImage}></img>
            </div>
            <div className={loading === true ? "form-step-final-loading" : "hidden"}>
                <h1>Your request is being processed...</h1>
            </div>
            <div className={error !== null ? "form-step-final-error" : "hidden"}>
                <h1>Oops! There is a error</h1>
                <h2>{error}</h2>
            </div>
            <div className="form-buttons">
                <button className="form-buttons-back" onClick={() => handleResetButton()}>Reset</button>
            </div>
        </div>
    )
}