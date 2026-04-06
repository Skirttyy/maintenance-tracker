import "./Form.css"
import { useFormStateContext } from "../context/FormContext";
import MaintenanceImpact from "./MaintenanceImpact";
import MaintenanceTime from "./MaintenanceTime";
import MaintenanceType from "./MaintenanceType";
import Preview from "./Preview";

export default function Form() {
    const { step } = useFormStateContext()
    return (
        <div className="form-general-container">
            <div className="form-general-step-container">
                {step === 1 && <MaintenanceType />}
                {step === 2 && <MaintenanceImpact />}
                {step === 3 && <MaintenanceTime />}
            </div>
            <div className="form-general-preview-container">
                <Preview />
            </div>
        </div>
    )
}