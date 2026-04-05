import { useRef } from "react"
import { useFormDispatchContext, useFormStateContext } from "../context/FormContext"
import "./FormStyles.css"

export default function MaintenanceImpact () {
    let { affectedClients, affectedZones } = useFormStateContext()
    const dispatch = useFormDispatchContext()
    const inputRef = useRef(null)

    function handleChange (field, value) {
        dispatch({
            type: "SET_FIELD",
            field: field,
            value: value
        })
    }

    function handleAddZone () {
        dispatch({
            type: "ADD_ZONE",
            value: inputRef.current.value 
        })
    }

    function handleRemoveZone ( value ) {
        dispatch({
            type: "REMOVE_ZONE",
            value: value
        })
    }

    return (
        <div className="form-step-container">
            <div className="form-progress">
                <div className="form-progress-filled" style={formProgressFilledStyle}>
                    {[1,2,3,4].map((value) => {
                        return <p key={value} className="form-progress-step">{value}</p>
                    })}
                </div>
            </div>
            <div className="input-number-container">
                <p>Type here the number of affected clients</p>
                <input type="number" min="0" onChange={(e) => handleChange("affectedClients", e.target.value)}></input>
                <p className={affectedClients.touched && affectedClients.value < 0 ? "error" : ""}>You need to type a positive number of affected clients!</p>
            </div>
            <div className="input-zones-container">
                <div className="input-text-container">
                    <p>Add here the affected zones/sites</p>
                    <input ref={inputRef} type="text" ></input>
                    <p className={affectedClients.touched && (affectedClients.value === "" || affectedClients.value < 0) ? "error" : ""}>You did not added any zones!</p>
                    <button className="input-text-add-button" onClick={() => handleAddZone()}>Add Zone</button>
                </div>
                <div className="output-zones-container">
                    {[...affectedZones.value].map((zone) => {
                        return <button value={zone} key={zone} className="output-zones-button" onClick={(e) => handleRemoveZone(e.target.value)}>❌ {zone}</button>
                    })}
                </div>
            </div>
            <div className="form-buttons">
                <button className="form-buttons-next" onClick={() => {dispatch({
                    type: "VALIDATE_STEP",
                    stepToValidate: 1
                })}}>Next</button>
            </div>
        </div>
    )
}

const formProgressFilledStyle = {
    width: "25%"
}