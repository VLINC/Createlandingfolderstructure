import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import LandingPage from "./marketing/pages/LandingPage";

// REAL PAGES (you already have these)
import CustomerSignupPage from "./auth/CustomerSignupPage";
import ProviderSignupPage from "./auth/ProviderSignupPage";
import LoginPage from "./auth/LoginPage";

function App() {
  return (
    <>
      <Toaster />
      <Routes>

        {/* Landing */}
        <Route path="/" element={<LandingPage />} />

        {/* Customer Signup */}
        <Route path="/signup" element={<CustomerSignupPage />} />

        {/* Provider Signup */}
        <Route path="/provider-signup" element={<ProviderSignupPage />} />

        {/* Login */}
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </>
  );
}

export default App;









