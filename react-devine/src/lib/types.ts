import type { SidebarPluginType, ToolbarPluginType } from "../plugins/Plugin";

export type StudioConfig = {
  components: Array<{ id: string; component: React.FC }>;
  plugins?: {
    sidebar?: SidebarPluginType[];
    toolbar?: ToolbarPluginType[];
  };
};

export type ToolbarMode = "select" | "create" | "plugins";

export type RegisteredComponent = {
  type: string;
  element: Element;
  id: string;
};
