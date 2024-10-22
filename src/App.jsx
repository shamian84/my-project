import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import First from "./Component/First";
import Second from "./Component/Second";
import Third from "./Component/Third";
import Fourth from "./Component/Fourth";
import Fifth from "./Component/Fifth";
import Sixth from "./Component/Sixth";
import Footer from "./Component/Footer";
import Contact from "./Pages/ContactUs";
import About from "./Pages/AboutUs";
import AllCategories from "./Pages/AllCategories";
import Login from "./Pages/Login";
import HelpAndSupport from "./Pages/HelpAndSupport";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <First />
                <Second />
                <Third />
                <Fourth />
                <Fifth />
                <Sixth />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/allcategories" element={<AllCategories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Help" element={<HelpAndSupport />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
