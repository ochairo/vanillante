// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Module = { [key: string]: any };

export type ModuleLoader = () => Promise<Module>;

export interface RouteConfig {
  path: string;
  moduleLoader: ModuleLoader;
  canActivate?: () => Promise<boolean>;
  children?: RouteConfig[];
}

export interface CustomErrorType extends Error {
  status: number;
}
