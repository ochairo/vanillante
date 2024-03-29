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
    .then(([ShowcaseDataSource, GetShowcase, ShowcaseComponent]) => {
      const showcaseDataSource = new ShowcaseDataSource.default();
      const getShowcase = new GetShowcase.default(showcaseDataSource);
      const showcaseComponent = new ShowcaseComponent.default(getShowcase);

      return { showcaseComponent };
    })
    .catch((error) => {
      console.error("Error loading dependencies:", error);
      return Promise.reject(error);
    });

/**
 * [showcaseModule] Module to load the showcase component
 */
export default showcaseModule;
