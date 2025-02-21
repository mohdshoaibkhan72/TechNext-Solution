import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/services/Services";
import WhyChooseus from "./Components/whychoseus/Whychoseus.jsx";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Components/pages/Portfolio/portfolio";
import ContactUs from "./Components/pages/ContactUs/Contactus";
import Blogs from "./Components/pages/Blogs/blogs.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route to display all components */}
        <Route
          path="/"
          element={
            <>
              <Landing />
              <AboutUs />
              <Services />
              <WhyChooseus />
              <Blogs></Blogs>
              <Testimonials />
            </>
          }
        />
        {/* Other individual routes */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why-choose-us" element={<WhyChooseus />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
