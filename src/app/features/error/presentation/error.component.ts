import BaseComponent from "@adapters/base-component/base.component";
import style from "@error/presentation/error.component.css";
import template from "@error/presentation/error.component.html";

export class ErrorComponent extends BaseComponent {
  constructor() {
    super();
    this._dom.innerHTML = `<style>${style}</style>${template}`;
  }
}

customElements.define("error-component", ErrorComponent);
export default ErrorComponent;
