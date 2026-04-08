import { useFormDispatchContext } from "../context/FormContext"
import "./FormStyles.css"
import finalStepImage from "@/assets/final-step.png"

export default function MaintenanceConfirmation () {
    const dispatch = useFormDispatchContext()

    function handleResetButton() {
        dispatch({
            type: "RESET"
        })
    } 

    return (
        <div className="form-step-container">
            <div className="form-step-final">
                <h1>You finished the form!</h1>
                <h2>Now you can see it in the maintenances list</h2>
                <img src={finalStepImage}></img>
            </div>
            <div className="form-buttons">
                <button className="form-buttons-back" onClick={() => handleResetButton()}>Reset</button>
            </div>
        </div>
    )
}