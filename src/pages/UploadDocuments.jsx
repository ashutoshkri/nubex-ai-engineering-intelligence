import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UploadDocuments.css";

function UploadDocuments() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const allowedTypes = [
    ".pdf",
    ".dwg",
    ".dxf",
    ".docx",
    ".xlsx",
  ];

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 KB";

    const size = bytes / 1024;

    if (size < 1024) {
      return `${size.toFixed(1)} KB`;
    }

    return `${(size / 1024).toFixed(1)} MB`;
  };

  const isValidFile = (file) => {
    const extension = "." + file.name.split(".").pop().toLowerCase();

    return allowedTypes.includes(extension);
  };

  const addFiles = (selectedFiles) => {
    const validFiles = Array.from(selectedFiles).filter(isValidFile);

    setFiles((previousFiles) => {
      const existingNames = previousFiles.map((file) => file.name);

      const newFiles = validFiles.filter(
        (file) => !existingNames.includes(file.name)
      );

      return [...previousFiles, ...newFiles];
    });
  };

  const handleFileChange = (event) => {
    addFiles(event.target.files);

    // Allow selecting the same file again
    event.target.value = "";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    addFiles(event.dataTransfer.files);
  };

  const removeFile = (fileName) => {
    setFiles((previousFiles) =>
      previousFiles.filter((file) => file.name !== fileName)
    );
  };

  const handleContinue = () => {
    if (files.length === 0) {
      alert("Please upload at least one engineering document.");
      return;
    }

    // Save selected files temporarily
    sessionStorage.setItem(
      "nubexUploadedFiles",
      JSON.stringify(
        files.map((file) => ({
          name: file.name,
          size: file.size,
          type: file.type,
        }))
      )
    );

    navigate("/ai-analysis");
  };

  return (
    <main className="upload-page">
      <div className="upload-container">

        {/* HEADER */}
        <div className="upload-header">
          <span className="section-eyebrow">
            STEP 02 / DOCUMENTS
          </span>

          <h1>
            Upload your
            <br />
            <span>engineering documents.</span>
          </h1>

          <p>
            Upload drawings, plans and project documents. NUBEX will
            analyse them and extract the information required for your
            engineering project.
          </p>
        </div>

        {/* STEP INDICATOR */}
        <div className="upload-steps">

          <div className="upload-step completed">
            <span>01</span>
            <strong>PROJECT</strong>
          </div>

          <div className="step-line"></div>

          <div className="upload-step active">
            <span>02</span>
            <strong>DOCUMENTS</strong>
          </div>

          <div className="step-line"></div>

          <div className="upload-step">
            <span>03</span>
            <strong>ANALYSIS</strong>
          </div>

          <div className="step-line"></div>

          <div className="upload-step">
            <span>04</span>
            <strong>RESULTS</strong>
          </div>

        </div>

        {/* UPLOAD AREA */}
        <div
          className={`upload-box ${isDragging ? "dragging" : ""}`}
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >

          <div className="upload-icon">
            ↑
          </div>

          <h2>Upload engineering files</h2>

          <p>
            Drag and drop your files here or choose files from your computer.
          </p>

          <button
            type="button"
            className="choose-files-button"
            onClick={() => fileInputRef.current.click()}
          >
            Choose Files
            <span>↗</span>
          </button>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.dwg,.dxf,.docx,.xlsx"
            onChange={handleFileChange}
            hidden
          />

          <small>
            Supported formats: PDF, DWG, DXF, DOCX, XLSX
          </small>

        </div>

        {/* FILE LIST */}
        <section className="uploaded-section">

          <div className="uploaded-heading">
            <div>
              <span className="section-eyebrow">
                PROJECT DOCUMENTS
              </span>

              <h2>Uploaded files</h2>
            </div>

            <span className="file-count">
              {files.length.toString().padStart(2, "0")} FILES
            </span>
          </div>

          {files.length === 0 ? (
            <div className="empty-files">
              <span>NO DOCUMENTS UPLOADED</span>

              <p>
                Your uploaded engineering documents will appear here.
              </p>
            </div>
          ) : (
            <div className="file-list">

              {files.map((file) => (
                <div className="file-card" key={file.name}>

                  <div className="file-info">

                    <div className="file-type">
                      DOC
                    </div>

                    <div>
                      <h3>{file.name}</h3>

                      <p>
                        {formatFileSize(file.size)}
                      </p>
                    </div>

                  </div>

                  <button
                    type="button"
                    className="remove-file"
                    onClick={() => removeFile(file.name)}
                    aria-label={`Remove ${file.name}`}
                  >
                    ×
                  </button>

                </div>
              ))}

            </div>
          )}

        </section>

        {/* ACTIONS */}
        <div className="upload-actions">

          <Link
            to="/create-project"
            className="back-button"
          >
            ← Back
          </Link>

          <button
            type="button"
            className="continue-button"
            onClick={handleContinue}
          >
            Continue to Analysis
            <span>→</span>
          </button>

        </div>

      </div>
    </main>
  );
}

export default UploadDocuments;