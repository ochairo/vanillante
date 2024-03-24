import { router } from "./core/router/router";
import { routeConfigs } from "./routes";

const rootElement = document.getElementById("root")!;
(() => {
  window.addEventListener("popstate", () => router(routeConfigs, rootElement));
  document.addEventListener("DOMContentLoaded", () =>
    router(routeConfigs, rootElement)
  );
})();
