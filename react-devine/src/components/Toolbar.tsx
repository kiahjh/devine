"use client";

import React from "react";
import { MousePointerClickIcon, SettingsIcon } from "lucide-react";
import cx from "classnames";
import type { LucideIcon } from "lucide-react";
import type { ToolbarMode } from "../lib/types";
import { useGlobalState } from "../lib/hooks";

const Toolbar: React.FC = () => {
  const { state } = useGlobalState();
  return (
    <div className="fixed -bottom-10 -left-10 p-12 group rounded-3xl z-50">
      <div
        className={cx(
          `bg-black rounded-2xl p-2 items-center flex shadow-xl transition-[opacity,transform] duration-300 shadow-black/50`,
          state.mode
            ? `translate-y-0 opacity-100`
            : `translate-y-10 opacity-50 group-hover:translate-y-0 group-hover:opacity-100`,
        )}
      >
        <ToolbarButton to={`select`} icon={MousePointerClickIcon} />
        <div className="w-0.5 h-8 bg-white/15 mx-1.5 rounded-full" />
        <div className="flex flex-col items-center px-1">
          <span className="text-zinc-200 text-sm">Toolbar plugins</span>
          <span className="text-zinc-500 text-xs">Coming soon!</span>
        </div>
        <div className="w-0.5 h-8 bg-white/15 mx-1.5 rounded-full" />
        <ToolbarButton to={`settings`} icon={SettingsIcon} />
      </div>
    </div>
  );
};

export default Toolbar;

interface ToolbarButtonProps {
  to: ToolbarMode;
  icon: LucideIcon;
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
