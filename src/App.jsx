import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { CountryProvider } from "./context/CountryContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TestimonialsPage from "./pages/TestimonialPage";
import BlogsPage from "./pages/BlogsPage";
import VisaDetailPage from "./pages/VisaDetailPage";
import ContactPage from "./pages/ContactPage";
import BlogsDetailPage from "./pages/BlogsDetailPage";
import StudyAbroadPage from "./pages/StudyAbroadPage";
import CoachingPage from "./pages/CoachingPage";

function App() {
  return (
    <BrowserRouter>
      <CountryProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/india" element={<HomePage />} />
            <Route path="/australia" element={<HomePage />} />
            <Route path="/qatar" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/coaching" element={<CoachingPage/>}/>
            <Route path="/visa/:slug" element={<VisaDetailPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<BlogsDetailPage />} />
            <Route path="/study/:country" element={<StudyAbroadPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </CountryProvider>
    </BrowserRouter>
  );
}

export default App;
