import Router from "@infrastructure/router/router";
import { routesConfig } from "./routes";

const rootElement = document.getElementById("root")!;
const router = new Router(routesConfig, rootElement);

window.addEventListener("popstate", () => router.navigate());
document.addEventListener("DOMContentLoaded", () => router.navigate());
