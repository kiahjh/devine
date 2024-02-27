import React from "react";
import cx from "classnames";
import { useGlobalState } from "../lib/hooks";
import ComponentOverlay from "./ComonentOverlay";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { state, dispatch } = useGlobalState();

  return (
    <>
      <div
        className={cx(
          `__devine-child-container flex-grow h-screen overflow-y-scroll overflow-hidden relative z-0 transition-[border-radius,transform,opacity] duration-500`,
          !(
            state.containerPosition.x === 0 && state.containerPosition.y === 0
          ) &&
            state.mode === `select` &&
            `rounded-2xl`,
          state.mode === `plugins` && `opacity-20`,
        )}
        style={{
          transform: `translate(${
            state.mode === `select` ? state.containerPosition.x : 0
          }px, ${state.mode === `select` ? state.containerPosition.y : 0}px)`,
          transformOrigin: `top left`,
        }}
        onClick={() => {
          if (state.mode === `plugins`)
            dispatch({ type: `setMode`, payload: null });
        }}
      >
        {children}
        {state.registeredComponents &&
          state.mode === `select` &&
          state.registeredComponents.map((c, i) => (
            <ComponentOverlay component={c} index={i} />
          ))}
      </div>
    </>
  );
};
export default Container;
