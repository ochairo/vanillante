export default class VllaComponent extends HTMLElement {
  /** [vanillatte:core] Shadow root of the element */
  protected _dom: ShadowRoot;

  constructor() {
    super();
    this._dom = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("[BaseComponent] Element connected to the DOM");
    this.onInit();
    this.setupMutationObserver();
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
   * [vanillatte:core] onInit: Called when the element is connected to the DOM
   */
  protected onInit() {}

  /**
   * [vanillatte:core] onDestroy: Called when the element is disconnected from the DOM
   */
  protected onDestroy() {}

  /**
   * [vanillatte:core] onAttributeChanged: Called when an attribute is changed
   */
  protected onAttributeChanged(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    name: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    oldValue: string | null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    newValue: string | null
  ) {}

  /**
   * [vanillatte:core] setupMutationObserver: Sets up a MutationObserver to detect changes in the DOM
   */
  protected setupMutationObserver() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        console.log("[BaseComponent] DOM mutation detected:", mutation);
        // Perform actions based on mutation
      });
    });

    observer.observe(this._dom, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  }
}
