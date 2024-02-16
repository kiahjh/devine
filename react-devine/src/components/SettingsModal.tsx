import React from "react";
import cx from "classnames";
import { useGlobalState } from "../lib/hooks";

const SettingsModal: React.FC = () => {
  const { state } = useGlobalState();
  return (
    <div
      className={cx(
        `absolute bg-black shadow-xl shadow-black/50 p-20 rounded-xl flex justify-center items-center flex-col transition-[transform,opacity] duration-300`,
        state.mode === `settings`
          ? `opacity-100`
          : `scale-75 opacity-0 pointer-events-none`,
      )}
    >
      <span className="text-zinc-200 text-lg font-medium">
        Settings / plugin store
      </span>
      <span className="text-zinc-500">Comiong soon!</span>
    </div>
  );
};

export default SettingsModal;
