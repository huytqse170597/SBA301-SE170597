import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
