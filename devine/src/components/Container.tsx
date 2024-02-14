import React from "react";
import cx from "classnames";
import { useGlobalState } from "../lib/hooks";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { state, dispatch } = useGlobalState();

  return (
    <div
      className={cx(
        `__devine-child-container flex-grow h-screen overflow-y-scroll overflow-hidden relative z-0 transition-[border-radius,transform] duration-500`,
        !(state.containerPosition.x === 0 && state.containerPosition.y === 0) &&
          `rounded-2xl`,
      )}
      style={{
        transform: `translate(${state.containerPosition.x}px, ${state.containerPosition.y}px)`,
        transformOrigin: `top left`,
      }}
    >
      {state.registeredComponents &&
        state.mode === `select` &&
        state.registeredComponents.map((c, i) => {
          const elementX = c.element.getBoundingClientRect().left;
          const elementY = c.element.getBoundingClientRect().top;
          const elementWidth = c.element.getBoundingClientRect().width;
          const elementHeight = c.element.getBoundingClientRect().height;

          let zoomX = 0;
          let zoomY = 0;
          zoomX = (window.innerWidth - 400) / 2 - elementWidth / 2 - elementX;
          zoomY = window.innerHeight / 2 - elementHeight / 2 - elementY;

          return (
            <>
              {state.selectedComponent?.type === c.type &&
                state.selectedComponent?.index === i && (
                  <div
                    key={`__devine-component-overlay--${c.type}_${i}__border`}
                  >
                    <div
                      className="fixed bg-blue-500/20 h-screen w-0.5"
                      style={{ left: `${elementX - 6}px`, top: 0 }}
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
                      style={{ top: `${elementY - 6}px`, left: 0 }}
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
                  `absolute rounded-xl hover:opacity-100 opacity-0 transition-opacity duration-300 cursor-pointer group flex items-center justify-center bg-blue-500/70 border-2 border-blue-500`,
                  `__devine-component-overlay--${c.type}_${i}`,
                )}
                style={{
                  left: `${elementX - 8}px`,
                  top: `${elementY - 8}px`,
                  width: `${elementWidth + 16}px`,
                  height: `${elementHeight + 16}px`,
                  zIndex: `1000`,
                }}
                key={`__devine-component-overlay--${c.type}_${i}`}
                onClick={() => {
                  dispatch({
                    type: `moveContainer`,
                    payload: { x: zoomX, y: zoomY },
                  });
                  dispatch({ type: `openSidebar` });
                  dispatch({
                    type: `selectComponent`,
                    payload: { type: c.type, index: i },
                  });
                }}
              >
                <span className="text-white text-3xl font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {c.type}
                </span>
              </div>
            </>
          );
        })}
      {children}
    </div>
  );
};
export default Container;
