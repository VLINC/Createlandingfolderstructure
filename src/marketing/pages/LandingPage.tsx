import Navbar from "../layout/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import Footer from "../layout/Footer";

export default function LandingPage() {
  return (
    <div className="bg-white text-black">
      <Navbar />

      <main className="flex flex-col gap-20">
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}












