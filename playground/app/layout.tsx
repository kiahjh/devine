"use client";

import React from "react";
import studio from "../components/devine";
import "./globals.css";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <body>
      <studio.Provider>{children}</studio.Provider>
    </body>
  </html>
);

export default RootLayout;
