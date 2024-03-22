/* eslint-disable @typescript-eslint/no-explicit-any */

type ComponentLoader = () => Promise<{ [key: string]: any }>;
export interface RouteConfig {
  path?: string;
  componentLoader?: ComponentLoader;
  default?: {
    componentLoader: ComponentLoader;
  };
}

export const setRoutes = (routes: RouteConfig[], rootElement: HTMLElement) => {
  window.addEventListener("popstate", () => router(routes, rootElement));
  document.addEventListener("DOMContentLoaded", () =>
    router(routes, rootElement)
  );
};

const router = async (routes: RouteConfig[], rootElement: HTMLElement) => {
  const path = window.location.pathname;
  const route = routes.find((route) => route.path === path);
  const defaultRoute = routes.find((route) => route.default);

  if (route) {
    await loadComponent(route.componentLoader, rootElement);
  } else if (defaultRoute && defaultRoute.default) {
    await loadComponent(defaultRoute.default.componentLoader, rootElement);
  } else {
    displayNotFound(rootElement);
  }
};

const loadComponent = async (
  componentLoader: (() => Promise<{ [key: string]: any }>) | undefined,
  rootElement: HTMLElement
) => {
  if (!componentLoader) {
    displayError(rootElement);
    return;
  }

  try {
    const componentModule = await componentLoader();
    const key = Object.keys(componentModule)[0];
    const Component = componentModule?.[key!];
    clearRootElement(rootElement);
    rootElement.appendChild(Component);
  } catch (error) {
    console.error("Error loading component:", error);
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
