import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UsersPage from "./pages/UsersPage";
import WeatherPage from "./pages/WeatherPage";

function App() {
  return (
    // <WeatherPage />
    <BrowserRouter>
      <Routes>
        <Route path="" element={<UsersPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
