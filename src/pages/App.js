import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CategoryPage from "./CategoryPage";
import HelpPage from "./HelpPage";
import LoginPage from "./LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/login" element={<LoginPage />} />


        {/* <Route exact path="/properties/:id" component={DetailsPage} /> */}
      </Routes>
    </BrowserRouter>
  );
}
