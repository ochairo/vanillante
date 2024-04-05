import style from "@adapters/ui/atoms/input/input.component.css";
import template from "@adapters/ui/atoms/input/input.component.html";

export class InputComponent extends HTMLElement {
  _shadowRoot: ShadowRoot;
  _template: string;
  _overrideStyle: string;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._template = `<style>${style}</style>${template}`;
    this._overrideStyle = "";
  }

  static get observedAttributes() {
    return ["override-style"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "override-style" && newValue !== oldValue) {
      this._overrideStyle = newValue || "";
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    this._shadowRoot.innerHTML = `${this._template}<style>${this._overrideStyle}</style>`;
  }
}

customElements.define("input-component", InputComponent);
export default InputComponent;
