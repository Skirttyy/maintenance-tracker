import "./Form.css"
import { useFormStateContext } from "../context/FormContext";
import MaintenanceImpact from "./MaintenanceImpact";
import MaintenanceTime from "./MaintenanceTime";
import MaintenanceType from "./MaintenanceType";
import Preview from "./Preview";
import MaintenaneRisk from "./MaintenanceRisk";
import MaintenanceConfirmation from "./MaintenanceConfirmation";

export default function Form() {
    const { step } = useFormStateContext()

    return (
        <div className="form-general-container">
            <div className="form-general-step-container">
                {step === 1 && <MaintenanceType />}
                {step === 2 && <MaintenanceImpact />}
                {step === 3 && <MaintenanceTime />}
                {step === 4 && <MaintenaneRisk />}
                {step === 5 && <MaintenanceConfirmation />}
            </div>
            <div className="form-general-preview-container">
                <Preview />
            </div>
        </div>
    )
}