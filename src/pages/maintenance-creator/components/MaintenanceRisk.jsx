import { useNavigate } from "react-router"
import { useFormDispatchContext, useFormStateContext } from "../context/FormContext"
import "./FormStyles.css"

export default function MaintenaneRisk () {
    const { riskLevel, notifications } = useFormStateContext()
    const dispatch = useFormDispatchContext()
    const navigate = useNavigate()

    function handleChange (field, value) {
        dispatch({
            type: "SET_FIELD",
            field: field,
            value: value
        })
    }

    function handleNextButton () {
        if ( riskLevel.isEmpty === false && notifications.isEmpty === false) {
            dispatch({
                type: "VALIDATE_STEP",
                stepToValidate: 4
            })
            dispatch({
                type: "SET_STEP",
                field: 5
            })
            navigate('/add/step/5')
        } else {
            dispatch({
                type: "VALIDATE_STEP",
                stepToValidate: 4
            })
        }
    }

    function handlePreviousButton() {
        dispatch({
            type: "SET_STEP",
            field: 3
        })
        navigate('/add/step/3')
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
            <div className="select-container">
                <p>Select here the maintenance risk level *</p>
                <select
                value={riskLevel.value === null ? "" : riskLevel.value}
                onChange={(e) => handleChange("riskLevel", e.target.value)} 
                onBlur={() => dispatch({type: "TOUCH_FIELD", field: "riskLevel"})}>
                    <option value="">-- Select --</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                    <option value="innocent">Innocent</option>
                </select>
                <p className={riskLevel.touched && riskLevel.isEmpty ? "error" : "hidden"}>You need to select here a risk level!</p>
            </div>
            <div className="input-radio-container">
                <p>Notifications confirmation *</p>
                <div className="input-radio-container-child">
                    <input type="radio" name="notifications" value={true}
                    onChange={() => handleChange("notifications", true)}
                    onBlur={() => dispatch({type: "TOUCH_FIELD", field: "notifications"})}>
                    </input>
                    <p>Sent</p>
                </div>
                <div className="input-radio-container-child">
                    <input type="radio" name="notifications" value={false}
                    onChange={() => handleChange("notifications", false)}
                    onBlur={() => dispatch({type: "TOUCH_FIELD", field: "notifications"})}>
                    </input>
                    <p>Not sent</p>
                </div>
                <p className={notifications.touched && notifications.isEmpty ? "error" : "hidden"}>You need to confirm the notification status!</p>
            </div>
            <div className="form-buttons">
                <button className="form-buttons-back" onClick={() => handlePreviousButton()}>Previous</button>
                <button className="form-buttons-next" onClick={() => handleNextButton()}>Submit</button>
            </div>
        </div>
    )
}

const formProgressFilledStyle = {
    width: "100%"
}