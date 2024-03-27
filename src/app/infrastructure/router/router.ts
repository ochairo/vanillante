import { ERRORS } from "@infrastructure/router/constants";
import { Module, RouteConfig } from "@infrastructure/router/interfaces";
import RouterError from "./error";

class Router {
  private static instance: Router | null = null;

  private constructor(
    private routes: RouteConfig[],
    private rootElement: HTMLElement
  ) {}

  /**
   * Returns the singleton instance of the router
   */
  public static getInstance(
    routes?: RouteConfig[],
    rootElement?: HTMLElement
  ): Router {
    if (!Router.instance && routes && rootElement) {
      Router.instance = new Router(routes, rootElement);
    } else if (!Router.instance) {
      throw new Error("Router instance needs to be initialized first.");
    }
    return Router.instance;
  }

  /**
   * Initializes the router
   */
  public init(): void {
    window.addEventListener("popstate", () => this.navigate());
    document.addEventListener("DOMContentLoaded", () => this.navigate());
  }

  /**
   * Navigates to the specified path.
   */
  public navigateTo(path: string): void {
    window.history.pushState({}, "", path);
    this.navigate();
  }

  private async navigate(path?: string): Promise<void> {
    try {
      const currentPath = path
        ? this.getSanitizedPath(path)
        : this.getSanitizedPath(window.location.pathname);
      const matchedRoute = await this.findMatchingRoute(
        this.routes,
        currentPath,
        this.rootElement
      );

      if (!matchedRoute) {
        throw this.routeNotFoundError();
      }

      if (!matchedRoute.moduleLoader) {
        throw this.loaderNotFoundError();
      }

      const module = await matchedRoute.moduleLoader();
      this.renderModule(module);
    } catch (error) {
      this.handleNavigationError(error);
    }
  }

  private getSanitizedPath(path: string): string {
    return path.replace(/\/+/g, "/").replace(/\/+$/, "");
  }

  private async findMatchingRoute(
    routes: RouteConfig[],
    path: string,
    rootElement: HTMLElement
  ): Promise<RouteConfig | undefined> {
    for (const route of routes) {
      try {
        if (route.canActivate) {
          const canActivate = await route.canActivate();
          if (!canActivate) {
            this.displayAccessDenied();
            return;
          }
        }

        if (this.isExactMatch(route.path, path)) {
          return route;
        }

        if (route.children) {
          const updatedChildren = this.updateChildPaths(route);
          const matchedChild = await this.findMatchingRoute(
            updatedChildren,
            path,
            rootElement
          );
          if (matchedChild) {
            return matchedChild;
          }
        }
      } catch (error) {
        console.error("Error during route activation:", error);
        this.displayError();
      }
    }

    return undefined;
  }

  private isExactMatch(routePath: string, currentPath: string): boolean {
    return (
      (routePath === "/" && currentPath === "") || routePath === currentPath
    );
  }

  private updateChildPaths(route: RouteConfig): RouteConfig[] {
    if (!route.path || route.path === "/") {
      return route.children || [];
    }

    return (route.children || []).map((child) => {
      return {
        ...child,
        path: route.path + child.path,
      };
    });
  }

  private renderModule(module: Module): void {
    this.rootElement.innerHTML = "";
    for (const key in module) {
      if (Object.prototype.hasOwnProperty.call(module, key)) {
        this.rootElement.appendChild(module[key]);
      }
    }
  }

  private routeNotFoundError(): RouterError {
    return new RouterError(
      ERRORS.ROUTE_NOT_FOUND.message,
      ERRORS.ROUTE_NOT_FOUND.status
    );
  }

  private loaderNotFoundError(): RouterError {
    return new RouterError(
      ERRORS.ROUTE_NOT_FOUND.message,
      ERRORS.ROUTE_NOT_FOUND.status
    );
  }

  private handleNavigationError(error: unknown): void {
    if (error instanceof RouterError) {
      console.error("Error during navigation:", error);
      switch (error.status) {
        case ERRORS.ROUTE_NOT_FOUND.status:
          this.displayNotFound();
          break;
        case ERRORS.LOADER_NOT_FOUND.status:
          this.displayError();
          break;
        default:
          this.displayError();
          break;
      }
    } else {
      this.displayError();
      console.error("Error during route activation:", error);
      throw error;
    }
  }

  private displayNotFound(): void {
    this.rootElement.innerHTML = "<h1>404 - Not Found</h1>";
  }

  private displayError(): void {
    this.rootElement.innerHTML = "<h1>Error loading page</h1>";
  }

  private displayAccessDenied(): void {
    this.rootElement.innerHTML = "<h1>Access Denied</h1>";
  }
}

export default Router;
