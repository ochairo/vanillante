import { Module, RouteConfig } from "@infrastructure/router/interfaces";

class Router {
  constructor(
    private routes: RouteConfig[],
    private rootElement: HTMLElement
  ) {}

  async navigate() {
    const sanitizedPath = window.location.pathname
      .replace(/\/+/g, "/")
      .replace(/\/+$/, "");
    const currentPath = sanitizedPath;
    console.log("URL", new URL(window.location.href));
    const matchedRoute = await this.findMatchingRoute(
      this.routes,
      currentPath,
      this.rootElement
    );

    if (!matchedRoute) {
      this.displayNotFound();
      return;
    }

    if (!matchedRoute.moduleLoader) {
      this.displayError();
      return;
    }

    try {
      const module = await matchedRoute.moduleLoader();
      this.renderModule(module);
    } catch (error) {
      console.error("Error loading page:", error);
      this.displayError();
    }
  }

  private async findMatchingRoute(
    routes: RouteConfig[],
    path: string,
    rootElement: HTMLElement
  ): Promise<RouteConfig | undefined> {
    for (const route of routes) {
      if (route.canActivate) {
        const canActivate = await route.canActivate();
        if (!canActivate) {
          this.displayAccessDenied();
          return;
        }
      }

      if (route.path === "/" && path === "") {
        return route;
      }
      if (route.path === path) {
        return route;
      }
      if (route.children) {
        if (route.path && route.path !== "/") {
          for (const child of route.children) {
            child.path = route.path! + child.path;
          }
        }
        const matchedChild = await this.findMatchingRoute(
          route.children,
          path,
          rootElement
        );
        if (matchedChild) {
          return matchedChild;
        }
      }
    }

    return undefined;
  }

  private renderModule(module: Module) {
    this.rootElement.innerHTML = "";
    for (const key in module) {
      if (Object.prototype.hasOwnProperty.call(module, key)) {
        this.rootElement.appendChild(module[key]);
      }
    }
  }

  private displayNotFound() {
    this.rootElement.innerHTML = "<h1>404 - Not Found</h1>";
  }

  private displayError() {
    this.rootElement.innerHTML = "<h1>Error loading page</h1>";
  }

  private displayAccessDenied() {
    this.rootElement.innerHTML = "<h1>Access Denied</h1>";
  }
}

export default Router;
