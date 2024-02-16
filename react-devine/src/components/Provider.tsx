"use client";

import React from "react";
import type { StudioConfig } from "../lib/types";
import GlobalStateProvider from "../lib/state/StateProvider";
import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";
import RegisterComponents from "./RegisterComponents";
import Container from "./Container";
import SettingsModal from "./SettingsModal";

const Provider: React.FC<{
  children: React.ReactNode;
  config: StudioConfig;
}> = ({ children, config }) => {
  const componentTypes = config.components.map((c) => c.id);

  return (
    <GlobalStateProvider>
      <RegisterComponents componentTypes={componentTypes} />
      <div className="w-screen h-screen flex justify-center items-center fixed top-0 bg-zinc-900">
        <Container>{children}</Container>
        <Sidebar plugins={config.plugins?.sidebar} />
        <Toolbar />
        <SettingsModal />
      </div>
    </GlobalStateProvider>
  );
};

export default Provider;
