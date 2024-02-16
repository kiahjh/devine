import React from "react";
import "./styles/index.css";
import type { StudioConfig } from "./lib/types";
import Provider from "./components/Provider";

class Studio {
  public constructor(private config: StudioConfig) {}

  public Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Provider config={this.config}>{children}</Provider>
  );
}

export default Studio;
