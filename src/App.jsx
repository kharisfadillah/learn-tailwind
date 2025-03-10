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
import Calculator from "./pages/Calculator";
import HealthCare from "./pages/HealthCare";
import Modal from "./pages/Modal";
import Modal2 from "./pages/Modal2";
import Pos from "./pages/Pos";
import Pos2 from "./pages/Pos2";
import SearchComponent from "./pages/SearchComponent";
import Album from "./pages/Album";
import Photo from "./pages/Photo";
import Stack from "./pages/Stack";
import Backdrop from "./pages/Backdrop";
import NeatLandingPage from "./pages/NeatLandingPage";
import CustomFont from "./pages/CustomFont";
import Animasi from "./pages/Animasi";
import Tabel from "./pages/Tabel";
import Toast from "./pages/Toast";

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
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/modal-2" element={<Modal2 />} />
        <Route path="/pos" element={<Pos />} />
        <Route path="/pos-2" element={<Pos2 />} />
        <Route path="/search-component" element={<SearchComponent />} />
        <Route path="/album" element={<Album />} />
        <Route path="/photos" element={<Photo />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/backdrop" element={<Backdrop />} />
        <Route path="/neat" element={<NeatLandingPage />} />
        <Route path="/custom-font" element={<CustomFont />} />
        <Route path="/animasi" element={<Animasi />} />
        <Route path="/tabel" element={<Tabel />} />
        <Route path="/toast" element={<Toast />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
