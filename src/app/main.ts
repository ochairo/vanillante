import { setRoutes } from "@shared/router/router";
import { routes } from "./routes";

const rootElement = document.getElementById("root")!;
setRoutes(routes, rootElement);
