import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./components/Profile.tsx";
import { ProfileContextProvider, ThemeContextProvider } from "./contexts";
import "./main.scss";
import './i18n';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ProfileContextProvider>
        <Profile />
      </ProfileContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
