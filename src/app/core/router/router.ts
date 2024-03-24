import { ModuleLoader, RouteConfig } from "./interfaces";

export const router = async (
  routes: RouteConfig[],
  rootElement: HTMLElement
) => {
  const path = window.location.pathname;
  const route = routes.find((route) => route.path === path);
  const defaultRoute = routes.find((route) => route.default);

  if (route) {
    await _loadModule(route.moduleLoader, rootElement);
  } else if (defaultRoute && defaultRoute.default) {
    await _loadModule(defaultRoute.default.moduleLoader, rootElement);
  } else {
    _displayNotFound(rootElement);
  }
};

const _loadModule = async (
  moduleLoader: ModuleLoader | undefined,
  rootElement: HTMLElement
) => {
  if (!moduleLoader) {
    _displayError(rootElement);
    return;
  }

  try {
    const componentModule = await moduleLoader();
    const key = Object.keys(componentModule)[0];
    const Component = componentModule?.[key!];
    _clearRootElement(rootElement);
    rootElement.appendChild(Component);
  } catch (error) {
    console.error("Error loading component:", error);
    _displayError(rootElement);
  }
};

const _clearRootElement = (rootElement: HTMLElement) => {
  rootElement.innerHTML = "";
};

const _displayNotFound = (rootElement: HTMLElement) => {
  rootElement.innerHTML = "<h1>404 - Not Found</h1>";
};

const _displayError = (rootElement: HTMLElement) => {
  rootElement.innerHTML = "<h1>Error loading page</h1>";
};
