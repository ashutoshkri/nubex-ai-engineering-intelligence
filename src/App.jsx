import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import CreateProject from "./pages/CreateProject";
import UploadDocuments from "./pages/UploadDocuments";
import AIAnalysis from "./pages/AIAnalysis";
import AnalysisResults from "./pages/AnalysisResults";
import Solutions from "./pages/Solutions";
import BOQ from "./pages/BOQ";
import Suppliers from "./pages/Suppliers";
import SupplierReview from "./pages/SupplierReview";
import Summary from "./pages/Summary";
import FinalReport from "./pages/FinalReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/upload-documents" element={<UploadDocuments />} />
        <Route path="/ai-analysis" element={<AIAnalysis />} />
        <Route path="/analysis-results" element={<AnalysisResults />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/boq" element={<BOQ />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/supplier-review" element={<SupplierReview />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/final-report" element={<FinalReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;