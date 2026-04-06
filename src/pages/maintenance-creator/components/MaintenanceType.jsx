import { useFormDispatchContext, useFormStateContext } from "../context/FormContext"
import "./FormStyles.css"

export default function MaintenanceType () {
    let { maintenanceType, maintenanceProvider, comments } = useFormStateContext()
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
                        return <p className="form-progress-step">{value}</p>
                    })}
                </div>
            </div>
            <div className="input-text-container">
                <p>Type here the maintenance type *</p>
                <input type="text" 
                onChange={(e) => handleChange("maintenanceType", e.target.value)} 
                onBlur={() => dispatch({type: "TOUCH_FIELD", field: "maintenanceType"})}></input>
                <p className={maintenanceType.touched && maintenanceType.isEmpty ? "error" : "hidden"}>You need to type here a short title!</p>
            </div>
            <div className="input-text-container">
                <p>Type here the maintenance provider *</p>
                <input type="text" 
                onChange={(e) => handleChange("maintenanceProvider", e.target.value)}
                onBlur={() => dispatch({type: "TOUCH_FIELD", field: "maintenanceProvider"})}></input>
                <p className={maintenanceProvider.touched && maintenanceProvider.isEmpty ? "error" : "hidden"}>You need to type here the provider!</p>
            </div>
            <div className="input-text-container">
                <p>Type here any additional comments *</p>
                <textarea 
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