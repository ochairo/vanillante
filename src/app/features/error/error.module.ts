const errorModule = () =>
  Promise.all([
    import(
      /* webpackChunkName: "error.component" */
      "@error/presentation/error.component"
    ),
  ])
    .then(([ErrorComponent]) => {
      const errorComponent = new ErrorComponent.default();

      return { errorComponent };
    })
    .catch((error) => {
      console.error("Error loading dependencies:", error);
      return Promise.reject(error);
    });

/**
 * [errorModule] Module to load the error component
 */
export default errorModule;
