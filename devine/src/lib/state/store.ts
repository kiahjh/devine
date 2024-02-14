import type { ToolbarMode, RegisteredComponent } from "../types";

export interface State {
  mode: ToolbarMode | null;
  sidebarOpen: boolean;
  registeredComponents: RegisteredComponent[];
  selectedComponent: string | null;
  containerPosition: {
    x: number;
    y: number;
  };
}

export const INITIAL_STATE: State = {
  mode: null,
  sidebarOpen: false,
  registeredComponents: [],
  selectedComponent: null,
  containerPosition: { x: 0, y: 0 },
};

export type Action =
  | { type: `setMode`; payload: ToolbarMode | null }
  | { type: `openSidebar` }
  | { type: `closeSidebar` }
  | { type: `registerComponents`; payload: RegisteredComponent[] }
  | { type: `selectComponent`; payload: string }
  | { type: `moveContainer`; payload: { x: number; y: number } };

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case `setMode`:
      return { ...state, mode: action.payload };
    case `openSidebar`:
      return { ...state, sidebarOpen: true };
    case `closeSidebar`:
      return { ...state, sidebarOpen: false };
    case `registerComponents`:
      return { ...state, registeredComponents: action.payload };
    case `selectComponent`:
      return { ...state, selectedComponent: action.payload };
    case `moveContainer`:
      return { ...state, containerPosition: action.payload };
    default:
      return state;
  }
}
