import React from "react";
import cx from "classnames";

interface Props {
  page: "installed" | "all";
  currentPage: "installed" | "all";
  setPage: (page: "installed" | "all") => void;
}

const PageSwitcherButton: React.FC<Props> = ({
  page,
  currentPage,
  setPage,
}) => (
  <button
    className={cx(
      `text-lg font-medium w-28 flex justify-center items-center rounded-lg capitalize transition-[background-color,color,transform] duration-200 active:scale-95 tracking-wider`,
      page === currentPage
        ? `text-white bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600`
        : `text-zinc-500 hover:bg-zinc-800 hover:text-white active:bg-zinc-700 active:text-white`,
    )}
    onClick={() => setPage(page)}
  >
    {page}
  </button>
);

export default PageSwitcherButton;
