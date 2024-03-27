/**
 * Base class for custom elements
 */
export default class BaseComponent extends HTMLElement {
  protected _shadowRoot: ShadowRoot;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    console.log("[BaseComponent] Element connected to the DOM");
    this.onInit();
  }

  disconnectedCallback() {
    console.log("[BaseComponent] Element disconnected from the DOM");
    this.onDestroy();
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ) {
    console.log("[BaseComponent] Attribute changed");
    this.onAttributeChanged(name, oldValue, newValue);
  }

  // Custom lifecycle hooks, can be overridden in child classes
  protected onInit() {
    // Default implementation for initialization
  }

  protected onDestroy() {
    // Default implementation for cleanup
  }

  protected onAttributeChanged(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    name: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    oldValue: string | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    newValue: string | null
  ) {
    // Default implementation for attribute changes
  }
}
