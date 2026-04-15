import { useFormDispatchContext, useFormStateContext } from "../context/FormContext"
import "./FormStyles.css"

export default function MaintenanceType () {
    const { maintenanceType, maintenanceName, maintenanceProvider, comments } = useFormStateContext()
    const dispatch = useFormDispatchContext()

    function handleChange (field, value) {
        dispatch({
            type: "SET_FIELD",
            field: field,
            value: value
        })
    }

    function handleNextButton () {
        if ( maintenanceType.isEmpty === false && maintenanceProvider.isEmpty === false && comments.isEmpty === false) {
            dispatch({
                type: "VALIDATE_STEP",
                stepToValidate: 1
            })
            dispatch({
                type: "SET_STEP",
                field: 2
            })
        } else {
            dispatch({
                type: "VALIDATE_STEP",
                stepToValidate: 1
            })
        }
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
            <div className="input-text-container">
                <p>Type here the maintenance name *</p>
                <input type="text"
                value={maintenanceName.value === null ? "" : maintenanceName.value}
                onChange={(e) => handleChange("maintenanceName", e.target.value)} 
                onBlur={() => dispatch({type: "TOUCH_FIELD", field: "maintenanceName"})}></input>
                <p className={maintenanceName.touched && maintenanceName.isEmpty ? "error" : "hidden"}>You need to type here a short name!</p>
            </div>
            <div className="input-text-container">
                <p>Type here the maintenance type *</p>
                <input type="text"
                value={maintenanceType.value === null ? "" : maintenanceType.value}
                onChange={(e) => handleChange("maintenanceType", e.target.value)} 
                onBlur={() => dispatch({type: "TOUCH_FIELD", field: "maintenanceType"})}></input>
                <p className={maintenanceType.touched && maintenanceType.isEmpty ? "error" : "hidden"}>You need to type here a short title!</p>
            </div>
            <div className="input-text-container">
                <p>Type here the maintenance provider *</p>
                <input type="text"
                value={maintenanceProvider.value === null ? "" : maintenanceProvider.value}
                onChange={(e) => handleChange("maintenanceProvider", e.target.value)}
                onBlur={() => dispatch({type: "TOUCH_FIELD", field: "maintenanceProvider"})}></input>
                <p className={maintenanceProvider.touched && maintenanceProvider.isEmpty ? "error" : "hidden"}>You need to type here the provider!</p>
            </div>
            <div className="input-text-container">
                <p>Type here any additional comments *</p>
                <textarea
                value={comments.value === null ? "" : comments.value}
                onChange={(e) => handleChange("comments", e.target.value)}
                onBlur={() => dispatch({type: "TOUCH_FIELD", field: "comments"})}></textarea>
                <p className={comments.touched && comments.isEmpty ? "error" : "hidden"}>You need to type here any coments!</p>
            </div>
            <div className="form-buttons">
                <button className="form-buttons-next" onClick={() => handleNextButton()}>Next</button>
            </div>
        </div>
    )
}

const formProgressFilledStyle = {
    width: "25%"
}