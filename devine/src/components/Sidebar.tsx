import React from "react";
import cx from "classnames";
import { useGlobalState } from "../lib/hooks";

const Sidebar: React.FC = () => {
  const { state } = useGlobalState();
  return (
    <div
      className={cx(
        `w-96 h-[calc(100vh-16px)] transition-[margin-right] duration-500 shrink-0 text-white p-8 z-20 bg-black fixed top-2 right-2 rounded-xl shadow-xl shadow-black/50`,
        !state.sidebarOpen && `-mr-[400px]`,
      )}
    >
      {state.selectedComponent ? (
        <div>
          <h2 className="text-4xl font-medium">
            {state.selectedComponent.type}
          </h2>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Sidebar;
