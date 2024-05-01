import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MemberRegistrationModal from "./pages/MemberRegistrationModal";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/register" element={<MemberRegistrationModal />} />
      </Routes>
    </Router>
  );
}

export default App;
