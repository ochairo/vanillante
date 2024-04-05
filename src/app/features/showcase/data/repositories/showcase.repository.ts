import RemoteDatasource from "@showcase/data/datasources/remote/showcase.datasource";
import { ShowcaseData } from "@showcase/domain/entities/showcase.entity";
import { IShowcaseRepository } from "@showcase/domain/interfaces/showcase.interfaces";

export default class ShowcaseRepository implements IShowcaseRepository {
  _remoteDataSource: RemoteDatasource;
  constructor(remoteDatasource: RemoteDatasource) {
    this._remoteDataSource = remoteDatasource;
  }

  async get(): Promise<ShowcaseData[]> {
    // If you need merge or shape data do it here, no necesary to return the same data as the API
    return this._remoteDataSource.get();
  }
}
