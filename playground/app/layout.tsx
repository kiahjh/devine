"use client";

import React from "react";
import devine from "../components/devine";
import "./globals.css";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <body>
      <devine.Provider>{children}</devine.Provider>
    </body>
  </html>
);

export default RootLayout;
