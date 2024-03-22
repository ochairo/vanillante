import errorModule from "@error/error.module";
import { RouteConfig } from "@shared/router/router";
import showcaseModule from "@showcase/showcase.module";

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
