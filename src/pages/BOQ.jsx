import { Link } from "react-router-dom";

function BOQ() {
  const boqItems = [
    {
      id: "01",
      category: "HVAC",
      description: "HVAC system optimisation",
      quantity: "12",
      unit: "Units",
      cost: "$24,000",
    },
    {
      id: "02",
      category: "Electrical",
      description: "Electrical load distribution",
      quantity: "18",
      unit: "Items",
      cost: "$15,500",
    },
    {
      id: "03",
      category: "Specifications",
      description: "Engineering specification updates",
      quantity: "8",
      unit: "Items",
      cost: "$8,750",
    },
    {
      id: "04",
      category: "Plumbing",
      description: "Plumbing system requirements",
      quantity: "10",
      unit: "Units",
      cost: "$11,200",
    },
  ];

  return (
    <main className="boq-page">
      <div className="boq-container">

        {/* HEADER */}
        <div className="boq-header">
          <span className="boq-eyebrow">
            STEP 06 / BILL OF QUANTITIES
          </span>

          <h1>
            Build your Bill
            <span> of Quantities.</span>
          </h1>

          <p>
            NUBEX has structured the identified engineering requirements
            into a clear quantity and cost breakdown for your project.
          </p>
        </div>

        {/* PROGRESS */}
        <div className="boq-progress">

          <div className="boq-step completed">
            <span>01</span>
            <strong>PROJECT</strong>
          </div>

          <div className="boq-line"></div>

          <div className="boq-step completed">
            <span>02</span>
            <strong>DOCUMENTS</strong>
          </div>

          <div className="boq-line"></div>

          <div className="boq-step completed">
            <span>03</span>
            <strong>ANALYSIS</strong>
          </div>

          <div className="boq-line"></div>

          <div className="boq-step completed">
            <span>04</span>
            <strong>RESULTS</strong>
          </div>

          <div className="boq-line"></div>

          <div className="boq-step completed">
            <span>05</span>
            <strong>SOLUTIONS</strong>
          </div>

          <div className="boq-line"></div>

          <div className="boq-step active">
            <span>06</span>
            <strong>BOQ</strong>
          </div>

        </div>

        {/* SUMMARY */}
        <section className="boq-summary">

          <div className="boq-summary-header">
            <div>
              <span className="boq-section-label">
                QUANTITY SUMMARY
              </span>

              <h2>Project Bill of Quantities</h2>
            </div>

            <span className="boq-status">
              ● ANALYSIS BASED
            </span>
          </div>

          <div className="boq-stats">

            <div className="boq-stat">
              <strong>48</strong>
              <span>Total items</span>
            </div>

            <div className="boq-stat">
              <strong>4</strong>
              <span>Engineering categories</span>
            </div>

            <div className="boq-stat">
              <strong>$59,450</strong>
              <span>Estimated total</span>
            </div>

          </div>

        </section>

        {/* BOQ TABLE */}
        <section className="boq-table-section">

          <div className="boq-table-heading">
            <div>
              <span className="boq-section-label">
                PROJECT REQUIREMENTS
              </span>

              <h2>Quantity breakdown</h2>
            </div>

            <span className="boq-item-count">
              04 ITEMS
            </span>
          </div>

          <div className="boq-table">

            <div className="boq-table-row boq-table-head">
              <div>NO.</div>
              <div>CATEGORY</div>
              <div>DESCRIPTION</div>
              <div>QTY</div>
              <div>UNIT</div>
              <div>EST. COST</div>
            </div>

            {boqItems.map((item) => (
              <div className="boq-table-row" key={item.id}>

                <div className="boq-number">
                  {item.id}
                </div>

                <div className="boq-category">
                  {item.category}
                </div>

                <div className="boq-description">
                  {item.description}
                </div>

                <div className="boq-quantity">
                  {item.quantity}
                </div>

                <div className="boq-unit">
                  {item.unit}
                </div>

                <div className="boq-cost">
                  {item.cost}
                </div>

              </div>
            ))}

          </div>

        </section>

        {/* TOTAL */}
        <section className="boq-total">

          <div>
            <span>ESTIMATED PROJECT COST</span>
            <p>
              Based on the engineering requirements identified during
              document analysis.
            </p>
          </div>

          <strong>$59,450</strong>

        </section>

        {/* ACTIONS */}
        <div className="boq-actions">

          <Link to="/solutions" className="boq-back-button">
            ← Back
          </Link>

          <Link to="/suppliers" className="boq-next-button">
            Continue to Suppliers
            <span>→</span>
          </Link>

        </div>

      </div>
    </main>
  );
}

export default BOQ;