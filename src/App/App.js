import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../pages/Main";
import Project from "../pages/Project";
import Contacts from "../pages/Contacts";
import Header from "../components/Header/Header";
import ScrollToTop from "../utils/scrollToTop";
import ProjectReview from "../components/ProjectReview/ProjectReview";
import CV from "../components/CV/CV";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/project-review/:id" element={<ProjectReview />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
