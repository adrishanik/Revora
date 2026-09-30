import Link from "next/link";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="hero">
      <div className="container">

        <nav className="nav">
          <Logo />

          <div className="navlinks">
            <Link href="#features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/integrations">Integrations</Link>
            <Link href="#about">About</Link>
          </div>

          <div style={{ display: "flex", gap: 9 }}>
            <Link className="btn btn-ghost" href="/login">
              Login
            </Link>

            <Link className="btn btn-primary" href="/demo">
              Try Demo
            </Link>
          </div>
        </nav>

        <section className="hero-main">

          <div>

            <div className="eyebrow">
              Revenue Recovery Intelligence
            </div>

            <h1>
              Stop Losing Revenue.
              <br />
              <span className="gradient-text">
                Start Recovering It.
              </span>
            </h1>

            <p>
              Revora connects to your CRM, email, calendar, invoices and
              project tools to find the money your agency is about to lose —
              and turns it into action.
            </p>

            <div className="hero-actions">

              <Link
                className="btn btn-primary"
                href="/demo"
              >
                Try Live Demo →
              </Link>

              <Link
                className="btn btn-ghost"
                href="/login"
              >
                Sign In
              </Link>

            </div>

            <div
              style={{
                display: "flex",
                gap: 24,
                marginTop: 35,
                fontSize: 12,
                color: "#8190a7",
                flexWrap: "wrap",
              }}
            >
              <span>◉ Detect missed leads</span>
              <span>◉ Find overdue invoices</span>
              <span>◉ Spot renewal risks</span>
              <span>◉ Recover more revenue</span>
            </div>

          </div>

          <div className="hero-visual">

            <div className="dashboard-preview">

              <div className="preview-head">
                <b>Revora</b>
                <span className="muted">
                  Revenue Intelligence
                </span>
              </div>

              <div className="mini-grid">

                <div className="mini">
                  <span className="muted">
                    Potential Revenue at Risk
                  </span>
                  <strong>
                    $18,420
                  </strong>
                </div>

                <div className="mini">
                  <span className="muted">
                    Recovered This Month
                  </span>
                  <strong>
                    $6,830
                  </strong>
                </div>

              </div>

              <div className="chart">

                <svg
                  viewBox="0 0 500 170"
                  preserveAspectRatio="none"
                >

                  <path
                    d="M0 130 C50 110,70 125,110 105 S170 130,220 92 S270 110,320 80 S370 95,420 60 S470 72,500 40 L500 170 L0 170Z"
                    fill="rgba(45,124,255,.16)"
                  />

                  <path
                    d="M0 130 C50 110,70 125,110 105 S170 130,220 92 S270 110,320 80 S370 95,420 60 S470 72,500 40"
                    fill="none"
                    stroke="#438bff"
                    strokeWidth="3"
                  />

                </svg>

              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                  marginTop: 10,
                }}
              >

                <div className="mini">
                  <span className="muted">
                    High Priority
                  </span>

                  <strong style={{ color: "#ff6674" }}>
                    $10,400
                  </strong>
                </div>

                <div className="mini">
                  <span className="muted">
                    Active Leads
                  </span>

                  <strong>
                    56
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </section>

        <div className="trusted">

          Trusted by growing agencies worldwide

          <div className="logos">
            <span>HubSpot</span>
            <span>Salesforce</span>
            <span>Pipedrive</span>
            <span>mailchimp</span>
            <span>stripe</span>
            <span>Notion</span>
          </div>

        </div>

      </div>
    </div>
  );
              }
