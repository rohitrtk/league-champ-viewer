import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider as ReduxProvider } from "react-redux";

import App from "./App.tsx";
import { store } from "./store.ts";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ThemeProvider>
  </React.StrictMode>
);
