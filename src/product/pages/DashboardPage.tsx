import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import DashboardWidgets from "../components/DashboardWidgets";

export default function DashboardPage() {
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>('header[role="banner"]');
    if (!header) return;

    const updateHeight = () => {
      setHeaderHeight(header.offsetHeight || 0);
    };

    updateHeight();

    let ro: ResizeObserver | null = null;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(() => updateHeight());
      ro.observe(header);
    }

    window.addEventListener("resize", updateHeight);
    window.addEventListener("orientationchange", updateHeight);

    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("orientationchange", updateHeight);
    };
  }, []);

  return (
    <>
      <Header hideNav />

      <main
        className="min-h-screen bg-gray-50 px-6 pb-12"
        style={{ paddingTop: headerHeight  `${headerHeight}px` : undefined }}
      >
        <div className="max-w-7xl mx-auto">

          {/* Breadcrumbs */}
          <Breadcrumbs />

          {/* Dashboard Widgets */}
          <DashboardWidgets />

          {/* Main Dashboard Container */}
          <div className="bg-white rounded-[1.25rem] shadow-md p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#D91429] mb-4">
              Dashboard
            </h1>

            <p className="text-gray-800 mb-2 text-base sm:text-lg leading-relaxed">
              Welcome to your Victorious Love Pro Clean dashboard.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Your personalized data will appear here as features are connected.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}













