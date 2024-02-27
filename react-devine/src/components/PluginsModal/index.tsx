import React, { useState } from "react";
import cx from "classnames";
import { LayoutGridIcon } from "lucide-react";
import type { StudioConfig } from "../../lib/types";
import { useGlobalState } from "../../lib/hooks";
import PageSwitcherButton from "./PageSwitcherButton";

interface Props {
  plugins: StudioConfig["plugins"];
}

const PluginsModal: React.FC<Props> = ({ plugins }) => {
  const { state } = useGlobalState();

  const [page, setPage] = useState<"installed" | "all">(`installed`);

  return (
    <div
      className={cx(
        `absolute bg-black border-[0.5px] border-zinc-800 shadow-xl shadow-black/50 flex flex-col transition-[transform,opacity,width,height,border-radius] duration-300 z-50`,
        page === `installed`
          ? `w-[600px] h-[800px] max-h-screen rounded-xl`
          : `w-screen h-screen rounded-none`,
        state.mode === `plugins`
          ? `opacity-100`
          : `scale-75 opacity-0 pointer-events-none`,
      )}
    >
      <div className="p-4 flex justify-center gap-2">
        <PageSwitcherButton
          page="installed"
          currentPage={page}
          setPage={setPage}
        />
        <PageSwitcherButton page="all" currentPage={page} setPage={setPage} />
      </div>
      {page === `all` ? (
        <AllPluginsPage />
      ) : (
        <InstalledPluginsPage plugins={plugins} />
      )}
    </div>
  );
};

export default PluginsModal;

const InstalledPluginsPage: React.FC<{ plugins: StudioConfig["plugins"] }> = ({
  plugins,
}) =>
  !plugins || (!plugins.sidebar && !plugins.toolbar) ? (
    <div className="flex flex-col items-center justify-center flex-grow pb-8">
      <LayoutGridIcon size={40} className="text-zinc-600" />
      <h2 className="font-medium text-xl mt-4 text-zinc-400">
        No installed plugins
      </h2>
    </div>
  ) : (
    <div className="flex flex-col gap-4 p-4">
      <div className="p-6 bg-zinc-900 rounded-lg">
        <h2 className="text-white font-medium text-xl">Sidebar plugins</h2>
        {plugins.sidebar && plugins.sidebar.length > 0 ? (
          <div className="mt-4 grid grid-cols-2 gap-4">
            {plugins.sidebar?.map((plugin) => (
              <div className="p-4 bg-zinc-800 rounded-lg text-lg text-white font-medium flex justify-center items-center">
                {plugin.title}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-zinc-400 text-lg flex justify-center my-4">
            <span>No sidebar plugins</span>
          </div>
        )}
      </div>
      <div className="p-8 bg-zinc-900 rounded-lg">
        <h2 className="text-white font-medium text-xl">Toolbar plugins</h2>
        <div className="flex justify-center items-center bg-zinc-800 rounded-lg mt-4 p-4 text-lg text-zinc-300 gap-2 font-medium">
          <span role="img" aria-label="sparkle">
            ✨
          </span>
          {` `}
          Coming soon!
        </div>
      </div>
    </div>
  );

const AllPluginsPage: React.FC = () => (
  <div className="text-zinc-400 flex-grow flex gap-2 text-xl justify-center items-center">
    <span role="img" aria-label="sparkle">
      ✨
    </span>
    <span>Coming soon!</span>
  </div>
);
