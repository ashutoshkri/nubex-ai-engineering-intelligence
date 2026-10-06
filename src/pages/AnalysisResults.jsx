import { Link } from "react-router-dom";

function AnalysisResults() {
  return (
    <main className="results-page">
      <div className="results-container">

        {/* HEADER */}
        <div className="results-header">
          <span className="section-eyebrow">
            STEP 04 / RESULTS
          </span>

          <h1>
            Engineering analysis
            <span> complete.</span>
          </h1>

          <p>
            NUBEX has analysed your engineering documents and
            identified the key requirements, observations and
            opportunities for your project.
          </p>
        </div>

        {/* PROGRESS */}
        <div className="process-steps">

          <div className="process-step completed">
            <div className="step-number">01</div>
            <span>PROJECT</span>
          </div>

          <div className="process-line completed-line"></div>

          <div className="process-step completed">
            <div className="step-number">02</div>
            <span>DOCUMENTS</span>
          </div>

          <div className="process-line completed-line"></div>

          <div className="process-step completed">
            <div className="step-number">03</div>
            <span>ANALYSIS</span>
          </div>

          <div className="process-line completed-line"></div>

          <div className="process-step active">
            <div className="step-number">04</div>
            <span>RESULTS</span>
          </div>

        </div>

        {/* SUMMARY */}
        <section className="results-summary">

          <div className="results-summary-top">
            <div>
              <span className="results-label">
                ANALYSIS SUMMARY
              </span>

              <h2>
                Engineering insights identified
              </h2>
            </div>

            <span className="analysis-status">
              ● ANALYSIS COMPLETE
            </span>
          </div>

          <div className="summary-grid">

            <div className="summary-card">
              <span className="summary-number">24</span>
              <span className="summary-title">
                Documents analysed
              </span>
              <p>
                Engineering documents processed successfully.
              </p>
            </div>

            <div className="summary-card">
              <span className="summary-number">18</span>
              <span className="summary-title">
                Requirements
              </span>
              <p>
                Project requirements identified from the documents.
              </p>
            </div>

            <div className="summary-card">
              <span className="summary-number">12</span>
              <span className="summary-title">
                Key insights
              </span>
              <p>
                Engineering observations requiring attention.
              </p>
            </div>

          </div>

        </section>

        {/* KEY FINDINGS */}
        <section className="findings-section">

          <div className="section-heading">
            <span className="results-label">
              KEY FINDINGS
            </span>

            <h2>
              What NUBEX found.
            </h2>
          </div>

          <div className="findings-list">

            <div className="finding-item">
              <div className="finding-number">01</div>

              <div className="finding-content">
                <h3>
                  Engineering requirements identified
                </h3>

                <p>
                  Project requirements have been extracted
                  from the uploaded engineering documentation.
                </p>
              </div>

              <span className="finding-tag">
                REQUIREMENT
              </span>
            </div>

            <div className="finding-item">
              <div className="finding-number">02</div>

              <div className="finding-content">
                <h3>
                  Documentation inconsistencies detected
                </h3>

                <p>
                  Potential inconsistencies and areas requiring
                  further engineering review have been identified.
                </p>
              </div>

              <span className="finding-tag">
                REVIEW
              </span>
            </div>

            <div className="finding-item">
              <div className="finding-number">03</div>

              <div className="finding-content">
                <h3>
                  Opportunities for optimisation
                </h3>

                <p>
                  The analysis identified opportunities that may
                  improve project decisions and engineering outcomes.
                </p>
              </div>

              <span className="finding-tag">
                INSIGHT
              </span>
            </div>

          </div>

        </section>

        {/* OBSERVATIONS */}
        <section className="observations-section">

          <div className="section-heading">
            <span className="results-label">
              ENGINEERING OBSERVATIONS
            </span>

            <h2>
              Areas requiring attention.
            </h2>
          </div>

          <div className="observation-grid">

            <div className="observation-card">
              <span className="observation-icon">01</span>

              <h3>
                Project specifications
              </h3>

              <p>
                Review extracted specifications and confirm
                that project requirements are aligned.
              </p>

              <span className="observation-status">
                REVIEW
              </span>
            </div>

            <div className="observation-card">
              <span className="observation-icon">02</span>

              <h3>
                Engineering requirements
              </h3>

              <p>
                Validate identified requirements before
                progressing to engineering solutions.
              </p>

              <span className="observation-status">
                REVIEW
              </span>
            </div>

            <div className="observation-card">
              <span className="observation-icon">03</span>

              <h3>
                Supplier considerations
              </h3>

              <p>
                Further analysis can help identify suitable
                solutions and supplier requirements.
              </p>

              <span className="observation-status">
                INSIGHT
              </span>
            </div>

          </div>

        </section>

        {/* ACTIONS */}
        <div className="results-actions">

          <Link
            to="/ai-analysis"
            className="back-button"
          >
            ← Back
          </Link>

          <Link
            to="/solutions"
            className="continue-button"
          >
            View Solutions
            <span>→</span>
          </Link>

        </div>

      </div>
    </main>
  );
}

export default AnalysisResults;