export interface Route<T extends HTMLElement = HTMLElement> {
  path?: string;
  elementLoader?: () => Promise<{ default: new () => T }>;
  default?: Route<T>;
}

export const setRoutes = <T extends HTMLElement>(
  routes: Route<T>[],
  rootElement: HTMLElement
) => {
  window.addEventListener("popstate", () => router(routes, rootElement));
  document.addEventListener("DOMContentLoaded", () =>
    router(routes, rootElement)
  );
};

const router = async <T extends HTMLElement>(
  routes: Route<T>[],
  rootElement: HTMLElement
) => {
  const path = window.location.pathname;
  const route = routes.find(
    (route) => route.default === undefined && route.path === path
  );

  const defaultRoute = routes.find(
    (route) => route.path === undefined && route.default !== undefined
  );

  if (route) {
    await loadElement(route.elementLoader!, rootElement);
  } else if (defaultRoute && defaultRoute.default) {
    await loadElement(defaultRoute.default.elementLoader!, rootElement);
  } else {
    displayNotFound(rootElement);
  }
};

const loadElement = async <T extends HTMLElement>(
  elementLoader: () => Promise<{ default: new () => T }>,
  rootElement: HTMLElement
) => {
  try {
    const { default: Element } = await elementLoader();
    const element = new Element();
    clearRootElement(rootElement);
    rootElement.appendChild(element);
  } catch (error) {
    console.error("Error loading element:", error);
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
