import { ShowcaseData } from "@showcase/domain/entities/showcase.entity";
import GetShowcase from "@showcase/domain/usecases/get-showcase.usecase";
import template from "@showcase/presentation/showcase.component.html";
import style from "@showcase/presentation/showcase.component.scss";

class ShowcaseComponent extends HTMLElement {
  private _shadowRoot: ShadowRoot;
  private _getShowcase: GetShowcase | null;
  private _apiData: ShowcaseData[] = [];

  constructor(getShowcase?: GetShowcase) {
    super();
    this._getShowcase = getShowcase || null;
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  private async render() {
    this._shadowRoot.innerHTML = `<style>${style}</style>${template}`;

    if (this._getShowcase) {
      try {
        const data = await this._getShowcase.execute();
        this._apiData = data;
        this.renderTable();
      } catch (error) {
        console.error("Error fetching data:", error);
        this.displayError("Error fetching data");
      }
    }
  }

  private renderTable() {
    const tbody = this._shadowRoot.querySelector("tbody");
    if (tbody) {
      tbody.innerHTML = this._apiData
        .map(
          (item) =>
            `
          <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>${item.price}</td>
          </tr>
          `
        )
        .join("");
    }
  }

  private setupEventListeners() {
    // Setup event listeners
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private displayError(message: string) {
    // Display error message in the component
  }
}

customElements.define("showcase-component", ShowcaseComponent);
export default ShowcaseComponent;
