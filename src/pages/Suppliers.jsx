import { Link } from "react-router-dom";

function Suppliers() {
  const suppliers = [
    {
      number: "01",
      tag: "RECOMMENDED",
      title: "HVAC Equipment Supplier",
      description:
        "Recommended supplier options for HVAC equipment based on the identified project requirements.",
      category: "HVAC",
      priority: "HIGH PRIORITY",
    },
    {
      number: "02",
      tag: "RECOMMENDED",
      title: "Electrical Components Supplier",
      description:
        "Suitable supplier options for electrical components and load distribution requirements.",
      category: "ELECTRICAL",
      priority: "MEDIUM PRIORITY",
    },
    {
      number: "03",
      tag: "INSIGHT",
      title: "Plumbing Systems Supplier",
      description:
        "Supplier recommendations for plumbing systems based on the identified engineering requirements.",
      category: "PLUMBING",
      priority: "MEDIUM PRIORITY",
    },
  ];

  return (
    <main className="suppliers-page">
      <style>{`
        .suppliers-page {
          min-height: 100vh;
          background: #050505;
          color: #f5f5f5;
          padding: 110px 24px 70px;
          font-family: Georgia, "Times New Roman", serif;
        }

        .suppliers-container {
          width: min(720px, 100%);
          margin: 0 auto;
        }

        .suppliers-eyebrow {
          margin-bottom: 18px;
          color: #777;
          font-family: Arial, sans-serif;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .suppliers-title {
          margin: 0;
          font-size: clamp(48px, 7vw, 76px);
          line-height: 0.98;
          font-weight: 400;
          letter-spacing: -3px;
        }

        .suppliers-title-muted {
          color: #555;
        }

        .suppliers-description {
          max-width: 590px;
          margin: 25px 0 48px;
          color: #999;
          font-size: 14px;
          line-height: 1.8;
        }

        .suppliers-steps {
          display: flex;
          align-items: center;
          width: 100%;
          margin-bottom: 52px;
          font-family: Arial, sans-serif;
        }

        .supplier-step {
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 0;
        }

        .supplier-step:last-child {
          flex: 0;
        }

        .supplier-step-number {
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

        .supplier-step.active .supplier-step-number {
          border-color: #eee;
          color: #fff;
        }

        .supplier-step-label {
          margin-left: 9px;
          color: #666;
          font-size: 7px;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        .supplier-step.active .supplier-step-label {
          color: #fff;
        }

        .supplier-step-line {
          height: 1px;
          flex: 1;
          margin: 0 14px;
          background: #282828;
        }

        .supplier-panel {
          border: 1px solid #292929;
          background: #070707;
        }

        .supplier-panel-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 27px 28px 25px;
          border-bottom: 1px solid #292929;
        }

        .supplier-panel-eyebrow {
          margin-bottom: 10px;
          color: #666;
          font-family: Arial, sans-serif;
          font-size: 8px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .supplier-panel-title {
          margin: 0;
          font-size: 20px;
          font-weight: 400;
        }

        .supplier-status {
          color: #00a875;
          font-family: Arial, sans-serif;
          font-size: 8px;
          letter-spacing: 1.5px;
        }

        .supplier-card {
          position: relative;
          padding: 28px 28px 30px 56px;
          border-bottom: 1px solid #292929;
        }

        .supplier-card:last-child {
          border-bottom: none;
        }

        .supplier-number {
          position: absolute;
          left: 27px;
          top: 30px;
          color: #555;
          font-family: Arial, sans-serif;
          font-size: 8px;
        }

        .supplier-tag {
          display: inline-block;
          margin-bottom: 16px;
          padding: 5px 9px;
          border: 1px solid #353535;
          color: #777;
          font-family: Arial, sans-serif;
          font-size: 7px;
          letter-spacing: 2px;
        }

        .supplier-card-title {
          margin: 0 0 12px;
          font-size: 20px;
          font-weight: 400;
        }

        .supplier-card-description {
          max-width: 570px;
          margin: 0;
          color: #888;
          font-size: 12px;
          line-height: 1.7;
        }

        .supplier-meta {
          display: flex;
          gap: 28px;
          margin-top: 22px;
          color: #555;
          font-family: Arial, sans-serif;
          font-size: 7px;
          letter-spacing: 2px;
        }

        .supplier-next {
          margin-top: 58px;
        }

        .supplier-next-eyebrow {
          margin-bottom: 12px;
          color: #666;
          font-family: Arial, sans-serif;
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .supplier-next-title {
          margin: 0;
          font-size: 28px;
          font-weight: 400;
        }

        .supplier-next-description {
          max-width: 580px;
          margin: 18px 0 40px;
          color: #888;
          font-size: 12px;
          line-height: 1.8;
        }

        .supplier-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 25px;
          border-top: 1px solid #282828;
        }

        .supplier-back,
        .supplier-button {
          text-decoration: none;
          font-family: Arial, sans-serif;
          font-size: 10px;
        }

        .supplier-back {
          padding: 12px 17px;
          border: 1px solid #2d2d2d;
          color: #999;
        }

        .supplier-button {
          padding: 14px 23px;
          background: #f5f5f5;
          color: #050505;
          border: 1px solid #f5f5f5;
          font-weight: 600;
        }

        .supplier-button span {
          margin-left: 12px;
          font-size: 14px;
        }

        @media (max-width: 700px) {
          .suppliers-page {
            padding: 80px 18px 50px;
          }

          .suppliers-title {
            font-size: 48px;
            letter-spacing: -2px;
          }

          .suppliers-description {
            margin-bottom: 35px;
          }

          .suppliers-steps {
            overflow-x: auto;
            padding-bottom: 8px;
          }

          .supplier-step {
            flex: 0 0 auto;
          }

          .supplier-step-line {
            width: 35px;
            flex: 0 0 35px;
          }

          .supplier-panel-header {
            padding: 22px 20px;
          }

          .supplier-card {
            padding: 25px 20px 27px 48px;
          }

          .supplier-number {
            left: 20px;
          }

          .supplier-meta {
            flex-wrap: wrap;
            gap: 15px;
          }

          .supplier-actions {
            gap: 15px;
          }

          .supplier-button,
          .supplier-back {
            font-size: 9px;
          }
        }
      `}</style>

      <div className="suppliers-container">
        {/* Header */}
        <div className="suppliers-eyebrow">STEP 07 / SUPPLIERS</div>

        <h1 className="suppliers-title">
          Find the right
          <br />
          <span className="suppliers-title-muted">
            suppliers for your project.
          </span>
        </h1>

        <p className="suppliers-description">
          Based on the engineering analysis and quantity breakdown, NUBEX has
          identified recommended suppliers and sourcing opportunities for your
          project.
        </p>

        {/* Steps */}
        <div className="suppliers-steps">
          <div className="supplier-step">
            <div className="supplier-step-number">01</div>
            <div className="supplier-step-label">PROJECT</div>
            <div className="supplier-step-line" />
          </div>

          <div className="supplier-step">
            <div className="supplier-step-number">02</div>
            <div className="supplier-step-label">DOCUMENTS</div>
            <div className="supplier-step-line" />
          </div>

          <div className="supplier-step">
            <div className="supplier-step-number">03</div>
            <div className="supplier-step-label">ANALYSIS</div>
            <div className="supplier-step-line" />
          </div>

          <div className="supplier-step">
            <div className="supplier-step-number">04</div>
            <div className="supplier-step-label">RESULTS</div>
            <div className="supplier-step-line" />
          </div>

          <div className="supplier-step">
            <div className="supplier-step-number">05</div>
            <div className="supplier-step-label">SOLUTIONS</div>
            <div className="supplier-step-line" />
          </div>

          <div className="supplier-step">
            <div className="supplier-step-number">06</div>
            <div className="supplier-step-label">BOQ</div>
            <div className="supplier-step-line" />
          </div>

          <div className="supplier-step active">
            <div className="supplier-step-number">07</div>
            <div className="supplier-step-label">SUPPLIERS</div>
          </div>
        </div>

        {/* Suppliers */}
        <section className="supplier-panel">
          <div className="supplier-panel-header">
            <div>
              <div className="supplier-panel-eyebrow">
                SUPPLIER RECOMMENDATIONS
              </div>

              <h2 className="supplier-panel-title">
                Suppliers identified
              </h2>
            </div>

            <div className="supplier-status">● ANALYSIS BASED</div>
          </div>

          {suppliers.map((supplier) => (
            <article className="supplier-card" key={supplier.number}>
              <span className="supplier-number">{supplier.number}</span>

              <div className="supplier-tag">{supplier.tag}</div>

              <h3 className="supplier-card-title">{supplier.title}</h3>

              <p className="supplier-card-description">
                {supplier.description}
              </p>

              <div className="supplier-meta">
                <span>{supplier.category}</span>
                <span>{supplier.priority}</span>
              </div>
            </article>
          ))}
        </section>

        {/* Next Step */}
        <section className="supplier-next">
          <div className="supplier-next-eyebrow">NEXT STEP</div>

          <h2 className="supplier-next-title">
            Review your supplier options.
          </h2>

          <p className="supplier-next-description">
            Continue to review recommended suppliers and sourcing
            opportunities based on the project requirements and bill of
            quantities.
          </p>
        </section>

        {/* Actions */}
        <div className="supplier-actions">
          <Link to="/boq" className="supplier-back">
            ← Back
          </Link>

          <button
            className="supplier-button"
            onClick={() => alert("Supplier review coming next.")}
          >
            Continue to Review
            <span>→</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Suppliers;