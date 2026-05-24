import Navbar from "../layout/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Footer from "../layout/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main style={{ paddingTop: "var(--header-height)" }}>
        <Hero />
        <AboutUs />
        <Services />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
