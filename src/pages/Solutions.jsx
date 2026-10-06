import { Link } from "react-router-dom";

function Solutions() {
  return (
    <main className="solutions-page">
      <div className="solutions-container">

        {/* PAGE HEADER */}
        <div className="solutions-header">
          <span className="section-eyebrow">
            STEP 05 / SOLUTIONS
          </span>

          <h1>
            Engineering solutions
            <span>for your project.</span>
          </h1>

          <p>
            Based on the engineering analysis, NUBEX has identified
            recommended solutions and opportunities for your project.
          </p>
        </div>

        {/* PROGRESS */}
        <div className="project-progress">

          <div className="progress-step completed">
            <span>01</span>
            <strong>PROJECT</strong>
          </div>

          <div className="progress-line" />

          <div className="progress-step completed">
            <span>02</span>
            <strong>DOCUMENTS</strong>
          </div>

          <div className="progress-line" />

          <div className="progress-step completed">
            <span>03</span>
            <strong>ANALYSIS</strong>
          </div>

          <div className="progress-line" />

          <div className="progress-step completed">
            <span>04</span>
            <strong>RESULTS</strong>
          </div>

          <div className="progress-line" />

          <div className="progress-step active">
            <span>05</span>
            <strong>SOLUTIONS</strong>
          </div>

        </div>

        {/* SOLUTIONS SECTION */}
        <section className="solutions-section">

          <div className="solutions-section-header">
            <div>
              <span className="section-label">
                RECOMMENDED SOLUTIONS
              </span>

              <h2>
                Solutions identified
              </h2>
            </div>

            <span className="solution-status">
              ● ANALYSIS BASED
            </span>
          </div>

          {/* SOLUTION 01 */}
          <article className="solution-card">

            <div className="solution-number">
              01
            </div>

            <div className="solution-content">
              <div className="solution-card-top">
                <span className="solution-tag">
                  RECOMMENDED
                </span>

                <span className="solution-arrow">
                  →
                </span>
              </div>

              <h3>
                HVAC System Optimisation
              </h3>

              <p>
                Optimise the HVAC system based on the identified
                engineering requirements and project conditions.
              </p>

              <div className="solution-meta">
                <span>ENGINEERING</span>
                <span>HIGH PRIORITY</span>
              </div>
            </div>

          </article>

          {/* SOLUTION 02 */}
          <article className="solution-card">

            <div className="solution-number">
              02
            </div>

            <div className="solution-content">
              <div className="solution-card-top">
                <span className="solution-tag">
                  RECOMMENDED
                </span>

                <span className="solution-arrow">
                  →
                </span>
              </div>

              <h3>
                Electrical Load Optimisation
              </h3>

              <p>
                Review electrical requirements and optimise the
                proposed load distribution for improved project efficiency.
              </p>

              <div className="solution-meta">
                <span>ELECTRICAL</span>
                <span>MEDIUM PRIORITY</span>
              </div>
            </div>

          </article>

          {/* SOLUTION 03 */}
          <article className="solution-card">

            <div className="solution-number">
              03
            </div>

            <div className="solution-content">
              <div className="solution-card-top">
                <span className="solution-tag">
                  INSIGHT
                </span>

                <span className="solution-arrow">
                  →
                </span>
              </div>

              <h3>
                Engineering Specification Review
              </h3>

              <p>
                Review extracted project specifications and resolve
                identified inconsistencies before implementation.
              </p>

              <div className="solution-meta">
                <span>SPECIFICATIONS</span>
                <span>REVIEW</span>
              </div>
            </div>

          </article>

        </section>

        {/* SUMMARY */}
        <section className="solution-summary">

          <span className="section-label">
            NEXT STEP
          </span>

          <h2>
            Build your Bill of Quantities.
          </h2>

          <p>
            Continue to BOQ to generate a structured quantity
            breakdown based on the identified engineering requirements.
          </p>

        </section>

        {/* ACTIONS */}
        <div className="form-actions solution-actions">

          <Link
            to="/analysis-results"
            className="back-button"
          >
            ← Back
          </Link>

          <Link
            to="/boq"
            className="continue-button"
          >
            Continue to BOQ
            <span>→</span>
          </Link>

        </div>

      </div>
    </main>
  );
}

export default Solutions;