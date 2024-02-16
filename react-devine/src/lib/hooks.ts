import React, { useEffect, useState } from "react";
import type { Action, State } from "./state/store";
import { GlobalStateContext } from "./state/StateProvider";

export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
    };
    window.addEventListener(`scroll`, handleScroll);
    return () => window.removeEventListener(`scroll`, handleScroll);
  }, [scrollY]);

  return scrollY;
}

export function useGlobalState(): {
  state: State;
  dispatch: React.Dispatch<Action>;
} {
  return React.useContext(GlobalStateContext);
}
