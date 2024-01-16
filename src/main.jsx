import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { USerProvider } from "./providers/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <USerProvider> 
      <App />
    </USerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
