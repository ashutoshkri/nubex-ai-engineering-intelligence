import { Link } from "react-router-dom";
import "./AIAnalysis.css";

function AIAnalysis() {
  return (
    <main className="analysis-page">
      <div className="analysis-container">

        {/* Header */}
        <header className="analysis-header">
          <span className="analysis-eyebrow">
            STEP 03 / ANALYSIS
          </span>

          <h1>
            AI analysis is
            <span> underway.</span>
          </h1>

          <p>
            NUBEX is analysing your engineering documents and
            extracting the information required for your project.
          </p>
        </header>

        {/* Progress Steps */}
        <div className="analysis-steps">

          <div className="analysis-step completed">
            <span>01</span>
            <strong>PROJECT</strong>
          </div>

          <div className="step-line completed-line"></div>

          <div className="analysis-step completed">
            <span>02</span>
            <strong>DOCUMENTS</strong>
          </div>

          <div className="step-line active-line"></div>

          <div className="analysis-step active">
            <span>03</span>
            <strong>ANALYSIS</strong>
          </div>

          <div className="step-line"></div>

          <div className="analysis-step">
            <span>04</span>
            <strong>RESULTS</strong>
          </div>

        </div>

        {/* Analysis Card */}
        <section className="analysis-card">

          <div className="analysis-card-top">
            <div>
              <span className="mini-label">CURRENT PROCESS</span>
              <h2>Analysing engineering documents</h2>
            </div>

            <span className="analysis-status">
              ● AI PROCESSING
            </span>
          </div>

          {/* Processing Visual */}
          <div className="analysis-visual">

            <div className="analysis-ring">
              <div className="analysis-ring-inner">
                <span className="analysis-percent">72%</span>
                <small>ANALYSED</small>
              </div>
            </div>

            <div className="analysis-pulse"></div>

          </div>

          {/* Progress */}
          <div className="analysis-progress-section">

            <div className="progress-info">
              <span>DOCUMENT ANALYSIS</span>
              <strong>72%</strong>
            </div>

            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>

          </div>

          {/* Processing Items */}
          <div className="processing-list">

            <div className="processing-item completed">
              <div className="processing-icon">✓</div>

              <div>
                <strong>Project drawings</strong>
                <span>Engineering drawings processed</span>
              </div>

              <small>DONE</small>
            </div>

            <div className="processing-item completed">
              <div className="processing-icon">✓</div>

              <div>
                <strong>Engineering specifications</strong>
                <span>Project specifications extracted</span>
              </div>

              <small>DONE</small>
            </div>

            <div className="processing-item active">
              <div className="processing-icon processing-loader">
                <span></span>
              </div>

              <div>
                <strong>Detecting requirements</strong>
                <span>Identifying engineering observations</span>
              </div>

              <small>PROCESSING</small>
            </div>

            <div className="processing-item">
              <div className="processing-icon">○</div>

              <div>
                <strong>Generating insights</strong>
                <span>Preparing project recommendations</span>
              </div>

              <small>WAITING</small>
            </div>

          </div>

        </section>

        {/* Footer Actions */}
        <div className="analysis-actions">

          <Link to="/upload-documents" className="analysis-back">
            ← Back
          </Link>

          <Link to="/analysis-results" className="analysis-continue">
            View Results
            <span>→</span>
          </Link>

        </div>

      </div>
    </main>
  );
}

export default AIAnalysis;