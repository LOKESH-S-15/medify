import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import FindDotors from "./Components/FindDoctors/FindDotors";
import Bookings from "./Components/Bookings/Bookings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />;
          <Route path="/Find Doctors" element={<FindDotors />} />;
          <Route path="/bookings" element={<Bookings />} />;
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
