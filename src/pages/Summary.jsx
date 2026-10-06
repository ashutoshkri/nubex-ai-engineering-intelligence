import "./Summary.css";

function Summary() {
  const steps = [
    "PROJECT",
    "DOCUMENTS",
    "ANALYSIS",
    "RESULTS",
    "SOLUTIONS",
    "BOQ",
    "SUPPLIERS",
    "REVIEW",
    "SUMMARY",
  ];

  const projectStats = [
    {
      value: "24",
      label: "Documents analysed",
      description:
        "Engineering documents processed successfully.",
    },
    {
      value: "18",
      label: "Requirements identified",
      description:
        "Project requirements extracted from documentation.",
    },
    {
      value: "48",
      label: "Quantity items",
      description:
        "Quantity items structured for the project BOQ.",
    },
    {
      value: "03",
      label: "Suppliers identified",
      description:
        "Recommended supplier options available.",
    },
  ];

  const findings = [
    {
      number: "01",
      title: "Engineering requirements",
      description:
        "Project requirements have been extracted and organised from the uploaded engineering documentation.",
      tag: "REQUIREMENT",
    },
    {
      number: "02",
      title: "Engineering solutions",
      description:
        "Recommended solutions have been identified based on the engineering analysis and project conditions.",
      tag: "SOLUTION",
    },
    {
      number: "03",
      title: "Bill of quantities",
      description:
        "The project requirements have been structured into a clear quantity and estimated cost breakdown.",
      tag: "BOQ",
    },
    {
      number: "04",
      title: "Supplier recommendations",
      description:
        "Suitable supplier options have been identified based on the project requirements and quantity breakdown.",
      tag: "SUPPLIERS",
    },
  ];

  return (
    <main className="summary-page">

      {/* ================= HERO ================= */}
      <section className="summary-hero">
        <div className="summary-eyebrow">
          STEP 09 / SUMMARY
        </div>

        <h1>
          Your project <span>summary.</span>
        </h1>

        <p>
          NUBEX has consolidated the engineering analysis,
          requirements, quantities and supplier recommendations
          for your project.
        </p>
      </section>


      {/* ================= PROGRESS ================= */}
      <section className="summary-progress">
        {steps.map((step, index) => (
          <div
            className={`summary-step ${
              index === steps.length - 1 ? "active" : ""
            }`}
            key={step}
          >
            <div className="summary-step-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <span>{step}</span>

            {index !== steps.length - 1 && (
              <div className="summary-step-line"></div>
            )}
          </div>
        ))}
      </section>


      {/* ================= PROJECT OVERVIEW ================= */}
      <section className="summary-section">

        <div className="summary-section-header">

          <div>
            <div className="summary-label">
              PROJECT SUMMARY
            </div>

            <h2>Engineering project overview</h2>
          </div>

          <div className="summary-status">
            <span></span>
            ANALYSIS COMPLETE
          </div>

        </div>


        <div className="summary-stats">
          {projectStats.map((stat) => (
            <div
              className="summary-stat"
              key={stat.label}
            >
              <div className="summary-stat-value">
                {stat.value}
              </div>

              <div className="summary-stat-label">
                {stat.label}
              </div>

              <p>{stat.description}</p>
            </div>
          ))}
        </div>

      </section>


      {/* ================= FINDINGS ================= */}
      <section className="summary-findings">

        <div className="summary-label">
          KEY PROJECT INFORMATION
        </div>

        <h2>What NUBEX identified.</h2>


        <div className="summary-findings-list">

          {findings.map((item) => (
            <article
              className="summary-finding"
              key={item.number}
            >

              <div className="summary-finding-number">
                {item.number}
              </div>


              <div className="summary-finding-content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span>{item.tag}</span>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* ================= COST ================= */}
      <section className="summary-cost">

        <div className="summary-label">
          ESTIMATED PROJECT COST
        </div>


        <div className="summary-cost-content">

          <div>
            <h2>Estimated project cost</h2>

            <p>
              Based on the engineering requirements and
              quantity breakdown identified during the analysis.
            </p>
          </div>


          <div className="summary-cost-value">
            $59,450
          </div>

        </div>

      </section>


      {/* ================= NEXT STEP ================= */}
      <section className="summary-next">

        <div>

          <div className="summary-label">
            NEXT STEP
          </div>

          <h2>Ready to move forward.</h2>

          <p>
            Your engineering project summary is ready.
            Continue to review the final recommendations
            and proceed with the next stage.
          </p>

        </div>

      </section>


      {/* ================= FOOTER ACTIONS ================= */}
      <section className="summary-actions">

        <button
          className="summary-back-button"
          onClick={() => window.history.back()}
        >
          ← Back
        </button>


        <button
          className="summary-primary-button"
          onClick={() => {
            window.location.href = "/final-report";
          }}
        >
          Continue to Final Report
          <span>→</span>
        </button>

      </section>

    </main>
  );
}

export default Summary;