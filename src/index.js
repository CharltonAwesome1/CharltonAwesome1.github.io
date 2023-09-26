import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SkillShowcase from "./pages/SkillShowcase";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import SVGTest from "./pages/SVGTest";

// import ScrollReveal from 'scrollreveal'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skillshowcase" element={<SkillShowcase />} />
          <Route path="contact" element={<Contact />} />
          <Route path="svgtest" element={<SVGTest />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
