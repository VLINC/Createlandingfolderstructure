import Navbar from "../layout/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import AppDownload from "../components/AppDownload";
import Footer from "../layout/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="pt-[var(--header-height)]">
        <Hero />
        <Services />
        <HowItWorks />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
}
