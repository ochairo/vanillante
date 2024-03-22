const errorModule = () =>
  Promise.all([
    import(
      /* webpackChunkName: "error.component" */
      "@error/presentation/error.component"
    ),
  ])
    .then(([errorComponentModule]) => {
      const errorComponent = new errorComponentModule.default();

      return { errorComponent };
    })
    .catch((error) => {
      console.error("Error loading dependencies:", error);
      return Promise.reject(error);
    });

export default errorModule;
