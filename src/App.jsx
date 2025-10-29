import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { CountryProvider } from "./context/CountryContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";

// Lazy loaded pages
const AboutPage = lazy(() => import("./pages/AboutPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialPage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const VisaDetailPage = lazy(() => import("./pages/VisaDetailPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogsDetailPage = lazy(() => import("./pages/BlogsDetailPage"));
const StudyAbroadPage = lazy(() => import("./pages/StudyAbroadPage"));
const CoachingPage = lazy(() => import("./pages/CoachingPage"));

function App() {
  return (
    <BrowserRouter>
      <CountryProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/india" element={<HomePage />} />
            <Route path="/australia" element={<HomePage />} />
            <Route path="/qatar" element={<HomePage />} />
            <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><AboutPage /></Suspense>} />
            <Route path="/testimonials" element={<Suspense fallback={<div>Loading...</div>}><TestimonialsPage /></Suspense>} />
            <Route path="/blogs" element={<Suspense fallback={<div>Loading...</div>}><BlogsPage /></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><ContactPage /></Suspense>} />
            <Route path="/coaching" element={<Suspense fallback={<div>Loading...</div>}><CoachingPage /></Suspense>} />
            <Route path="/visa/:slug" element={<Suspense fallback={<div>Loading...</div>}><VisaDetailPage /></Suspense>} />
            <Route path="/blogs/:slug" element={<Suspense fallback={<div>Loading...</div>}><BlogsDetailPage /></Suspense>} />
            <Route path="/study/:country" element={<Suspense fallback={<div>Loading...</div>}><StudyAbroadPage /></Suspense>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </CountryProvider>
    </BrowserRouter>
  );
}

export default App;