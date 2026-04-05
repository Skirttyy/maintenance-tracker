import { useFormStateContext } from "../context/FormContext";
import MaintenanceImpact from "./MaintenanceImpact";
import MaintenanceType from "./MaintenanceType";

export default function Form () {
    const { step } = useFormStateContext()
    return (
        <>
            {step === 2 && <MaintenanceType />}
            {step === 1 && <MaintenanceImpact />}
        </>

    )
}