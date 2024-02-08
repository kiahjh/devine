"use client";

import React, { useEffect, useState } from "react";
import cx from "classnames";
import type { ActionMode, StudioConfig } from "../lib/types";
import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";

const Provider: React.FC<{
  children: React.ReactNode;
  config: StudioConfig;
}> = ({ children, config }) => {
  const componentTypes = config.components.map((c) => c.id);

  const [mode, setMode] = useState<ActionMode | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [registeredComponents, setRegisteredComponents] = useState<Array<{
    element: Element;
    type: string;
  }> | null>(null);

  useEffect(() => {
    componentTypes.forEach((type) => {
      const components = [
        ...document.querySelectorAll(`[devine-id='${type}']`),
      ].map((element) => ({ element, type }));
      if (registeredComponents === null) setRegisteredComponents(components);
      else setRegisteredComponents([...registeredComponents, ...components]);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-screen h-screen flex fixed top-0 bg-black">
      <div
        className={cx(
          `__devine-child-container flex-grow h-screen overflow-y-scroll overflow-hidden relative z-0 transition-[border-radius] duration-300`,
          sidebarOpen ? `rounded-r-3xl` : `rounded-r-none`,
        )}
      >
        {registeredComponents &&
          mode === `select` &&
          registeredComponents.map((c, i) => {
            const elementX = c.element.getBoundingClientRect().left;
            const elementY = c.element.getBoundingClientRect().top;
            const elementWidth = c.element.getBoundingClientRect().width;
            const elementHeight = c.element.getBoundingClientRect().height;
            return (
              <div
                className="absolute rounded-xl hover:opacity-100 opacity-0 transition-opacity duration-300 cursor-pointer group flex items-center justify-center bg-blue-500/70 border-2 border-blue-500"
                style={{
                  left: `${elementX - 8}px`,
                  top: `${elementY - 8}px`,
                  width: `${elementWidth + 16}px`,
                  height: `${elementHeight + 16}px`,
                  zIndex: `1000`,
                }}
                key={i}
              >
                <span className="text-white text-3xl font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {c.type}
                </span>
              </div>
            );
          })}
        {children}
      </div>
      <Sidebar open={sidebarOpen} />
      <Toolbar mode={mode} setMode={setMode} />
    </div>
  );
};

export default Provider;
