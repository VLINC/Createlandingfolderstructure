import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0f172a] text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <h4 className="text-white text-xl font-bold">Victorious Love Company LLC</h4>
          <p className="mt-3 text-slate-300">
            Professional cleaning services you can trust.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            PO Box 1074<br />
            Florissant, MO 63031
          </p>
        </div>

        <div>
          <h5 className="text-white font-semibold">Links</h5>
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-slate-300">
            <a href="#services" className="hover:text-[#D91429] transition-colors">Services</a>
            <span className="text-slate-500">|</span>
            <a href="#how-it-works" className="hover:text-[#D91429] transition-colors">How It Works</a>
            <span className="text-slate-500">|</span>
            <a href="#contact" className="hover:text-[#D91429] transition-colors">Contact</a>
            <span className="text-slate-500">|</span>
            <a href="/terms.html" className="hover:text-[#D91429] transition-colors">Terms</a>
            <span className="text-slate-500">|</span>
            <a href="/privacy.html" className="hover:text-[#D91429] transition-colors">Privacy</a>
          </div>
        </div>

        <div>
          <h5 className="text-white font-semibold">Contact</h5>
          <p className="mt-3">Phone: (913) 915-8209</p>
          <p className="mt-1">
            Email:{" "}
            <a href="mailto:support@proincorporated.services" className="hover:text-[#D91429] transition-colors">
              support@proincorporated.services
            </a>
          </p>
          <p className="mt-1">Hours: Mon–Fri 5:00am – 10:00pm</p>
        </div>
      </div>

      <div className="border-t border-slate-700/70">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-slate-400">
          © {new Date().getFullYear()} Victorious Love Company LLC · All rights reserved.
        </div>
      </div>
    </footer>
  );
}
