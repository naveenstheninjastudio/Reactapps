import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing";
import { ProfileCardPage } from "./pages/profile-card-page";
import { WeatherAppPage } from "./pages/weather-app-page";
import { ToDoListAppPage } from "./pages/toDoList-page";
import { LoginFormPage } from "./pages/login-form-page";
function App() {
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/profile-card" element={<ProfileCardPage />}></Route>
          <Route path="/weather-app" element={<WeatherAppPage />}></Route>
          <Route path="/todo-list-app" element={<ToDoListAppPage />}></Route>
          <Route path="/login-form" element={<LoginFormPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
