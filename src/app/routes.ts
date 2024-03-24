import errorModule from "@error/error.module";
import showcaseModule from "@showcase/showcase.module";
import { RouteConfig } from "./core/router/router";

// LazyLoad feature modules
export const routes: RouteConfig[] = [
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
