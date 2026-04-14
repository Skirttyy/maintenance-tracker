import "./Card.css"

export default function Card({ data, handleView }) {

    function formatDate(val) {
        if (!val) return "—"
        const date = new Date(val)

        const day = String(date.getDate()).padStart(2, "0")
        const month = String(date.getMonth() + 1).padStart(2, "0")
        const year = date.getFullYear()

        const hours = String(date.getHours()).padStart(2, "0")
        const minuntes = String(date.getMinutes()).padStart(2, "0")

        return `${month}-${day}-${year} ${hours}:${minuntes}`
    }

    const riskColors = {
        high: "card-risk--high",
        medium: "card-risk--medium",
        low: "card-risk--low",
        innocent: "card-risk--innocent"
    }

    return (
        <div className="view-maintenance-card-container"> 

            <div className="card-header">
                <div className="card-header-left">
                    <span className="card-type">{data.type || "—"}</span>
                    <span className="card-provider">{data.provider || "—"}</span>
                </div>
                <span className={`card-risk ${riskColors[data.riskLevel] || ""}`}>
                    {data.riskLevel || "—"}
                </span>
            </div>

            <div className="card-divider" />

            <div className="card-body">
                <div className="card-row">
                    <span className="card-key">Start</span>
                    <span className="card-val">{formatDate(data.startDate)}</span>
                </div>
                <div className="card-row">
                    <span className="card-key">End</span>
                    <span className="card-val">{formatDate(data.endDate)}</span>
                </div>
                <div className="card-row">
                    <span className="card-key">Duration</span>
                    <span className="card-val">
                        {data.estimatedDuration ? `${data.estimatedDuration} min` : "—"}
                    </span>
                </div>
                <div className="card-row">
                    <span className="card-key">Clients</span>
                    <span className="card-val">
                        {data.affectedClients !== null ? (
                            <span className="card-badge">{data.affectedClients}</span>
                        ) : "—"}
                    </span>
                </div>
                <div className="card-row card-row--wrap">
                    <span className="card-key">Zones</span>
                    <div className="card-zones">
                        {data.zones.length > 0
                            ? data.zones.map((z) => (
                                <span key={z.zone} className="card-zone-chip">{z.zone}</span>
                            ))
                            : <span className="card-empty">—</span>}
                    </div>
                </div>
            </div>

            {data.comments && (
                <>
                    <div className="card-divider" />
                    <p className="card-comments">{data.comments}</p>
                </>
            )}

            <div className="card-divider" />

            <div className="card-footer">
                <span className={`card-notification ${data.notifications === true ? "card-notification--sent" : "card-notification--pending"}`}>
                    {data.notifications === true ? "Notifications sent" : "Not sent"}
                </span>
                <button className="card-view-button" onClick={() => handleView(data)}>
                    View details
                </button>
            </div>

        </div>
    )
}