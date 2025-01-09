import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/services/Services";
import WhyChooseUs from "./Components/whychoseus/whychoseus";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Landing></Landing>
      <AboutUs></AboutUs>
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
    </>
  );
}

export default App;
