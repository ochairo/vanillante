import BaseComponent from "@infrastructure/base-component/base.component";
import Router from "@infrastructure/router/router";
import "@infrastructure/ui-components/atoms/input/input.component";
import { ShowcaseData } from "@showcase/domain/entities/showcase.entity";
import GetShowcase from "@showcase/domain/usecases/get-showcase.usecase";
import style from "@showcase/presentation/showcase.component.css";
import html from "@showcase/presentation/showcase.component.html";

/**
 * [ShowcaseComponent] Component to display UI samples
 */
class ShowcaseComponent extends BaseComponent {
  private _getShowcase: GetShowcase | null;
  private _apiData: ShowcaseData[] = [];
  router = Router.getInstance();

  constructor(getShowcase?: GetShowcase) {
    super();
    this._dom.innerHTML = `<style>${style}</style>${html}`;
    this._getShowcase = getShowcase || null;
  }

  /**
   * Initialize the component
   */
  async onInit(): Promise<void> {
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

  /**
   * Render the table with the data
   */
  private renderTable(): void {
    const tbody = this._dom.querySelector("tbody");
    if (tbody) {
      tbody.innerHTML = this._apiData
        .map(
          (item) => `
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

  private displayError(message: string) {
    this._dom.innerHTML = `<h1>Error: ${message}</h1>`;
  }

  private navigateToErrorPage() {
    this.router.navigateTo("/error");
  }
}

customElements.define("showcase-component", ShowcaseComponent);
export default ShowcaseComponent;
