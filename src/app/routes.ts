import errorModule from "@error/error.module";
import showcaseModule from "@showcase/showcase.module";
import { RouteConfig } from "./infrastructure/router/interfaces";

// LazyLoad feature modules
export const routesConfig: RouteConfig[] = [
  {
    path: "/",
    moduleLoader: showcaseModule,
  },
  {
    path: "/showcase",
    moduleLoader: showcaseModule,
  },
  {
    path: "/error",
    moduleLoader: errorModule,
  },
  {
    default: {
      moduleLoader: errorModule,
    },
  },
];
