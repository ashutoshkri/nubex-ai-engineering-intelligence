import "./FinalReport.css";

function FinalReport() {
  const projectStats = [
    {
      value: "24",
      label: "Documents analysed",
      description: "Engineering documents processed successfully.",
    },
    {
      value: "18",
      label: "Requirements identified",
      description: "Project requirements extracted from documentation.",
    },
    {
      value: "48",
      label: "Quantity items",
      description: "Quantity items structured for the project BOQ.",
    },
    {
      value: "03",
      label: "Suppliers identified",
      description: "Recommended supplier options available.",
    },
  ];

  const requirements = [
    {
      number: "01",
      title: "Engineering requirements",
      description:
        "Project requirements have been extracted and organised from the uploaded engineering documentation.",
    },
    {
      number: "02",
      title: "Technical specifications",
      description:
        "Technical specifications and project conditions have been reviewed and structured for further analysis.",
    },
    {
      number: "03",
      title: "Project quantities",
      description:
        "Required quantities have been identified and prepared for the project bill of quantities.",
    },
  ];

  const solutions = [
    {
      number: "01",
      title: "Engineering solution",
      description:
        "Recommended engineering solutions have been identified based on the project requirements and analysis.",
    },
    {
      number: "02",
      title: "Implementation approach",
      description:
        "The identified solutions provide a structured approach for project execution and procurement.",
    },
  ];

  const suppliers = [
    {
      number: "01",
      title: "Recommended Supplier",
      description:
        "Supplier option identified based on the project requirements and quantity breakdown.",
    },
    {
      number: "02",
      title: "Alternative Supplier",
      description:
        "Alternative supplier option available for project procurement requirements.",
    },
    {
      number: "03",
      title: "Additional Supplier",
      description:
        "Additional supplier option identified during the project analysis.",
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="final-report-page">
      {/* HERO */}
      <section className="final-report-hero">
        <div className="final-report-eyebrow">
          STEP 10 / FINAL REPORT
        </div>

        <h1>
          Your final
          <span>report.</span>
        </h1>

        <p>
          Your engineering project report has been compiled and is ready for
          final review.
        </p>
      </section>

      {/* REPORT STATUS */}
      <section className="final-report-section final-report-status">
        <div>
          <div className="final-report-label">REPORT STATUS</div>

          <h2>Engineering report complete</h2>
        </div>

        <div className="final-report-status-badge">
          <span></span>
          FINAL REPORT READY
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="final-report-section final-report-overview">
        <div className="final-report-section-header">
          <div>
            <div className="final-report-label">PROJECT OVERVIEW</div>

            <h2>Engineering project overview</h2>
          </div>
        </div>

        <div className="final-report-stats">
          {projectStats.map((stat) => (
            <div className="final-report-stat" key={stat.label}>
              <div className="final-report-stat-value">
                {stat.value}
              </div>

              <div className="final-report-stat-label">
                {stat.label}
              </div>

              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="final-report-content-section">
        <div className="final-report-label">
          ENGINEERING REQUIREMENTS
        </div>

        <h2>Requirements identified.</h2>

        <div className="final-report-list">
          {requirements.map((item) => (
            <article className="final-report-list-item" key={item.number}>
              <div className="final-report-item-number">
                {item.number}
              </div>

              <div className="final-report-item-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="final-report-content-section">
        <div className="final-report-label">
          ENGINEERING SOLUTIONS
        </div>

        <h2>Recommended solutions.</h2>

        <div className="final-report-list">
          {solutions.map((item) => (
            <article className="final-report-list-item" key={item.number}>
              <div className="final-report-item-number">
                {item.number}
              </div>

              <div className="final-report-item-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BOQ */}
      <section className="final-report-cost-section">
        <div>
          <div className="final-report-label">
            BILL OF QUANTITIES
          </div>

          <h2>Quantity and cost summary</h2>

          <p>
            The identified project requirements have been structured into
            quantity items and prepared for the project BOQ.
          </p>
        </div>

        <div className="final-report-quantity">
          <strong>48</strong>
          <span>QUANTITY ITEMS</span>
        </div>
      </section>

      {/* COST */}
      <section className="final-report-cost-section">
        <div>
          <div className="final-report-label">
            ESTIMATED PROJECT COST
          </div>

          <h2>Estimated project cost</h2>

          <p>
            Based on the engineering requirements and quantity breakdown
            identified during the project analysis.
          </p>
        </div>

        <div className="final-report-cost">
          $59,450
        </div>
      </section>

      {/* SUPPLIERS */}
      <section className="final-report-content-section">
        <div className="final-report-label">
          SUPPLIER RECOMMENDATIONS
        </div>

        <h2>Recommended suppliers.</h2>

        <div className="final-report-list">
          {suppliers.map((item) => (
            <article className="final-report-list-item" key={item.number}>
              <div className="final-report-item-number">
                {item.number}
              </div>

              <div className="final-report-item-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL RECOMMENDATION */}
      <section className="final-report-recommendation">
        <div className="final-report-label">
          FINAL RECOMMENDATION
        </div>

        <h2>Ready to move forward.</h2>

        <p>
          Your engineering project analysis is complete. The final
          requirements, solutions, quantities and supplier recommendations
          are ready for review and project execution.
        </p>
      </section>

      {/* ACTIONS */}
      <section className="final-report-actions">
        <button
          className="final-report-back-button"
          onClick={() => {
            window.location.href = "/summary";
          }}
        >
          ← Back to Summary
        </button>

        <button
          className="final-report-print-button"
          onClick={handlePrint}
        >
          Download / Print Report
          <span>→</span>
        </button>
      </section>
    </main>
  );
}

export default FinalReport;