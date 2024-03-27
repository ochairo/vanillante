import style from "@error/presentation/error.component.css";
import template from "@error/presentation/error.component.html";
import BaseComponent from "@infrastructure/base-component/base.component";

export class ErrorComponent extends BaseComponent {
  _template: string;

  constructor() {
    super();
    this._template = `<style>${style}</style>${template}`;
  }

  async onInit() {
    this._shadowRoot.innerHTML = this._template;
  }
}

customElements.define("error-component", ErrorComponent);
export default ErrorComponent;
