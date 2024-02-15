import React from "react";
import { EggIcon } from "lucide-react";
import type { SidebarPluginComponent } from "../../../devine/src/plugins/Plugin";
import { Plugin } from "../../../devine/src";

const PluginComponent: SidebarPluginComponent = () => (
  <div>
    <h2>testing</h2>
    <p>lorem</p>
    <h4>
      Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
      sint consectetur cupidatat.
    </h4>
    <span>testing</span>
    <section>foo bar</section>
  </div>
);

const Testing = new Plugin.SidebarPlugin(
  `Testing`,
  <EggIcon />,
  PluginComponent,
);

export default Testing;
