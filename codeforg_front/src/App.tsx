import { Route, Routes } from "react-router";
import "./App.css";
import { Button } from "@/components/ui/button.tsx";
import Home from "./pages/Home";
import Message from "./pages/Message";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import Signup from "./components/testing/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Message />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
