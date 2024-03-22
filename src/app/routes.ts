import errorModule from "@error/error.module";
import { RouteConfig } from "@shared/router/router";
import showcaseModule from "@showcase/showcase.module";

export const routes: RouteConfig[] = [
  {
    path: "/",
    componentLoader: showcaseModule,
  },
  {
    path: "/showcase",
    componentLoader: showcaseModule,
  },
  {
    path: "/error",
    componentLoader: errorModule,
  },
  {
    default: {
      componentLoader: errorModule,
    },
  },
];
