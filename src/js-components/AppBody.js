import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import FlashcardsPage from "./FlashcardsPage";

export default function AppBody() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<WelcomePage />} />
                <Route path = "/FlashcardsPage" element = {<FlashcardsPage />} />
            </Routes>
        </BrowserRouter>
    );
}