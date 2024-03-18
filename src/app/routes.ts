import { Route } from "./core/router";

export const routes: Route[] = [
  {
    path: "/",
    elementLoader: () =>
      import(
        /* webpackChunkName: "showcase" */ "./features/showcase/presentation/showcase.component"
      ),
  },
  {
    path: "/showcase",
    elementLoader: () =>
      import(
        /* webpackChunkName: "showcase" */ "./features/showcase/presentation/showcase.component"
      ),
  },
  {
    path: "/error",
    elementLoader: () =>
      import(
        /* webpackChunkName: "error" */ "./features/error/presentation/error.component"
      ),
  },
];
