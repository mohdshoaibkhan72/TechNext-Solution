import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/services/Services";
import WhyChooseUs from "./Components/whychoseus/whychoseus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";

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
              <WhyChooseUs />
              <Testimonials />
            </>
          }
        />
        {/* Other individual routes */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
