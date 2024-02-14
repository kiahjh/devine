import type { ArrowUpIcon } from "lucide-react";

export type LucidIcon = typeof ArrowUpIcon;

export type StudioConfig = {
  components: Array<{ id: string; component: React.FC }>;
};

export type ActionMode = "select" | "create";

export type RegisteredComponent = {
  type: string;
  element: Element;
};
