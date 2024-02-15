import type { RegisteredComponent } from "./types";

export function toComponent(
  element: Element,
  type: string,
  id: string,
): RegisteredComponent {
  return { element, type, id };
}

export function getComponent(id: string): RegisteredComponent | null {
  const element = document.querySelector(`.${id || `__devine__NULL`}`);
  if (!element) return null;
  const type = element.getAttribute(`devine-id`);
  if (!type) return null;
  return toComponent(element, type, id);
}

export function getElementsOfType(type: string): Element[] {
  return [...document.querySelectorAll(`[devine-id='${type}']`)];
}
