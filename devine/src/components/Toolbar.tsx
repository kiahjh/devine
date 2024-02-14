"use client";

import React from "react";
import { MousePointerClickIcon, ArrowUpIcon, SettingsIcon } from "lucide-react";
import cx from "classnames";
import type { ActionMode, LucidIcon } from "../lib/types";

interface ToolbarProps {
  mode: ActionMode | null;
  setMode: (mode: ActionMode | null) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ mode, setMode }) => (
  <div className="fixed -bottom-10 -left-10 p-12 group rounded-3xl z-50">
    <div
      className={cx(
        `bg-black rounded-2xl p-2 flex shadow-xl transition-[opacity,transform] duration-300`,
        mode
          ? `translate-y-0 opacity-100`
          : `translate-y-10 opacity-50 group-hover:translate-y-0 group-hover:opacity-100`,
      )}
    >
      <ToolbarButton
        to={`select`}
        mode={mode}
        setMode={setMode}
        icon={MousePointerClickIcon}
      />
    </div>
  </div>
);

export default Toolbar;

interface ToolbarButtonProps {
  to: ActionMode;
  mode: ActionMode | null;
  setMode: (mode: ActionMode | null) => void;
  icon: LucidIcon;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  to,
  mode,
  setMode,
  icon: Icon,
}) => (
  <button
    onClick={() => setMode(mode === to ? null : to)}
    className={cx(
      `rounded-lg p-2 hover:bg-zinc-800 transition-[transform,background-color] duration-150 active:scale-95 active:bg-zinc-600`,
      mode === to ? `text-blue-300` : `text-zinc-200 hover:text-white`,
    )}
  >
    <Icon size={24} />
  </button>
);
