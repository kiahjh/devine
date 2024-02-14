"use client";

import React from "react";
import { MousePointerClickIcon, PlusSquareIcon } from "lucide-react";
import cx from "classnames";
import type { ActionMode, LucidIcon } from "../lib/types";
import { useGlobalState } from "../lib/hooks";

const Toolbar: React.FC = () => {
  const { state } = useGlobalState();
  return (
    <div className="fixed -bottom-10 -left-10 p-12 group rounded-3xl z-50">
      <div
        className={cx(
          `bg-black rounded-2xl p-2 flex shadow-xl transition-[opacity,transform] duration-300 shadow-black/50`,
          state.mode
            ? `translate-y-0 opacity-100`
            : `translate-y-10 opacity-50 group-hover:translate-y-0 group-hover:opacity-100`,
        )}
      >
        <ToolbarButton to={`select`} icon={MousePointerClickIcon} />
        <ToolbarButton to={`create`} icon={PlusSquareIcon} />
      </div>
    </div>
  );
};

export default Toolbar;

interface ToolbarButtonProps {
  to: ActionMode;
  icon: LucidIcon;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({ to, icon: Icon }) => {
  const { state, dispatch } = useGlobalState();
  return (
    <button
      onClick={() => {
        dispatch({ type: `setMode`, payload: state.mode === to ? null : to });
      }}
      className={cx(
        `rounded-lg p-2 hover:bg-zinc-800 transition-[transform,background-color] duration-150 active:scale-95 active:bg-zinc-600`,
        state.mode === to ? `text-blue-300` : `text-zinc-200 hover:text-white`,
      )}
    >
      <Icon size={24} />
    </button>
  );
};
