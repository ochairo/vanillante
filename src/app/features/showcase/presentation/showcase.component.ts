import "./showcase.component.scss";
const htmlTemplate = require("./showcase.component.html").default;

class ShowcaseComponent extends HTMLElement {
  private _shadowRoot: ShadowRoot;
  private _apiData: string[] = [];

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this.render();
  }

  connectedCallback() {
    this.setupEventListeners();
  }

  private async fetchData(): Promise<string[]> {
    // Simulate API call
    return ["Data 1", "Data 2", "Data 3"];
  }

  private async render() {
    const apiData = await this.fetchData();
    this._apiData = apiData;
    this._shadowRoot.innerHTML = htmlTemplate;

    const tbody = this._shadowRoot.querySelector("tbody");
    if (tbody) {
      tbody.innerHTML = this.generateTableRows(apiData);
    }
  }

  private setupEventListeners() {
    const submitBtn = this._shadowRoot.querySelector(".submit-btn");
    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        console.log("Click");
      });
    }
  }

  private generateTableRows(data: string[]): string {
    return data.map((item) => `<tr><td>${item}</td></tr>`).join("");
  }
}

customElements.define("showcase-component", ShowcaseComponent);
export default ShowcaseComponent;
