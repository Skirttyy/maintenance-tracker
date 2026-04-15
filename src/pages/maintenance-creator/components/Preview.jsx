import { useFormStateContext } from "../context/FormContext"
import "./Preview.css"

export default function Preview() {
    const state = useFormStateContext()

    const {
        step,
        maintenanceName,
        maintenanceType,
        maintenanceProvider,
        comments,
        affectedClients,
        affectedZones,
        startDate,
        endDate,
        estimatedDuration,
        riskLevel,
        notifications
    } = state

    function formatDate(val) {
        if (!val) return null
        const [y, m, d] = val.split("-")
        return `${d}/${m}/${y}`
    }

    return (
        <aside className="preview-container">
            <div className="preview-header">
                <span className="preview-title">Preview</span>
                <span className="preview-step-badge">{step < 5 ? `Step ${step} of 4` : `Maintenance added`}</span>
            </div>

            <div className="preview-progress">
                {[1, 2, 3, 4, 5].map((s) => (
                    <div
                        key={s}
                        className={`preview-progress-segment ${s < step ? "done" : s === step ? "active" : ""}`}
                    />
                ))}
            </div>

            <div className="preview-sections">

                <div className={`preview-section ${step >= 1 ? "unlocked" : "locked"}`}>
                    <p className="preview-section-label">Info</p>
                    <div className="preview-row">
                        <span className="preview-key">Name</span>
                        <span className="preview-val">
                            {maintenanceName.value || <span className="preview-empty">—</span>}
                        </span>
                    </div>
                    <div className="preview-row">
                        <span className="preview-key">Type</span>
                        <span className="preview-val">
                            {maintenanceType.value || <span className="preview-empty">—</span>}
                        </span>
                    </div>
                    <div className="preview-row">
                        <span className="preview-key">Provider</span>
                        <span className="preview-val">
                            {maintenanceProvider.value || <span className="preview-empty">—</span>}
                        </span>
                    </div>
                    {comments.value && (
                        <div className="preview-comment">
                            <span className="preview-key">Notes</span>
                            <p className="preview-comment-text">{comments.value}</p>
                        </div>
                    )}
                </div>

                <div className="preview-divider" />

                <div className={`preview-section ${step >= 2 ? "unlocked" : "locked"}`}>
                    <p className="preview-section-label">Impact</p>
                    <div className="preview-row">
                        <span className="preview-key">Clients</span>
                        <span className="preview-val">
                            {affectedClients.value !== null
                                ? <span className="preview-badge">{affectedClients.value}</span>
                                : <span className="preview-empty">—</span>}
                        </span>
                    </div>
                    <div className="preview-row preview-row--wrap">
                        <span className="preview-key">Zones</span>
                        <span className="preview-zones">
                            {affectedZones.value.length > 0
                                ? affectedZones.value.map((z) => (
                                    <span key={z} className="preview-zone-chip">{z}</span>
                                ))
                                : <span className="preview-empty">—</span>}
                        </span>
                    </div>
                </div>

                <div className="preview-divider" />

                <div className={`preview-section ${step >= 3 ? "unlocked" : "locked"}`}>
                    <p className="preview-section-label">Schedule</p>
                    <div className="preview-row">
                        <span className="preview-key">Start</span>
                        <span className="preview-val">
                            {formatDate(startDate.value) || <span className="preview-empty">—</span>}
                        </span>
                    </div>
                    <div className="preview-row">
                        <span className="preview-key">End</span>
                        <span className="preview-val">
                            {formatDate(endDate.value) || <span className="preview-empty">—</span>}
                        </span>
                    </div>
                    <div className="preview-row">
                        <span className="preview-key">Duration</span>
                        <span className="preview-val">
                            {estimatedDuration.value
                                ? `${estimatedDuration.value} min`
                                : <span className="preview-empty">—</span>}
                        </span>
                    </div>
                </div>

                <div className="preview-divider" />

                <div className={`preview-section ${step >= 4 ? "unlocked" : "locked"}`}>
                    <p className="preview-section-label">Risk & Notifications</p>
                    <div className="preview-row">
                        <span className="preview-key">Risk</span>
                        <span className="preview-val">
                            {riskLevel.value
                                ? <span className={`preview-risk preview-risk--${riskLevel.value.toLowerCase()}`}>{riskLevel.value}</span>
                                : <span className="preview-empty">—</span>}
                        </span>
                    </div>
                    <div className="preview-row">
                        <span className="preview-key">Notify</span>
                        <span className="preview-val">
                            {notifications.value === null ? <span className="preview-empty">—</span> : ""}
                            {notifications.value === true ? <span className="preview-empty">Sent</span> : ""}
                            {notifications.value === false ? <span className="preview-empty">Not sent</span> : ""}
                        </span>
                    </div>
                </div>

            </div>
        </aside>
    )
}