import React, { useState } from "react";
import cx from "classnames";
import {
  ChevronDownIcon,
  LayoutGridIcon,
  MoveHorizontalIcon,
  MoveVerticalIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SidebarPluginType } from "../plugins/Plugin";
import { useGlobalState } from "../lib/hooks";
import { getComponent } from "../lib/component";

interface Props {
  plugins?: SidebarPluginType[];
}

const Sidebar: React.FC<Props> = ({ plugins }) => {
  const { state } = useGlobalState();

  const [shownPlugins, setShownPlugins] = useState<Array<string>>([]);

  const c = getComponent(state.selectedComponent ?? ``);

  return (
    <div
      className={cx(
        `w-96 h-[calc(100vh-16px)] transition-[margin-right] duration-500 shrink-0 text-white p-8 z-20 bg-black fixed top-2 right-2 rounded-xl shadow-xl shadow-black/50 flex flex-col delay-100 overflow-scroll`,
        !state.sidebarOpen && `-mr-[400px]`,
      )}
    >
      {c && (
        <div className="flex-grow flex flex-col">
          <header>
            <h3 className="text-zinc-400 font-mono">{`<${c.element.nodeName.toLowerCase()}>`}</h3>
            <h2 className="text-4xl font-medium">{c.type}</h2>
            <div className="flex items-center gap-2 mt-1">
              <Stat
                icon={MoveHorizontalIcon}
                value={`${c.element
                  .getBoundingClientRect()
                  .width.toFixed(1)}px`}
              />
              <Stat
                icon={MoveVerticalIcon}
                value={`${c.element
                  .getBoundingClientRect()
                  .height.toFixed(1)}px`}
              />
            </div>
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
            <div className="flex-grow flex flex-col mt-8">
              {plugins.map(({ component: Component, title, icon }) => {
                const shown = shownPlugins.includes(title);
                return (
                  <div
                    className={cx(
                      `py-4 border-t border-white/10`,
                      !shown && `cursor-pointer`,
                    )}
                    onClick={() => {
                      if (!shown) {
                        setShownPlugins((prev) =>
                          prev.includes(title)
                            ? prev.filter((t) => t !== title)
                            : [...prev, title],
                        );
                      }
                    }}
                  >
                    {shown ? (
                      <Component component={c} />
                    ) : (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-zinc-400">{icon}</div>
                          <span className="text-lg font-medium text-zinc-200">
                            {title}
                          </span>
                        </div>
                        <ChevronDownIcon className="text-zinc-600" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Sidebar;

interface StatProps {
  icon: LucideIcon;
  value: string;
}

const Stat: React.FC<StatProps> = ({ icon: Icon, value }) => (
  <div className="flex items-center gap-0.5">
    <Icon size={12} className="text-zinc-400" />
    <span className="text-sm text-zinc-500">{value}</span>
  </div>
);
