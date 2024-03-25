import { RouteConfig } from "./interfaces";

export const router = async (
  routes: RouteConfig[],
  rootElement: HTMLElement
) => {
  const path = window.location.pathname;
  const matchedRoute = findRoute(routes, path);

  if (matchedRoute) {
    await loadRoute(matchedRoute, rootElement);
  } else {
    displayNotFound(rootElement);
  }
};

const findRoute = (
  routes: RouteConfig[],
  path: string
): RouteConfig | undefined => {
  for (const route of routes) {
    if (route.path === path) {
      return route;
    } else if (route.children) {
      const nestedRoute = findRoute(
        route.children.map((childRoute) => ({
          ...childRoute,
          path:
            route.path && childRoute.path ? route.path + childRoute.path : "",
        })),
        path
      );
      if (nestedRoute) {
        return nestedRoute;
      }
    }
  }
  return undefined;
};

const loadRoute = async (route: RouteConfig, rootElement: HTMLElement) => {
  if (route.moduleLoader) {
    try {
      const componentModule = await route.moduleLoader();
      const key = Object.keys(componentModule)[0];
      const Component = componentModule?.[key!];
      clearRootElement(rootElement);
      rootElement.appendChild(Component);
    } catch (error) {
      displayError(rootElement);
    }
  } else {
    displayError(rootElement);
  }
};

const clearRootElement = (rootElement: HTMLElement) => {
  rootElement.innerHTML = "";
};

const displayNotFound = (rootElement: HTMLElement) => {
  rootElement.innerHTML = "<h1>404 - Not Found</h1>";
};

const displayError = (rootElement: HTMLElement) => {
  rootElement.innerHTML = "<h1>Error loading page</h1>";
};
