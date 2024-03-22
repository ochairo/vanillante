const showcaseModule = () =>
  Promise.all([
    import(
      /* webpackChunkName: "showcase.datasource" */
      "@showcase/data/datasources/remote/showcase.datasource"
    ),
    import(
      /* webpackChunkName: "get-showcase.usecase" */
      "@showcase/domain/usecases/get-showcase.usecase"
    ),
    import(
      /* webpackChunkName: "showcase.component" */
      "@showcase/presentation/showcase.component"
    ),
  ])
    .then(
      ([
        showcaseDataSourceModule,
        getShowcaseModule,
        showcaseComponentModule,
      ]) => {
        const showcaseDataSource = new showcaseDataSourceModule.default();
        const getShowcase = new getShowcaseModule.default(showcaseDataSource);
        const showcaseComponent = new showcaseComponentModule.default(
          getShowcase
        );

        return { showcaseComponent };
      }
    )
    .catch((error) => {
      console.error("Error loading dependencies:", error);
      return Promise.reject(error);
    });

export default showcaseModule;
