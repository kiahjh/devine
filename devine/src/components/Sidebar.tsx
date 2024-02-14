import React from "react";
import cx from "classnames";
import { LayoutGridIcon } from "lucide-react";
import type { SidebarPluginType } from "../plugins/Plugin";
import { useGlobalState } from "../lib/hooks";
import { getComponent } from "../lib/component";

interface Props {
  plugins?: SidebarPluginType[];
}

const Sidebar: React.FC<Props> = ({ plugins }) => {
  const { state } = useGlobalState();

  const selectedComponent = state.selectedComponent
    ? getComponent(`TODO`)
    : null;

  return (
    <div
      className={cx(
        `w-96 h-[calc(100vh-16px)] transition-[margin-right] duration-500 shrink-0 text-white p-8 z-20 bg-black fixed top-2 right-2 rounded-xl shadow-xl shadow-black/50 flex flex-col delay-100`,
        !state.sidebarOpen && `-mr-[400px]`,
      )}
    >
      {selectedComponent && (
        <div className="flex-grow flex flex-col">
          <header>
            <h2 className="text-4xl font-medium">{selectedComponent.type}</h2>
            <div></div>
          </header>
          {!plugins || plugins.length === 0 ? (
            <div className="flex-grow flex justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <LayoutGridIcon size={50} className="text-zinc-800" />
                <h2 className="font-medium text-2xl mt-4 text-zinc-600">
                  No plugins
                </h2>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
};
export default Sidebar;
