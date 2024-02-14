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
  const [registeredComponents, setRegisteredComponents] = useState<
    Array<{
      element: Element;
      type: string;
    }>
  >([]);
  const [selectedComponent, setSelectedComponent] = useState<{
    type: string;
    index: number;
  } | null>(null);
  const [zoomPosition, setZoomPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const registeredComponentsAcc: Array<{
    element: Element;
    type: string;
  }> = [];

  useEffect(() => {
    componentTypes.forEach((type) => {
      const components = [
        ...document.querySelectorAll(`[devine-id='${type}']`),
      ].map((element) => ({ element, type }));
      registeredComponentsAcc.push(...components);
      setRegisteredComponents(registeredComponentsAcc);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-screen h-screen flex fixed top-0 bg-zinc-900">
      <div
        className={cx(
          `__devine-child-container flex-grow h-screen overflow-y-scroll overflow-hidden relative z-0 transition-[border-radius,transform] duration-500`,
        )}
        style={{
          transform: `translate(${zoomPosition.x}px, ${zoomPosition.y}px)`,
          transformOrigin: `top left`,
        }}
      >
        {registeredComponents &&
          mode === `select` &&
          registeredComponents.map((c, i) => {
            const elementX = c.element.getBoundingClientRect().left;
            const elementY = c.element.getBoundingClientRect().top;
            const elementWidth = c.element.getBoundingClientRect().width;
            const elementHeight = c.element.getBoundingClientRect().height;

            let zoomX = 0;
            let zoomY = 0;
            zoomX = (window.innerWidth - 400) / 2 - elementWidth / 2 - elementX;
            zoomY = window.innerHeight / 2 - elementHeight / 2 - elementY;

            return (
              <>
                {selectedComponent?.type === c.type &&
                  selectedComponent?.index === i && (
                    <>
                      <div
                        className="fixed bg-blue-500/20 h-screen w-0.5"
                        style={{ left: `${elementX - 6}px`, top: 0 }}
                      />
                      <div
                        className="fixed bg-blue-500/20 h-screen w-0.5"
                        style={{
                          left: `${elementX + elementWidth + 4}px`,
                          top: 0,
                        }}
                      />
                      <div
                        className="absolute bg-blue-500/20 w-screen h-0.5"
                        style={{ top: `${elementY - 6}px`, left: 0 }}
                      />
                      <div
                        className="absolute bg-blue-500/20 w-screen h-0.5"
                        style={{
                          top: `${elementY + elementHeight + 4}px`,
                          left: 0,
                        }}
                      />
                    </>
                  )}
                <div
                  className={cx(
                    `absolute rounded-xl hover:opacity-100 opacity-0 transition-opacity duration-300 cursor-pointer group flex items-center justify-center bg-blue-500/70 border-2 border-blue-500`,
                    `__devine-component-overlay--${c.type}_${i}`,
                  )}
                  style={{
                    left: `${elementX - 8}px`,
                    top: `${elementY - 8}px`,
                    width: `${elementWidth + 16}px`,
                    height: `${elementHeight + 16}px`,
                    zIndex: `1000`,
                  }}
                  key={i}
                  onClick={() => {
                    setZoomPosition({
                      x: zoomX,
                      y: zoomY,
                    });
                    setSidebarOpen(true);
                    setSelectedComponent({ type: c.type, index: i });
                  }}
                >
                  <span className="text-white text-3xl font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {c.type}
                  </span>
                </div>
              </>
            );
          })}
        {children}
      </div>
      <Sidebar open={sidebarOpen} selectedComponent={selectedComponent} />
      <Toolbar mode={mode} setMode={setMode} />
    </div>
  );
};

export default Provider;
