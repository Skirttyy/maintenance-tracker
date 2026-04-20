import "./FavoriteCard.css"

export default function FavoriteCard({ data, removeCardHandler }) {

    function formatDate(val) {
        if (!val) return "—"
        const date = new Date(val)
        const day = String(date.getDate()).padStart(2, "0")
        const month = String(date.getMonth() + 1).padStart(2, "0")
        const year = date.getFullYear()
        const hours = String(date.getHours()).padStart(2, "0")
        const minutes = String(date.getMinutes()).padStart(2, "0")
        return `${month}-${day}-${year} ${hours}:${minutes}`
    }

    const riskColors = {
        high: "fav-card-risk--high",
        medium: "fav-card-risk--medium",
        low: "fav-card-risk--low",
        innocent: "fav-card-risk--innocent"
    }

    return (
        <div className="fav-card-container">

            <div className="fav-card-left">
                <div className="fav-card-header">
                    <span className="fav-card-name">{data.name || "—"}</span>
                    <span className={`fav-card-risk ${riskColors[data.riskLevel] || ""}`}>
                        {data.riskLevel || "—"}
                    </span>
                </div>
                <div className="fav-card-meta">
                    <span className="fav-card-type">{data.type || "—"}</span>
                    <span className="fav-card-dot">·</span>
                    <span className="fav-card-provider">{data.provider || "—"}</span>
                </div>
            </div>

            <div className="fav-card-divider" />

            <div className="fav-card-dates">
                <div className="fav-card-date-item">
                    <span className="fav-card-key">Start</span>
                    <span className="fav-card-val">{formatDate(data.startDate)}</span>
                </div>
                <div className="fav-card-date-item">
                    <span className="fav-card-key">End</span>
                    <span className="fav-card-val">{formatDate(data.endDate)}</span>
                </div>
                <div className="fav-card-date-item">
                    <span className="fav-card-key">Clients</span>
                    <span className="fav-card-val">{data.affectedClients ?? "—"}</span>
                </div>
            </div>

            <div className="fav-card-divider" />

            <div className="fav-card-right">
                <button className="fav-card-remove-btn" onClick={() => removeCardHandler(data.id)}>
                    Remove
                </button>
            </div>

        </div>
    )
}