export interface Route {
  path: string;
  elementLoader: () => Promise<any>;
}

export const setRoutes = (routes: Route[]) => {
  window.addEventListener("popstate", () => router(routes));
  document.addEventListener("DOMContentLoaded", () => router(routes));
};

const router = async (routes: Route[], rootElementId: string = "root") => {
  const path = window.location.pathname;
  const route = routes.find((route) => route.path === path);

  if (route) {
    const { default: Element } = await route.elementLoader();
    const element = new Element() as HTMLElement;

    document.getElementById(rootElementId)!.innerHTML = "";
    document.getElementById(rootElementId)!.appendChild(element);
  } else {
    document.getElementById(rootElementId)!.innerHTML =
      "<h1>404 - Not Found</h1>";
  }
};
