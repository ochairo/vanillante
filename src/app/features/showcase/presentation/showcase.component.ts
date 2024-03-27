import BaseComponent from "@infrastructure/base-component/base.component";
import Router from "@infrastructure/router/router";
import { ShowcaseData } from "@showcase/domain/entities/showcase.entity";
import GetShowcase from "@showcase/domain/usecases/get-showcase.usecase";
import style from "@showcase/presentation/showcase.component.css";
import template from "@showcase/presentation/showcase.component.html";
import "../../../infrastructure/ui-components/atoms/input/input.component";

class ShowcaseComponent extends BaseComponent {
  private _shadowRoot: ShadowRoot;
  private _getShowcase: GetShowcase | null;
  private _apiData: ShowcaseData[] = [];

  constructor(getShowcase?: GetShowcase) {
    super();
    this._getShowcase = getShowcase || null;
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  async onInit(): Promise<void> {
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

  private renderTable(): void {
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
            <td><input-component override-style="input {color: blue;}"></input-component></td>
          </tr>
          `
        )
        .join("");
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private displayError(message: string) {
    const router = Router.getInstance();
    router.navigateTo("/error");
  }
}

customElements.define("showcase-component", ShowcaseComponent);
export default ShowcaseComponent;
