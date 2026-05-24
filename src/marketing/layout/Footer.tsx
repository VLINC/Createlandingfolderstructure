import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h4 className="text-white text-lg font-bold mb-3">Victorious Love Company LLC</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Professional cleaning services you can trust.
          </p>
          <p className="text-slate-400 text-sm mt-3">
            PO Box 1074<br />
            Florissant, MO 63031
          </p>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-3">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-[#D91429] transition-colors">Services</a></li>
            <li><a href="#how-it-works" className="hover:text-[#D91429] transition-colors">How It Works</a></li>
            <li><a href="#download" className="hover:text-[#D91429] transition-colors">Download App</a></li>
            <li><a href="#contact" className="hover:text-[#D91429] transition-colors">Contact</a></li>
            <li><a href="/terms.html" className="hover:text-[#D91429] transition-colors">Terms of Service</a></li>
            <li><a href="/privacy.html" className="hover:text-[#D91429] transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-3">Contact Us</h5>
          <ul className="space-y-2 text-sm">
            <li>📞 <a href="tel:9139158209" className="hover:text-[#D91429] transition-colors">(913) 915-8209</a></li>
            <li>✉️ <a href="mailto:support@proincorporated.services" className="hover:text-[#D91429] transition-colors">support@proincorporated.services</a></li>
            <li>🕐 Mon–Fri: 5:00am – 10:00pm</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Victorious Love Company LLC · All rights reserved.</span>
          <span>Professional Cleaning Services</span>
        </div>
      </div>
    </footer>
  );
}
