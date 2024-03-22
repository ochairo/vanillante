import template from "@error/presentation/error.component.html";

export class ErrorComponent extends HTMLElement {
  _shadowRoot: ShadowRoot;
  _template: string;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._template = template;
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    this._shadowRoot.innerHTML = this._template;
  }
}

customElements.define("error-component", ErrorComponent);
export default ErrorComponent;
