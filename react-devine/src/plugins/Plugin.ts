// PLUGINS
// Two types of plugins:
// 1. Sidebar plugins (less powerful)
//   - must expose a React component to be rendered in the sidebar that has access to the RegisteredComponent
//   - will always be ~400px wide, but needs to be responsive vertically (because it could be in a stack, or full height)
// 2. Toolbar plugins (more powerful)
//   - icon rendered in toolbar
//   - when clicked it enters into a new 'mode'

import type { RegisteredComponent } from "../lib/types";

export interface Plugin {
  title: string;
  icon: React.ReactNode; // SVG
}

export interface SidebarPluginType extends Plugin {
  component: React.FC<{ component: RegisteredComponent }>;
}

export interface ToolbarPluginType extends Plugin {
  mode: string;
}

export type SidebarPluginComponent = React.FC<{
  component: RegisteredComponent;
}>;

export class SidebarPlugin implements SidebarPluginType {
  constructor(
    public title: string,
    public icon: React.ReactNode,
    public component: SidebarPluginComponent,
  ) {}
}

export class ToolbarPlugin implements ToolbarPluginType {
  constructor(
    public title: string,
    public icon: React.ReactNode,
    public mode: string,
  ) {}
}
