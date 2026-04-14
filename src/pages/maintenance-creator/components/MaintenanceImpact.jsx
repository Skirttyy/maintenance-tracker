import { useRef } from "react"
import { useFormDispatchContext, useFormStateContext } from "../context/FormContext"
import "./FormStyles.css"

export default function MaintenanceImpact () {
    const { affectedClients, affectedZones } = useFormStateContext()
    const dispatch = useFormDispatchContext()
    const inputRef = useRef(null)

    function handleChange (field, value) {
        if (value != "") {
            dispatch({
                type: "SET_FIELD",
                field: field,
                value: value
            })
        } else {
            dispatch({
                type: "SET_FIELD",
                field: field,
                value: null
            })
        }
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

    function handleNextButton () {
        if ( affectedClients.isEmpty === false && affectedZones.isEmpty === false) {
            dispatch({
                type: "VALIDATE_STEP",
                stepToValidate: 2
            })
            dispatch({
                type: "SET_STEP",
                field: 3
            })
        } else {
            dispatch({
                type: "VALIDATE_STEP",
                stepToValidate: 2
            })
        }
    }

    function handlePreviousButton() {
        dispatch({
            type: "SET_STEP",
            field: 1
        })
    } 

    return (
        <div className="form-step-container">
            <div className="form-progress">
                <div className="form-progress-filled" style={formProgressFilledStyle}>
                    {[1,2,3,4].map((value) => {
                        return <p key={value} className="form-progress-step"></p>
                    })}
                </div>
            </div>
            <div className="input-number-container">
                <p>Type here the number of affected clients</p>
                <input type="number" min="-1" value={affectedClients.value > -1 ? affectedClients.value : ""}
                onChange={(e) => handleChange("affectedClients", Number(e.target.value))}
                onBlur={() => dispatch({type: "TOUCH_FIELD", field: "affectedClients"})}></input>
                <p className={affectedClients.touched && (affectedClients.value < 0 || affectedClients.value === null) ? "error" : "hidden"}>You need to type a positive number of affected clients!</p>
            </div>
            <div className="input-zones-container">
                <div className="input-text-container">
                    <p>Add here the affected zones/sites</p>
                    <input ref={inputRef} type="text" ></input>
                    <p className={affectedZones.touched && affectedZones.isEmpty ? "error" : "hidden"}>You did not added any zones!</p>
                    <button className="input-text-add-button" onClick={() => handleAddZone()}>Add Zone</button>
                </div>
                <div className="output-zones-container">
                    {[...affectedZones.value].map((zone) => {
                        return <button value={zone} key={zone} className="output-zones-button" onClick={(e) => handleRemoveZone(e.target.value)}>❌ {zone}</button>
                    })}
                </div>
            </div>
            <div className="form-buttons">
                <button className="form-buttons-back" onClick={() => handlePreviousButton()}>Previous</button>
                <button className="form-buttons-next" onClick={() => handleNextButton()}>Next</button>
            </div>
        </div>
    )
}

const formProgressFilledStyle = {
    width: "50%"
}