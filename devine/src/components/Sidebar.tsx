import React from "react";
import cx from "classnames";

interface Props {
  open: boolean;
}

const Sidebar: React.FC<Props> = ({ open }) => (
  <div
    className={cx(
      `w-96 h-screen transition-[margin-right] duration-300`,
      !open && `-mr-96`,
    )}
  >
    foo
  </div>
);
export default Sidebar;
