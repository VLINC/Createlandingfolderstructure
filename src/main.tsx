import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./auth/AuthProvider";

/**
 * Robust mount for the app:
 * - Verifies #root exists and throws a clear error if not (prevents silent failures).
 * - Wraps App with BrowserRouter, AuthProvider and React.StrictMode.
 * - Keeps the existing index.css import.
 */

const container = document.getElementById("root");
if (!container) {
  throw new Error('Root element not found. Ensure index.html contains <div id="root"></div>');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);










