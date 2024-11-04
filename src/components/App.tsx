import Board from "./board/Board";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./landing/Landing";
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
