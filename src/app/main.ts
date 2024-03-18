import { setRoutes } from "./core/router";
import { routes } from "./routes";

const rootElement = document.getElementById("root")!;
setRoutes(routes, rootElement);
