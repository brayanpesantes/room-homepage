import "@fontsource/league-spartan/500.css";
import "@fontsource/league-spartan/600.css";
import "@fontsource/league-spartan/700.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
