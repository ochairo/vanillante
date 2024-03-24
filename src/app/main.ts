import { router } from "./infrastructure/router/router";
import { routesConfig } from "./routes";

const rootElement = document.getElementById("root")!;
(() => {
  window.addEventListener("popstate", () => router(routesConfig, rootElement));
  document.addEventListener("DOMContentLoaded", () =>
    router(routesConfig, rootElement)
  );
})();
