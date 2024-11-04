import Board from "./board/board";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./landing/landing";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
