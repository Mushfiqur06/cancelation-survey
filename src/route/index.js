import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../App";
import CancellationSuvey from "../components/cancellation-survey";

function Apps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cancellation-survey" element={<CancellationSuvey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Apps;
