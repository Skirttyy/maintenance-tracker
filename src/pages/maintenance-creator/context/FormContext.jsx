import { act, createContext, useContext, useReducer } from "react";

export const FormStateContext = createContext(null)
export const FormStateDispatch = createContext(null)

const initialForm = {
    step: 1,
    maintenanceType: { value: "", touched: false, step: 1 },
    maintenanceProvider: { value: "", touched: false, step: 1 },
    comments: { value: "", touched: false, step: 1 },
    affectedClients: { value: null, touched: false, step: 2 },
    affectedZones: { value: [], touched: false, step: 2 },
    startDate: { value: null, touched: false, step: 3 },
    endDate: { value: null, touched: false, step: 3 },
    estimatedDuration: { value: null, touched: false, step: 3 },
    riskLeveL: { value: "", touched: false, step: 4 },
    notifications: { value: "", touched: false, step: 4 }
}

function formReducer (state, action) {
    switch (action.type) {
        case "SET_FIELD":
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    value: action.value,
                    touched: true
                }
            }
        case "ADD_ZONE":
            return {
                ...state,
                affectedZones: {
                    ...state.affectedZones,
                    value: [...state.affectedZones.value, action.value]
                }
            }
        case "REMOVE_ZONE":
            return {
                ...state,
                affectedZones: {
                    ...state.affectedZones,
                    value: state.affectedZones.value.filter(v => v !== action.value)
                }
            }
        case "TOUCH_FILED":
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    touched: true
                }
            }
        case "VALIDATE_STEP": 
            return Object.fromEntries(
                Object.entries(state).map(([key, value]) => {
                    if (action.stepToValidate === value.step) {
                        return [key, {...value, touched: true}]
                        
                    }
                    return [key, value]
                })
            )
        case "RESET":
            return initialForm
    }
}

export default function FormProvider ({children}) {
    const [state, dispatch] = useReducer(formReducer, initialForm)

    return (
        <div className="form-container">
            <FormStateContext.Provider value={state}>
                <FormStateDispatch.Provider value={dispatch}>
                    {children}
                </FormStateDispatch.Provider>
            </FormStateContext.Provider>
        </div>
    )
}

export function useFormStateContext () {
    return useContext(FormStateContext)
}

export function useFormDispatchContext () {
    return useContext(FormStateDispatch)
}