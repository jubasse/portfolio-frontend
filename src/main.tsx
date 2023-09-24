import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./components/Profile.tsx";
import { ProfileContextProvider } from "./contexts";
import './main.scss'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProfileContextProvider>
      <Profile />
    </ProfileContextProvider>
  </React.StrictMode>
);
