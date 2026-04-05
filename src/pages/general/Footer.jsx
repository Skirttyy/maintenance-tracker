import "./Footer.css"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer-container">
            <div className="footer-left">
                <span className="footer-brand">NOC</span>
                <span className="footer-brand-sub">Maintenance Planner</span>
            </div>

            <div className="footer-center">
                <span className="footer-status">
                    <span className="footer-dot" />
                    All systems operational
                </span>
            </div>

            <div className="footer-right">
                <span className="footer-copy">
                    &copy; {currentYear} — Network Operations Center
                </span>
            </div>
        </footer>
    )
}