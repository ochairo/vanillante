/**
 * Base class for custom elements that provides lifecycle hooks.
 */
export default class BaseComponent extends HTMLElement {
  connectedCallback() {
    this.onInit(); // Custom hook for initialization
  }

  disconnectedCallback() {
    this.onDestroy(); // Custom hook for cleanup
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ) {
    this.onAttributeChanged(name, oldValue, newValue); // Custom hook for attribute changes
  }

  // Custom lifecycle hooks, can be overridden in child classes
  protected onInit() {
    // Default implementation for initialization
  }

  protected onDestroy() {
    // Default implementation for cleanup
  }

  protected onAttributeChanged(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ) {
    console.log(
      `Attribute '${name}' changed from '${oldValue}' to '${newValue}'`
    );
  }
}
