import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing";
import { ProfileCardPage } from "./pages/profile-card-page";
import { WeatherAppPage } from "./pages/weather-app-page";

function App() {
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route
            path="/profile-card-page"
            element={<ProfileCardPage />}
          ></Route>
          <Route path="/weather-app-page" element={<WeatherAppPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
