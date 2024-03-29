/**
 * [BaseComponent] Base class for custom elements
 */
export default class BaseComponent extends HTMLElement {
  /** [BaseComponent] Shadow root of the element */
  protected _dom: ShadowRoot;

  constructor() {
    super();
    this._dom = this.attachShadow({ mode: "open" });
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

  /**
   * [BaseComponent] onInit: Called when the element is connected to the DOM
   */
  protected onInit() {}

  /**
   * [BaseComponent] onDestroy: Called when the element is disconnected from the DOM
   */
  protected onDestroy() {}

  /**
   * [BaseComponent] onAttributeChanged: Called when an attribute is changed
   */
  protected onAttributeChanged(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    name: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    oldValue: string | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    newValue: string | null
  ) {}
}
