import "./Home.css"

export default function Home () {
    return (
        <div className="home-container">

            <div className="home-hero">
                <div className="home-badge">NOC Maintenance Planner</div>
                <h1 className="home-title">Plan. Track. <span className="home-title-accent">Maintain.</span></h1>
                <p className="home-subtitle">
                    Manage your network maintenance windows in one place.
                    Schedule downtimes, track affected clients, and keep your team informed.
                </p>
            </div>

            <div className="home-cards">
                <div className="home-card">
                    <div className="home-card-icon">📋</div>
                    <h3 className="home-card-title">Schedule</h3>
                    <p className="home-card-desc">Create maintenance windows with start and end times, affected zones, and risk levels.</p>
                </div>
                <div className="home-card">
                    <div className="home-card-icon">🔍</div>
                    <h3 className="home-card-title">Search</h3>
                    <p className="home-card-desc">Filter maintenances by provider, risk level, type, and more to find what you need fast.</p>
                </div>
                <div className="home-card">
                    <div className="home-card-icon">⭐</div>
                    <h3 className="home-card-title">Favorites</h3>
                    <p className="home-card-desc">Save important maintenance windows to your favorites for quick access anytime.</p>
                </div>
            </div>

        </div>
    )
}