"use client";

import React, { useEffect, useState } from "react";
import cx from "classnames";
import type { ActionMode, StudioConfig } from "../lib/types";
import Toolbar from "./Toolbar";

const Provider: React.FC<{
  children: React.ReactNode;
  config: StudioConfig;
}> = ({ children, config }) => {
  const [mode, setMode] = useState<ActionMode | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const componentTypes = config.components.map((c) => c.id);

  useEffect(() => {
    if (mode === `select`) componentTypes.forEach(registerComponents);
    else
      document
        .querySelectorAll(`.__devine-overlay`)
        .forEach((el) => el.remove());
  }, [componentTypes, mode]);

  return (
    <div className="w-screen h-screen flex fixed top-0 bg-black">
      <Toolbar mode={mode} setMode={setMode} />
      <div
        className={cx(
          `__devine-child-container flex-grow h-screen overflow-y-scroll overflow-hidden relative z-0 transition-[border-radius] duration-300`,
          sidebarOpen ? `rounded-r-3xl` : `rounded-r-none`,
        )}
      >
        {children}
      </div>
      <div
        className={cx(
          `w-96 h-screen transition-[margin-right] duration-300`,
          !sidebarOpen && `-mr-96`,
        )}
      >
        foo
      </div>
    </div>
  );
};

export default Provider;

function registerComponents(id: string): void {
  const elements = document.querySelectorAll(`[devine-id='${id}']`);
  elements.forEach((element) => {
    // coordinates of element:
    const elementX = element.getBoundingClientRect().left;
    const elementY = element.getBoundingClientRect().top;
    // dimensions of element:
    const elementWidth = element.getBoundingClientRect().width;
    const elementHeight = element.getBoundingClientRect().height;

    const overlay = document.createElement(`div`);
    overlay.style.left = `${elementX - 8}px`;
    overlay.style.top = `${elementY - 8}px`;
    overlay.style.width = `${elementWidth + 16}px`;
    overlay.style.height = `${elementHeight + 16}px`;
    overlay.style.backgroundColor = `#3b82f6aa`;
    overlay.style.border = `1px solid #3b82f6`;
    overlay.style.zIndex = `1000`;
    overlay.classList.add(
      `__devine-overlay`,
      `flex`,
      `items-center`,
      `justify-center`,
      `absolute`,
      `rounded-xl`,
      `hover:opacity-100`,
      `opacity-0`,
      `transition-opacity`,
      `duration-300`,
      `cursor-pointer`,
      `group`,
    );
    document.querySelector(`.__devine-child-container`)?.appendChild(overlay);
    const label = document.createElement(`span`);
    label.innerText = id;
    label.classList.add(
      `text-white`,
      `text-3xl`,
      `font-semibold`,
      `group-hover:translate-y-0`,
      `translate-y-4`,
      `transition-[opacity,transform]`,
      `duration-300`,
    );
    overlay.appendChild(label);
  });
}
