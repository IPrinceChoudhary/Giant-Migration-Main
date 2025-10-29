import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { lazy, Suspense } from "react";
import { CountryProvider } from "./context/CountryContext";
import Layout from "./components/Layout";

// Eager loading for critical pages (above the fold)
import HomePage from "./pages/HomePage";

// Lazy loading for secondary pages (code splitting)
const AboutPage = lazy(() => import("./pages/AboutPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialPage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const VisaDetailPage = lazy(() => import("./pages/VisaDetailPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogsDetailPage = lazy(() => import("./pages/BlogsDetailPage"));
const StudyAbroadPage = lazy(() => import("./pages/StudyAbroadPage"));
const CoachingPage = lazy(() => import("./pages/CoachingPage"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
    <div className="text-center">
      {/* Spinner */}
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 border-4 border-[#DCBDAD] rounded-full"></div>
        <div className="absolute inset-0 border-4 border-[#64361E] rounded-full border-t-transparent animate-spin"></div>
      </div>
      
      {/* Loading Text */}
      <h2 className="text-2xl font-bold text-[#64361E] mb-2 font-heading">
        Loading...
      </h2>
      <p className="text-gray-600">
        Please wait while we prepare your content
      </p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <CountryProvider>
        <Routes>
          <Route element={<Layout />}>
            {/* Home routes - eager loaded */}
            <Route path="/" element={<HomePage />} />
            <Route path="/india" element={<HomePage />} />
            <Route path="/australia" element={<HomePage />} />
            <Route path="/qatar" element={<HomePage />} />
            
            {/* Secondary routes - lazy loaded with Suspense */}
            <Route 
              path="/about" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <AboutPage />
                </Suspense>
              } 
            />
            <Route 
              path="/testimonials" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <TestimonialsPage />
                </Suspense>
              } 
            />
            <Route 
              path="/blogs" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <BlogsPage />
                </Suspense>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <ContactPage />
                </Suspense>
              } 
            />
            <Route 
              path="/coaching" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <CoachingPage />
                </Suspense>
              }
            />
            <Route 
              path="/visa/:slug" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <VisaDetailPage />
                </Suspense>
              } 
            />
            <Route 
              path="/blogs/:slug" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <BlogsDetailPage />
                </Suspense>
              } 
            />
            <Route 
              path="/study/:country" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <StudyAbroadPage />
                </Suspense>
              } 
            />
            
            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </CountryProvider>
    </BrowserRouter>
  );
}

export default App;