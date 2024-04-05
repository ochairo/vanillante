import Router from "@adapters/router/router";
import { routesConfig } from "./routes";

const rootElement = document.getElementById("root")!;
const router = Router.getInstance(routesConfig, rootElement);
router.init();
