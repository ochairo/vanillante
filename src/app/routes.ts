import errorModule from "@error/error.module";
import { RouteConfig } from "@infrastructure/router/interfaces";
import showcaseModule from "@showcase/showcase.module";

export const routesConfig: RouteConfig[] = [
  {
    path: "/",
    moduleLoader: showcaseModule,
    children: [
      {
        path: "/showcase",
        moduleLoader: showcaseModule,
        canActivate: async () => {
          // Simulate a delay to show the loading spinner
          // if the canActivate method return false, children will not be processed
          await new Promise((resolve) => setTimeout(resolve, 2000));
          return true;
        },
        children: [
          {
            path: "/showcase",
            moduleLoader: showcaseModule,
          },
        ],
      },
      {
        path: "/error",
        moduleLoader: errorModule,
      },
    ],
  },
];
