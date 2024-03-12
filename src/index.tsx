import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import AppProvider from "./contexts/context";
import router from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <React.StrictMode>
      <AppProvider>
        <RouterProvider {...{ router }} />
      </AppProvider>
    </React.StrictMode>
  </ErrorBoundary>
);

reportWebVitals();
