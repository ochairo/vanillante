import style from "@shared/ui-components/atoms/input/input.component.css";
import template from "@shared/ui-components/atoms/input/input.component.html";

export class InputComponent extends HTMLElement {
  _shadowRoot: ShadowRoot;
  _template: string;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._template = `<style>${style}</style>${template}`;
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    this._shadowRoot.innerHTML = this._template;
  }
}

customElements.define("input-component", InputComponent);
export default InputComponent;
