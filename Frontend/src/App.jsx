import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import ContactPopup from "./component/ContactPopup.jsx";

import Home from "./component/Home/Home.jsx";
import Order from "./component/Order/Order.jsx";
import About from "./component/About/About.jsx";

import TermsAndCondition from "./component/TC/Tc.jsx";
import Privacy from "./component/Privacy/Privacy.jsx";
import Contact from "./component/Contact/Conact.jsx";
import Warranty from "./component/Warrenty/Warranty.jsx";
import UsedPart from "./component/UsedPart/UsedPart.jsx";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
// ✅ Scroll instantly to top (no animation flicker)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use instant scroll to avoid flickering
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <ScrollToTop /> {/* ensures page always starts at top */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/request-a-parts" element={<Home />} />
        <Route path="/used-auto-parts/:partName" element={<UsedPart />} />

      </Routes>
      <ContactPopup />
     <Footer />
    </>
  );
}

export default App;
