import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="nubex-home">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">NUBEX</div>

        <div className="nav-links">
          <a href="#platform">Platform</a>
          <a href="#solutions">Solutions</a>
          <a href="#about">About</a>
        </div>

        <Link
          to="/create-project"
          className="nav-button"
        >
          Get Started
        </Link>

      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            AI-POWERED ENGINEERING INTELLIGENCE
          </p>

          <h1>
            Engineering
            <br />
            intelligence,
            <br />
            <span>reimagined.</span>
          </h1>

          <p className="hero-description">
            Understand your engineering projects with intelligent analysis.
            Upload drawings, uncover insights, and move from project data
            to better decisions.
          </p>

          <div className="hero-actions">

            <Link
              to="/create-project"
              className="primary-button"
            >
              Start a Project
              <span>↗</span>
            </Link>

            <a
              href="#platform"
              className="secondary-button"
            >
              Explore Platform
            </a>

          </div>

        </div>


        {/* HERO VISUAL */}
        <div className="hero-visual">

          <div className="orb orb-one"></div>
          <div className="orb orb-two"></div>

          <div className="ai-card">

            <div className="card-top">
              <span>PROJECT ANALYSIS</span>

              <span className="status">
                ● AI READY
              </span>
            </div>


            <div className="drawing-box">

              <div className="drawing-line line-one"></div>
              <div className="drawing-line line-two"></div>
              <div className="drawing-line line-three"></div>

              <div className="drawing-node node-one"></div>
              <div className="drawing-node node-two"></div>
              <div className="drawing-node node-three"></div>

            </div>


            <div className="analysis-row">

              <div>
                <small>DOCUMENTS</small>
                <strong>06</strong>
              </div>

              <div>
                <small>SYSTEMS</small>
                <strong>04</strong>
              </div>

              <div>
                <small>INSIGHTS</small>
                <strong>12</strong>
              </div>

            </div>

          </div>


          <div className="floating-label label-one">
            <span>01</span>
            Engineering Drawing
          </div>

          <div className="floating-label label-two">
            <span>02</span>
            AI Analysis
          </div>

          <div className="floating-label label-three">
            <span>03</span>
            Engineering Insights
          </div>

        </div>

      </section>


      {/* HERO BOTTOM */}
      <section className="hero-bottom">

        <p>
          From engineering documents to actionable intelligence.
        </p>

        <div className="scroll-indicator">

          <span>
            Scroll to explore
          </span>

          <span>
            ↓
          </span>

        </div>

      </section>


      {/* WORKFLOW */}
      <section
        className="workflow-section"
        id="platform"
      >

        <div className="workflow-heading">

          <p className="section-eyebrow">
            HOW NUBEX WORKS
          </p>

          <h2>
            From engineering
            <br />
            <span>data to decisions.</span>
          </h2>

          <p>
            NUBEX transforms complex engineering documents into
            structured insights, actionable feedback and project intelligence.
          </p>

        </div>


        <div className="workflow-grid">


          {/* CARD 01 */}
          <div className="workflow-card">

            <span className="workflow-number">
              01
            </span>

            <div className="workflow-icon">
              ↗
            </div>

            <h3>
              Upload
            </h3>

            <p>
              Upload engineering drawings, plans and project documents
              in one place.
            </p>

          </div>


          {/* CARD 02 */}
          <div className="workflow-card">

            <span className="workflow-number">
              02
            </span>

            <div className="workflow-icon">
              ◉
            </div>

            <h3>
              Understand
            </h3>

            <p>
              NUBEX AI interprets the information contained within
              your engineering documents.
            </p>

          </div>


          {/* CARD 03 */}
          <div className="workflow-card">

            <span className="workflow-number">
              03
            </span>

            <div className="workflow-icon">
              ✦
            </div>

            <h3>
              Analyse
            </h3>

            <p>
              Identify engineering observations, requirements,
              inconsistencies and areas that need attention.
            </p>

          </div>


          {/* CARD 04 */}
          <div className="workflow-card">

            <span className="workflow-number">
              04
            </span>

            <div className="workflow-icon">
              →
            </div>

            <h3>
              Act
            </h3>

            <p>
              Turn the analysis into engineering insights,
              solutions, BOQ and supplier recommendations.
            </p>

          </div>


        </div>

      </section>

    </main>
  );
}

export default Home;