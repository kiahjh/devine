"use client";

import React, { useEffect } from "react";
import cx from "classnames";
import type { RegisteredComponent } from "../lib/types";
import { useGlobalState } from "../lib/hooks";

interface Props {
  component: RegisteredComponent;
  index: number;
}

const ComponentOverlay: React.FC<Props> = ({ component: c, index }) => {
  const { state, dispatch } = useGlobalState();

  const [elementX, setElementX] = React.useState(0);
  const [elementY, setElementY] = React.useState(0);
  const [elementWidth, setElementWidth] = React.useState(0);
  const [elementHeight, setElementHeight] = React.useState(0);

  useEffect(() => {
    setElementX(c.element.getBoundingClientRect().left);
    setElementY(c.element.getBoundingClientRect().top);
    setElementWidth(c.element.getBoundingClientRect().width);
    setElementHeight(c.element.getBoundingClientRect().height);
  }, [c.element]);

  return (
    <>
      {state.selectedComponent === c.id && (
        <div
          key={`__devine-component-overlay--${c.type}_${index}__border`}
          className="z-10"
        >
          <div
            className="fixed bg-blue-500/20 h-screen w-0.5"
            style={{
              left: `${elementX - 6}px`,
              top: 0,
            }}
          />
          <div
            className="fixed bg-blue-500/20 h-screen w-0.5"
            style={{
              left: `${elementX + elementWidth + 4}px`,
              top: 0,
            }}
          />
          <div
            className="absolute bg-blue-500/20 w-screen h-0.5"
            style={{
              top: `${elementY - 6}px`,
              left: 0,
            }}
          />
          <div
            className="absolute bg-blue-500/20 w-screen h-0.5"
            style={{
              top: `${elementY + elementHeight + 4}px`,
              left: 0,
            }}
          />
        </div>
      )}
      <div
        className={cx(
          `absolute rounded-xl hover:opacity-100 opacity-0 transition-opacity duration-300 cursor-pointer group flex items-center justify-center bg-blue-500/70 border-2 border-blue-500 z-10`,
          `__devine-component-overlay--${c.type}_${index}`,
        )}
        style={{
          left: `${elementX - 8}px`,
          top: `${elementY - 8}px`,
          width: `${elementWidth + 16}px`,
          height: `${elementHeight + 16}px`,
        }}
        key={`__devine-component-overlay--${c.type}_${index}`}
        onClick={() => {
          const zoomX =
            (window.innerWidth - 400) / 2 - elementWidth / 2 - elementX;
          const zoomY = window.innerHeight / 2 - elementHeight / 2 - elementY;
          dispatch({
            type: `moveContainer`,
            payload: { x: zoomX, y: zoomY },
          });
          dispatch({ type: `openSidebar` });
          dispatch({
            type: `selectComponent`,
            payload: c.id,
          });
        }}
      >
        <span className="text-white text-3xl font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {c.type}
        </span>
      </div>
    </>
  );
};

export default ComponentOverlay;
