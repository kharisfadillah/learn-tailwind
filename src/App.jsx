import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spacing from "./pages/Spacing";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Sizing from "./pages/Sizing";
import Layout from "./pages/Layout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spacing" element={<Spacing />} />
        <Route path="/sizing" element={<Sizing />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
