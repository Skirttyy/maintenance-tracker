import "./ViewCard.css";

export default function ViewCard({ data, handleExitView }) {

    function formatDate(val) {
        if (!val) return "—";
        const date = new Date(val);

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${month}-${day}-${year} ${hours}:${minutes}`;
    }

    const riskColors = {
        high: "view-card-risk--high",
        medium: "view-card-risk--medium",
        low: "view-card-risk--low",
        innocent: "view-card-risk--innocent"
    };

    return (
        <div className="view-card-overlay">
            <div className="view-card-container">

                {/* HEADER */}
                <div className="view-card-header">
                    <div>
                        <h2 className="view-card-title">{data.name || "—"}</h2>
                        <p className="view-card-type">{data.type || "—"}</p>
                        <p className="view-card-provider">{data.provider || "—"}</p>
                    </div>

                    <div className="view-card-header-right">
                        <span className={`view-card-risk ${riskColors[data.riskLevel] || ""}`}>
                            {data.riskLevel || "—"}
                        </span>

                        <button className="view-card-close" onClick={() => handleExitView()}>
                            ✕
                        </button>
                    </div>
                </div>

                <div className="view-card-divider" />

                {/* BODY */}
                <div className="view-card-body">

                    <div className="view-card-grid">

                        <div className="view-card-item">
                            <span>Start</span>
                            <strong>{formatDate(data.startDate)}</strong>
                        </div>

                        <div className="view-card-item">
                            <span>End</span>
                            <strong>{formatDate(data.endDate)}</strong>
                        </div>

                        <div className="view-card-item">
                            <span>Duration</span>
                            <strong>
                                {data.estimatedDuration
                                    ? `${data.estimatedDuration} min`
                                    : "—"}
                            </strong>
                        </div>

                        <div className="view-card-item">
                            <span>Clients</span>
                            <strong>
                                {data.affectedClients !== null
                                    ? data.affectedClients
                                    : "—"}
                            </strong>
                        </div>

                        <div className="view-card-item">
                            <span>Notifications</span>
                            <strong>
                                {data.notifications ? "Sent" : "Not sent"}
                            </strong>
                        </div>

                    </div>

                    {/* ZONES */}
                    <div className="view-card-section">
                        <span className="view-card-label">Zones</span>

                        <div className="view-card-zones">
                            {data.zones.length > 0
                                ? data.zones.map((z) => (
                                    <span key={z.zone} className="view-card-zone-chip">
                                        {z.zone}
                                    </span>
                                ))
                                : <span className="view-card-empty">—</span>}
                        </div>
                    </div>

                    {/* COMMENTS */}
                    {data.comments && (
                        <div className="view-card-section">
                            <span className="view-card-label">Comments</span>
                            <p className="view-card-comments">{data.comments}</p>
                        </div>
                    )}

                </div>

                <div className="view-card-divider" />

                {/* FOOTER */}
                <div className="view-card-footer">
                    <button className="view-card-close-btn" onClick={() => handleExitView()}>
                        Close
                    </button>
                </div>

            </div>
        </div>
    );
}