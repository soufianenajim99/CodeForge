import { Route, Routes } from "react-router";
import "./App.css";
import { Button } from "@/components/ui/button.tsx";
import Home from "./pages/HomePage";
import Message from "./pages/Message";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import Signup from "./components/testing/Signup";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Message />} />
        <Route path="/detailspage" element={<DetailsPage />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
