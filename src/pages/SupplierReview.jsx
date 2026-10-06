import { Link } from "react-router-dom";

function SupplierReview() {
  const suppliers = [
    {
      number: "01",
      name: "HVAC Equipment Supplier",
      category: "HVAC",
      priority: "HIGH PRIORITY",
      cost: "$24,000",
      status: "RECOMMENDED",
      description:
        "Recommended supplier for the identified HVAC system requirements and optimisation work.",
    },
    {
      number: "02",
      name: "Electrical Components Supplier",
      category: "ELECTRICAL",
      priority: "MEDIUM PRIORITY",
      cost: "$15,500",
      status: "RECOMMENDED",
      description:
        "Suitable supplier option for electrical load distribution and component requirements.",
    },
    {
      number: "03",
      name: "Plumbing Systems Supplier",
      category: "PLUMBING",
      priority: "MEDIUM PRIORITY",
      cost: "$11,200",
      status: "INSIGHT",
      description:
        "Supplier option identified for the project's plumbing system requirements.",
    },
  ];

  return (
    <main className="supplier-review-page">
      <style>{`
        .supplier-review-page {
          min-height: 100vh;
          background: #050505;
          color: #f5f5f5;
          padding: 110px 24px 70px;
          font-family: Georgia, "Times New Roman", serif;
        }

        .supplier-review-container {
          width: min(720px, 100%);
          margin: 0 auto;
        }

        .review-eyebrow {
          margin-bottom: 18px;
          color: #777;
          font-family: Arial, sans-serif;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .review-title {
          margin: 0;
          font-size: clamp(48px, 7vw, 76px);
          line-height: 0.98;
          font-weight: 400;
          letter-spacing: -3px;
        }

        .review-title-muted {
          color: #555;
        }

        .review-description {
          max-width: 600px;
          margin: 25px 0 48px;
          color: #999;
          font-size: 14px;
          line-height: 1.8;
        }

        .review-steps {
          display: flex;
          align-items: center;
          width: 100%;
          margin-bottom: 52px;
          font-family: Arial, sans-serif;
        }

        .review-step {
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 0;
        }

        .review-step:last-child {
          flex: 0;
        }

        .review-step-number {
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #333;
          border-radius: 50%;
          color: #777;
          font-size: 7px;
        }

        .review-step.active .review-step-number {
          border-color: #eee;
          color: #fff;
        }

        .review-step-label {
          margin-left: 9px;
          color: #666;
          font-size: 7px;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        .review-step.active .review-step-label {
          color: #fff;
        }

        .review-step-line {
          height: 1px;
          flex: 1;
          margin: 0 14px;
          background: #282828;
        }

        .review-summary {
          border: 1px solid #292929;
          background: #070707;
        }

        .review-summary-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 27px 28px 25px;
          border-bottom: 1px solid #292929;
        }

        .review-summary-eyebrow {
          margin-bottom: 10px;
          color: #666;
          font-family: Arial, sans-serif;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .review-summary-title {
          margin: 0;
          font-size: 20px;
          font-weight: 400;
        }

        .review-status {
          color: #00a875;
          font-family: Arial, sans-serif;
          font-size: 8px;
          letter-spacing: 1.5px;
        }

        .review-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-bottom: 1px solid #292929;
        }

        .review-stat {
          padding: 25px 24px;
          border-right: 1px solid #292929;
        }

        .review-stat:last-child {
          border-right: none;
        }

        .review-stat-value {
          margin-bottom: 7px;
          font-size: 28px;
        }

        .review-stat-label {
          color: #777;
          font-family: Arial, sans-serif;
          font-size: 8px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .review-supplier {
          position: relative;
          padding: 28px 28px 30px 56px;
          border-bottom: 1px solid #292929;
        }

        .review-supplier:last-child {
          border-bottom: none;
        }

        .review-supplier-number {
          position: absolute;
          left: 27px;
          top: 31px;
          color: #555;
          font-family: Arial, sans-serif;
          font-size: 8px;
        }

        .review-supplier-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 14px;
        }

        .review-supplier-name {
          margin: 0;
          font-size: 19px;
          font-weight: 400;
        }

        .review-supplier-status {
          padding: 5px 9px;
          border: 1px solid #353535;
          color: #777;
          font-family: Arial, sans-serif;
          font-size: 7px;
          letter-spacing: 1.5px;
          white-space: nowrap;
        }

        .review-supplier-description {
          max-width: 580px;
          margin: 0;
          color: #888;
          font-size: 12px;
          line-height: 1.7;
        }

        .review-supplier-meta {
          display: flex;
          gap: 28px;
          margin-top: 20px;
          color: #555;
          font-family: Arial, sans-serif;
          font-size: 7px;
          letter-spacing: 2px;
        }

        .review-supplier-cost {
          margin-top: 18px;
          color: #f5f5f5;
          font-size: 16px;
        }

        .review-note {
          margin-top: 58px;
        }

        .review-note-eyebrow {
          margin-bottom: 12px;
          color: #666;
          font-family: Arial, sans-serif;
          font-size: 8px;
          letter-spacing: 3px;
        }

        .review-note-title {
          margin: 0;
          font-size: 29px;
          font-weight: 400;
        }

        .review-note-text {
          max-width: 600px;
          margin: 18px 0 40px;
          color: #888;
          font-size: 12px;
          line-height: 1.8;
        }

        .review-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 25px;
          border-top: 1px solid #282828;
        }

        .review-back {
          padding: 12px 17px;
          border: 1px solid #2d2d2d;
          color: #999;
          text-decoration: none;
          font-family: Arial, sans-serif;
          font-size: 10px;
        }

        .review-continue {
          padding: 14px 23px;
          background: #f5f5f5;
          color: #050505;
          text-decoration: none;
          font-family: Arial, sans-serif;
          font-size: 10px;
          font-weight: 600;
        }

        .review-continue span {
          margin-left: 12px;
          font-size: 14px;
        }

        @media (max-width: 700px) {
          .supplier-review-page {
            padding: 80px 18px 50px;
          }

          .review-title {
            font-size: 48px;
            letter-spacing: -2px;
          }

          .review-steps {
            overflow-x: auto;
            padding-bottom: 8px;
          }

          .review-step {
            flex: 0 0 auto;
          }

          .review-step-line {
            width: 35px;
            flex: 0 0 35px;
          }

          .review-summary-header {
            padding: 22px 20px;
          }

          .review-stats {
            grid-template-columns: 1fr;
          }

          .review-stat {
            border-right: none;
            border-bottom: 1px solid #292929;
          }

          .review-stat:last-child {
            border-bottom: none;
          }

          .review-supplier {
            padding: 25px 20px 27px 48px;
          }

          .review-supplier-number {
            left: 20px;
          }

          .review-supplier-top {
            align-items: flex-start;
            flex-direction: column;
          }

          .review-supplier-meta {
            flex-wrap: wrap;
            gap: 15px;
          }

          .review-actions {
            gap: 15px;
          }

          .review-continue,
          .review-back {
            font-size: 9px;
          }
        }
      `}</style>

      <div className="supplier-review-container">
        {/* Header */}
        <div className="review-eyebrow">STEP 08 / SUPPLIER REVIEW</div>

        <h1 className="review-title">
          Review your
          <br />
          <span className="review-title-muted">
            supplier recommendations.
          </span>
        </h1>

        <p className="review-description">
          Review the supplier recommendations identified from your engineering
          analysis and bill of quantities before moving forward with sourcing.
        </p>

        {/* Progress */}
        <div className="review-steps">
          <div className="review-step">
            <div className="review-step-number">01</div>
            <div className="review-step-label">PROJECT</div>
            <div className="review-step-line" />
          </div>

          <div className="review-step">
            <div className="review-step-number">02</div>
            <div className="review-step-label">DOCUMENTS</div>
            <div className="review-step-line" />
          </div>

          <div className="review-step">
            <div className="review-step-number">03</div>
            <div className="review-step-label">ANALYSIS</div>
            <div className="review-step-line" />
          </div>

          <div className="review-step">
            <div className="review-step-number">04</div>
            <div className="review-step-label">RESULTS</div>
            <div className="review-step-line" />
          </div>

          <div className="review-step">
            <div className="review-step-number">05</div>
            <div className="review-step-label">SOLUTIONS</div>
            <div className="review-step-line" />
          </div>

          <div className="review-step">
            <div className="review-step-number">06</div>
            <div className="review-step-label">BOQ</div>
            <div className="review-step-line" />
          </div>

          <div className="review-step">
            <div className="review-step-number">07</div>
            <div className="review-step-label">SUPPLIERS</div>
            <div className="review-step-line" />
          </div>

          <div className="review-step active">
            <div className="review-step-number">08</div>
            <div className="review-step-label">REVIEW</div>
          </div>
        </div>

        {/* Summary */}
        <section className="review-summary">
          <div className="review-summary-header">
            <div>
              <div className="review-summary-eyebrow">
                SUPPLIER REVIEW
              </div>

              <h2 className="review-summary-title">
                Recommended suppliers
              </h2>
            </div>

            <div className="review-status">● READY FOR REVIEW</div>
          </div>

          {/* Stats */}
          <div className="review-stats">
            <div className="review-stat">
              <div className="review-stat-value">03</div>
              <div className="review-stat-label">
                Suppliers identified
              </div>
            </div>

            <div className="review-stat">
              <div className="review-stat-value">03</div>
              <div className="review-stat-label">
                Categories covered
              </div>
            </div>

            <div className="review-stat">
              <div className="review-stat-value">$50,700</div>
              <div className="review-stat-label">
                Supplier estimate
              </div>
            </div>
          </div>

          {/* Supplier list */}
          {suppliers.map((supplier) => (
            <article className="review-supplier" key={supplier.number}>
              <span className="review-supplier-number">
                {supplier.number}
              </span>

              <div className="review-supplier-top">
                <h3 className="review-supplier-name">
                  {supplier.name}
                </h3>

                <div className="review-supplier-status">
                  {supplier.status}
                </div>
              </div>

              <p className="review-supplier-description">
                {supplier.description}
              </p>

              <div className="review-supplier-meta">
                <span>{supplier.category}</span>
                <span>{supplier.priority}</span>
              </div>

              <div className="review-supplier-cost">
                {supplier.cost}
              </div>
            </article>
          ))}
        </section>

        {/* Next */}
        <section className="review-note">
          <div className="review-note-eyebrow">NEXT STEP</div>

          <h2 className="review-note-title">
            Ready to move forward.
          </h2>

          <p className="review-note-text">
            Review the recommended suppliers and continue when you are ready
            to proceed with the sourcing process for your engineering
            project.
          </p>
        </section>

        {/* Actions */}
        <div className="review-actions">
          <Link to="/suppliers" className="review-back">
            ← Back
          </Link>

          <Link to="/supplier-summary" className="review-continue">
            Continue to Summary
            <span>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default SupplierReview;