import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import TagManager from "react-gtm-module";
import "./index.css";
import App from "./App.jsx";

// ✅ Initialize Google Tag Manager
const tagManagerArgs = {
  gtmId: "GTM-N3WKFS4P",
};
TagManager.initialize(tagManagerArgs);

// ✅ Render App
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
