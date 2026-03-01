import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Assistance from "./components/Assistance";
import BookingFlow from "./components/BookingFlow";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import SkipToContent from "./components/SkipToContent";
import ApplicationPageNew from "./pages/ApplicationPage";
import ServicesPage from "./pages/ServicesPage";
import ReviewsPage from "./pages/ReviewsPage";
import AssistancePage from "./pages/AssistancePage";
import LoginPage from "./pages/LoginPage";
import CustomerSignupPage from "./pages/CustomerSignupPage";
import ProviderSignupPage from "./pages/signup/ProviderSignupPage";
import DashboardPage from "./pages/DashboardPage";
import ResidentialCleaningPage from "./pages/services/ResidentialCleaningPage";
import DeepCleaningPage from "./pages/services/DeepCleaningPage";
import SeniorSupportCleaningPage from "./pages/services/SeniorSupportCleaningPage";
import DisabilityFriendlyCleaningPage from "./pages/services/DisabilityFriendlyCleaningPage";
import FamilyHomeCleaningPage from "./pages/services/FamilyHomeCleaningPage";
import MoveInMoveOutPage from "./pages/services/MoveInMoveOutPage";
import TrashRecyclingPage from "./pages/services/TrashRecyclingPage";
import AirFresheningPage from "./pages/services/AirFresheningPage";
import SurfaceSanitizingPage from "./pages/services/SurfaceSanitizingPage";
import EcoFriendlyProductsPage from "./pages/services/EcoFriendlyProductsPage";

// Home Page Component
function HomePage() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <Features />
      <Assistance />
      <BookingFlow />
      <Gallery />
      <Testimonials />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="font-sans">
        <SkipToContent />
        <SEO />
        <Header />
        <Toaster position="top-center" richColors />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup/customer" element={<CustomerSignupPage />} />
          <Route path="/signup/provider" element={<ProviderSignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

          <Route path="/assistance" element={<AssistancePage />} />
          <Route path="/apply" element={<ApplicationPageNew />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route
            path="/services/residential-cleaning"
            element={<ResidentialCleaningPage />}
          />
          <Route path="/services/deep-cleaning" element={<DeepCleaningPage />} />
          <Route
            path="/services/senior-support-cleaning"
            element={<SeniorSupportCleaningPage />}
          />
          <Route
            path="/services/disability-friendly-cleaning"
            element={<DisabilityFriendlyCleaningPage />}
          />
          <Route
            path="/services/family-home-cleaning"
            element={<FamilyHomeCleaningPage />}
          />
          <Route
            path="/services/move-in-move-out"
            element={<MoveInMoveOutPage />}
          />
          <Route
            path="/services/trash-recycling"
            element={<TrashRecyclingPage />}
          />
          <Route
            path="/services/air-freshening"
            element={<AirFresheningPage />}
          />
          <Route
            path="/services/surface-sanitizing"
            element={<SurfaceSanitizingPage />}
          />
          <Route
            path="/services/eco-friendly-products"
            element={<EcoFriendlyProductsPage />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}