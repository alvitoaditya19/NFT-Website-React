import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CategoryPage from "./CategoryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category" element={<CategoryPage />} />
        {/* <Route exact path="/properties/:id" component={DetailsPage} /> */}
      </Routes>
    </BrowserRouter>
  );
}
