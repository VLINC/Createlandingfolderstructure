import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 bg-gray-900 text-gray-300"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
          
          {/* About / tagline */}
          <div>
            <h3 className="text-white font-semibold mb-2">
              Victorious Love Incorporated
            </h3>
            <p className="text-sm text-gray-400">
              Operated by Dystini Transportation LLC. Professional Cleaning Services — trusted local providers delivering care and quality.
            </p>
          </div>

          {/* Address & contact */}
          <div>
            <h4 className="text-white font-medium mb-2">Contact & Address</h4>

            <address className="not-italic text-sm text-gray-400 space-y-1">
              <div>Dystini Transportation LLC</div>
              <div>DBA Victorious Love Incorporated</div>
              <div>13915 Reflection Ct</div>
              <div>Ballwin, MO 63021</div>

              <div className="mt-2">
                Email:{" "}
                <a
                  className="text-gray-200 hover:underline"
                  href="mailto:support@proincorporated.services"
                >
                  support@proincorporated.services
                </a>
              </div>
            </address>
          </div>

          {/* Hours / quick links */}
          <div>
            <h4 className="text-white font-medium mb-2">Hours & Links</h4>

            <div className="text-sm text-gray-400 space-y-1">
              <div>
                <strong>Hours:</strong> Mon–Fri: 8:00am — 6:00pm
              </div>

              <div className="mt-2 flex flex-wrap gap-3">
                <a className="text-sm text-gray-300 hover:underline" href="/services">
                  Services
                </a>
                <a className="text-sm text-gray-300 hover:underline" href="/apply">
                  Apply
                </a>
                <a className="text-sm text-gray-300 hover:underline" href="/contact">
                  Contact
                </a>
                <a
                  className="text-sm text-gray-300 hover:underline"
                  href="/terms.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms
                </a>
                <a
                  className="text-sm text-gray-300 hover:underline"
                  href="/privacy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <div>
            © {year} Dystini Transportation LLC — All rights reserved.
          </div>

          <div className="mt-1">
            DBA Victorious Love Incorporated · 13915 Reflection Ct · Ballwin, MO 63021 ·{" "}
            <a
              className="text-gray-400 hover:underline"
              href="mailto:support@proincorporated.services"
            >
              support@proincorporated.services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}













