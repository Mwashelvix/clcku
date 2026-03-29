import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle GitHub Pages SPA routing for direct URL access
const params = new URLSearchParams(window.location.search);
const currentRoute = params.get('currentRoute');

if (currentRoute) {
  // Clean up the URL without reloading
  window.history.replaceState({}, '', currentRoute);
}

createRoot(document.getElementById("root")!).render(<App />);