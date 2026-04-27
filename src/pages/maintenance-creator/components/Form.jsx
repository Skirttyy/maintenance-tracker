import "./Form.css"
import MaintenanceImpact from "./MaintenanceImpact";
import MaintenanceTime from "./MaintenanceTime";
import MaintenanceType from "./MaintenanceType";
import Preview from "./Preview";
import MaintenaneRisk from "./MaintenanceRisk";
import MaintenanceConfirmation from "./MaintenanceConfirmation";
import { Route, useNavigate, useParams } from "react-router";
import FormsLayout from "../../layouts/FormsLayout";
import { useFormStateContext } from "../context/FormContext";
import { useEffect } from "react";

export default function Form() {
    const { stepNumber } = useParams()
    const { step } = useFormStateContext()
    const navigate = useNavigate()
    console.log(stepNumber)

    useEffect(() => {
        if (Number(stepNumber) !== step) {
            navigate("/add/step/"+step)
        }
    })

    return (
        <div className="form-general-container">
            <div className="form-general-step-container">
                {stepNumber === "1" && <MaintenanceType />}
                {stepNumber === "2" && <MaintenanceImpact />}
                {stepNumber === "3" && <MaintenanceTime />}
                {stepNumber === "4" && <MaintenaneRisk />}
                {stepNumber === "5" && <MaintenanceConfirmation />}
            </div>
            <div className="form-general-preview-container">
                <Preview />
            </div>
        </div>
    )
}