import React from "react";
import { ArrowUpIcon } from "lucide-react";
import type { SidebarPluginComponent } from "../Plugin";
import { SidebarPlugin } from "../Plugin";

const SidebarComponent: SidebarPluginComponent = ({ component }) => (
  <div className="text-xl text-blue-400">classify {component.type}</div>
);

const Classify = new SidebarPlugin(
  `Classify`,
  <ArrowUpIcon />,
  SidebarComponent,
);

export default Classify;
