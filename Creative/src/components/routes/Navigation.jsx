import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Main Pages
import Home from "../../pages/Home";
import About from "@/pages/About";
import IAPag from "@/pages/IAPag";  // IA Page
import Tools from "@/pages/Tools";  // IA Tools Page
import Tool1 from "@/pages/Tool1";  // Adobe Page
import Tool2 from "@/pages/Tool2";  // Runway
import Tool3 from "@/pages/Tool3";  // Leonardo.Ai
import Tool4 from "@/pages/Tool4";  // ChatGPT
import Tool5 from "@/pages/Tool5";  // MSDesigner
import Tool6 from "@/pages/Tool6";  // MidJourney
import ScrollToTop from "../_partials/ScrollToTop";


function Navigation() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [location.pathname]);

  if (loading) return null;

  return (
    <div className="Navigation">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/IA" element={<IAPag />} /> {/* IA Page */}
        <Route path="/IATools" element={<Tools />} /> {/* IA Tools Page */}
        <Route path="/Tool1" element={<Tool1 />} />  {/* Página de Adobe Firefly */}
        <Route path="/Tool2" element={<Tool2 />} />  {/* Página de Canva */}
        <Route path="/Tool3" element={<Tool3 />} />  {/* Página de Leonardo.Ai */}
        <Route path="/Tool4" element={<Tool4 />} />  {/* Página de ChatGPT */}
        <Route path="/Tool5" element={<Tool5 />} />  {/* Página de MSDesigner */}
        <Route path="/Tool6" element={<Tool6 />} />  {/* Página de Midjourney */}
      </Routes>
    </div>
  );
}

export default Navigation;
