import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spacing from "./pages/Spacing";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Sizing from "./pages/Sizing";
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import Flex from "./pages/Flex";
import Grid from "./pages/Grid";
import Kalkulator from "./pages/Kalkulator";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spacing" element={<Spacing />} />
        <Route path="/sizing" element={<Sizing />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/flex" element={<Flex />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/kalkulator" element={<Kalkulator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
