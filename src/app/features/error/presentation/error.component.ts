var html = require("./error.component.html").default;

export class ErrorComponent extends HTMLElement {
  _shadowRoot: ShadowRoot;
  _template: string;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._template = html;
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
