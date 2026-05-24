import React from "react";

export default function AppDownload() {
  return (
    <section id="download" className="bg-[#0f172a] py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[#D91429] font-semibold text-sm uppercase tracking-widest mb-2">Mobile App</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Download the App</h2>
        <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
          Book, track, and manage your cleanings from your phone — anytime, anywhere.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-white text-slate-900 px-6 py-4 font-bold text-base hover:bg-slate-100 transition-colors shadow-md"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.5c.36.2.78.2 1.14 0l9.68-9.68-2.28-2.28L3.18 23.5zM20.82.5c-.36-.2-.78-.2-1.14 0l-9.68 9.68 2.28 2.28L20.82.5zM2 1.36v21.28L11.64 12 2 1.36zM22 1.36L12.36 12 22 22.64V1.36z" />
            </svg>
            <span>
              <span className="block text-xs font-normal text-slate-500">Get it on</span>
              Google Play
            </span>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-white text-slate-900 px-6 py-4 font-bold text-base hover:bg-slate-100 transition-colors shadow-md"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>
              <span className="block text-xs font-normal text-slate-500">Download on the</span>
              App Store
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
