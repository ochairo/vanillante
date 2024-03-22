import ShowcaseDatasource from "@showcase/data/datasources/remote/showcase.datasource";
import { ShowcaseData } from "@showcase/domain/entities/showcase.entity";
import { IShowcaseRepository } from "@showcase/domain/interfaces/showcase.interfaces";

export default class ShowcaseRepository implements IShowcaseRepository {
  _showcaseDatasource: ShowcaseDatasource;
  constructor(showcaseDatasource: ShowcaseDatasource) {
    this._showcaseDatasource = showcaseDatasource;
  }

  async get(): Promise<ShowcaseData[]> {
    return this._showcaseDatasource.get();
  }
}
