import React from "react";
import cx from "classnames";

interface Props {
  open: boolean;
  selectedComponent: {
    type: string;
    index: number;
  } | null;
}

const Sidebar: React.FC<Props> = ({ open, selectedComponent: c }) => {
  const overlay = document.querySelector(
    `.__devine-component-overlay--${c?.type}_${c?.index}`,
  );

  return (
    <div
      className={cx(
        `w-96 h-[calc(100vh-16px)] transition-[margin-right] duration-500 shrink-0 text-white p-8 z-20 bg-black fixed top-2 right-2 rounded-xl shadow-xl`,
        !open && `-mr-96`,
      )}
    >
      {c ? (
        <div>
          <h2 className="text-4xl font-medium">{c.type}</h2>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Sidebar;
