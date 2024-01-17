import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout         from "./pages/Layout";
// import Home           from "./pages/Home";
// import SkillShowcase  from "./pages/SkillShowcase";
// import Contact        from "./pages/Contact";
// import NoPage         from "./pages/NoPage";
// import SVGTest        from "./pages/SVGTest";


/* Leila */

import HomeLeila from "./pages/HomeLeila";
import AboutUs from "./pages/AboutUs";
import Subjects from "./pages/Subjects";
import ContactUs from "./pages/ContactUs";
import Testimonials from "./pages/Testimonials";
import NoPage         from "./pages/NoPage";



// import ScrollReveal from 'scrollreveal'
//  Nurture your mind. Foster your future.
//  NextGen Tutoring

/*
Leila

HomeLeila
About Us
Subjects
Contact
Testimonials
*/

export default function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="skillshowcase" element={<SkillShowcase />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="svgtest" element={<SVGTest />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeLeila />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="subjects" element={<Subjects />} />  -
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
