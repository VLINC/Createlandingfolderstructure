import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import LandingPage from "./marketing/pages/LandingPage";
import ProviderSignupLandingPage from "./marketing/pages/ProviderSignupLandingPage";
import SubscriptionPlansLandingPage from "./marketing/pages/SubscriptionPlansLandingPage";

// Auth pages
import CustomerSignupPage from "./auth/CustomerSignupPage";
import ProviderSignupPage from "./auth/ProviderSignupPage";
import LoginPage from "./auth/LoginPage";

function App() {
  return (
    <>
      <Toaster />
      <Routes>

        {/* Marketing — Landing */}
        <Route path="/" element={<LandingPage />} />

        {/* Marketing — Become a Provider info page */}
        <Route path="/become-a-provider" element={<ProviderSignupLandingPage />} />

        {/* Marketing — Subscription Plans info page */}
        <Route path="/plans" element={<SubscriptionPlansLandingPage />} />

        {/* Auth — Customer Signup */}
        <Route path="/signup" element={<CustomerSignupPage />} />

        {/* Auth — Provider Signup */}
        <Route path="/provider-signup" element={<ProviderSignupPage />} />

        {/* Auth — Login */}
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </>
  );
}

export default App;
