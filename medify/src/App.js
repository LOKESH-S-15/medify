import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import FindDotors from "./Components/FindDoctors/FindDotors";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />;
          <Route path="/Find Doctors" element={<FindDotors />} />;
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
