import style from "@error/presentation/error.component.css";
import template from "@error/presentation/error.component.html";
import BaseComponent from "@infrastructure/base-component/base.component";

export class ErrorComponent extends BaseComponent {
  constructor() {
    super();
    this._shadowRoot.innerHTML = `<style>${style}</style>${template}`;
  }
}

customElements.define("error-component", ErrorComponent);
export default ErrorComponent;
