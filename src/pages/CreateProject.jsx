import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CreateProject.css";

function CreateProject() {
  const navigate = useNavigate();

  const [project, setProject] = useState({
    name: "",
    type: "",
    location: "",
    discipline: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProject((previousProject) => ({
      ...previousProject,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Project Details:", project);

    navigate("/upload-documents");
  };

  return (
    <main className="project-page">
      <div className="project-container">

        <div className="page-header">
          <span className="section-eyebrow">
            STEP 01 / NEW PROJECT
          </span>

          <h1>
            Create an
            <br />
            engineering project.
          </h1>

          <p>
            Start by providing some basic information about your
            engineering project before uploading your documents.
          </p>
        </div>

        <form
          className="project-form"
          onSubmit={handleSubmit}
        >

          {/* PROJECT NAME */}

          <div className="form-group">
            <label htmlFor="project-name">
              Project Name
            </label>

            <input
              id="project-name"
              name="name"
              type="text"
              value={project.name}
              onChange={handleChange}
              placeholder="e.g. Riyadh Commercial Tower"
              required
            />
          </div>

          {/* PROJECT TYPE + LOCATION */}

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="project-type">
                Project Type
              </label>

              <select
                id="project-type"
                name="type"
                value={project.type}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select project type
                </option>

                <option value="Commercial">
                  Commercial
                </option>

                <option value="Residential">
                  Residential
                </option>

                <option value="Industrial">
                  Industrial
                </option>

                <option value="Infrastructure">
                  Infrastructure
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="project-location">
                Location
              </label>

              <input
                id="project-location"
                name="location"
                type="text"
                value={project.location}
                onChange={handleChange}
                placeholder="e.g. Riyadh, Saudi Arabia"
                required
              />
            </div>

          </div>

          {/* DISCIPLINE */}

          <div className="form-group">
            <label htmlFor="engineering-discipline">
              Engineering Discipline
            </label>

            <select
              id="engineering-discipline"
              name="discipline"
              value={project.discipline}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select discipline
              </option>

              <option value="Mechanical">
                Mechanical
              </option>

              <option value="Electrical">
                Electrical
              </option>

              <option value="Plumbing">
                Plumbing
              </option>

              <option value="HVAC">
                HVAC
              </option>

              <option value="MEP">
                MEP
              </option>

              <option value="Structural">
                Structural
              </option>
            </select>
          </div>

          {/* DESCRIPTION */}

          <div className="form-group">
            <label htmlFor="project-description">
              Project Description
            </label>

            <textarea
              id="project-description"
              name="description"
              value={project.description}
              onChange={handleChange}
              rows="5"
              placeholder="Describe your engineering project..."
              required
            />
          </div>

          {/* ACTIONS */}

          <div className="form-actions">

            <Link
              to="/"
              className="back-button"
            >
              ← Back
            </Link>

            <button
              type="submit"
              className="continue-button"
            >
              Continue
              <span>→</span>
            </button>

          </div>

        </form>

      </div>
    </main>
  );
}

export default CreateProject;