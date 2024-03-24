// FIXME: any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ModuleLoader = () => Promise<{ [key: string]: any }>;
export interface RouteConfig {
  path?: string;
  moduleLoader?: ModuleLoader;
  /** TODO: children */
  children?: RouteConfig;
  default?: { moduleLoader: ModuleLoader };
}
