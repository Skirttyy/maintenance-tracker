import { useFormDispatchContext, useFormStateContext } from "../context/FormContext"
import "./FormStyles.css"

export default function MaintenanceTime () {
    const { startDate, endDate } = useFormStateContext()
    const dispatch = useFormDispatchContext()

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

    function handleNextButton () {
        if ( startDate.isEmpty === false && endDate.isEmpty === false) {
            dispatch({
                type: "VALIDATE_STEP",
                stepToValidate: 3
            })
            dispatch({
                type: "SET_STEP",
                field: 4
            })
        } else {
            dispatch({
                type: "VALIDATE_STEP",
                stepToValidate: 3
            })
        }
    }

    function handlePreviousButton() {
        dispatch({
            type: "SET_STEP",
            field: 2
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
            <div className="input-date-container">
                <p>Select here the date of maintenance start</p>
                <input type="date" min={new Date().toISOString().split("T")[0]}
                onChange={(e) => handleChange("startDate", e.target.value)}
                onBlur={() => dispatch({type: "TOUCH_FIELD", field: "startDate"})}></input>
                <p className={startDate.touched && startDate.value === null ? "error" : "hidden"}>You need to select a date!</p>
            </div>
            <div className="input-date-container">
                <p>Select here the date of maintenance end</p>
                <input type="date" min={new Date().toISOString().split("T")[0]}
                onChange={(e) => handleChange("endDate", e.target.value)}
                onBlur={() => dispatch({type: "TOUCH_FIELD", field: "endDate"})}></input>
                <p className={endDate.touched && endDate.value === null ? "error" : "hidden"}>You need to select a date!</p>
            </div>
            <div className="form-buttons">
                <button className="form-buttons-back" onClick={() => handlePreviousButton()}>Previous</button>
                <button className="form-buttons-next" onClick={() => handleNextButton()}>Next</button>
            </div>
        </div>
    )
}

const formProgressFilledStyle = {
    width: "75%"
}