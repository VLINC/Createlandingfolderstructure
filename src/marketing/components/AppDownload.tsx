import React from "react";
import { Download } from "lucide-react";

export default function AppDownload() {
  return (
    <section id="download" className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Download the App</h3>
        <p className="mt-4 text-lg text-slate-600">
          Book, track, and manage your cleanings from your phone.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-slate-800 transition-colors"
          >
            <Download className="h-5 w-5" />
            Google Play
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-slate-800 transition-colors"
          >
            <Download className="h-5 w-5" />
            Apple App Store
          </a>
        </div>
      </div>
    </section>
  );
}
